from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404

from .models import LawFirmMember, User
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    CreateStaffSerializer,
    CreateClientSerializer,
    LawFirmMemberSerializer,
    ConvertClientSerializer, 
    UserSerializer
)
from .permissions import (
    IsAdmin,
    CanCreateClient,
    CanDeleteUser
)


# =========================
# RESPONSE HELPER
# =========================
def api_response(success=True, message="", data=None, errors=None):
    return {
        "success": success,
        "message": message,
        "data": data,
        "errors": errors
    }


# =========================
# REGISTER (CLIENT)
# =========================
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)

            return Response(api_response(
                True,
                "Client registered successfully",
                {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "user": UserSerializer(user).data
                }
            ), status=status.HTTP_201_CREATED)

        return Response(api_response(False, errors=serializer.errors), status=400)
    
class ConvertClientToFirmView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def post(self, request, user_id):

        user = get_object_or_404(User, id=user_id)

        # 1. Must be a client
        if user.role != "CLIENT":
            return Response(api_response(
                False,
                message="User is not a client"
            ), status=400)

        firm = request.user.owned_firm

        # 2. Already member check
        existing = LawFirmMember.objects.filter(
            user=user,
            firm=firm,
            is_active=True
        ).first()

        if existing:
            return Response(api_response(
                False,
                message="Client already belongs to this firm"
            ), status=400)

        # 3. Create membership
        membership = LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role="CLIENT",
            created_by=request.user
        )

        return Response(api_response(
            True,
            message="Client successfully added to firm",
            data={
                "user": UserSerializer(user).data,
                "membership_id": membership.id
            }
        ))


# =========================
# LOGIN
# =========================
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)

            return Response(api_response(
                True,
                "Login successful",
                {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "user": UserSerializer(user).data
                }
            ))

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================
# CREATE STAFF (ADMIN ONLY)
# =========================
class CreateStaffView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def post(self, request):
        serializer = CreateStaffSerializer(
            data=request.data,
            context={"request": request}
        )

        if serializer.is_valid():
            user = serializer.save()

            return Response(api_response(
                True,
                "Staff created successfully",
                UserSerializer(user).data
            ), status=201)

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================
# CREATE CLIENT
# =========================
class CreateClientView(APIView):
    permission_classes = [IsAuthenticated, CanCreateClient]

    def post(self, request):
        serializer = CreateClientSerializer(
            data=request.data,
            context={"request": request}
        )

        if serializer.is_valid():
            user = serializer.save()

            return Response(api_response(
                True,
                "Client created successfully",
                UserSerializer(user).data
            ), status=201)

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================
# UPDATE STAFF PERMISSIONS
# =========================
class UpdateStaffPermissionsView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def patch(self, request, user_id):

        firm = getattr(request.user, "owned_firm", None)
        if not firm:
            return Response(api_response(False, "No firm found"), status=403)

        membership = get_object_or_404(
            LawFirmMember,
            user__id=user_id,
            firm=firm
        )

        allowed_fields = [
            'can_create_clients',
            'can_manage_cases',
            'can_view_all_cases',
            'can_schedule',
            'can_manage_documents',
            'is_active'
        ]

        for field in allowed_fields:
            if field in request.data:
                setattr(membership, field, request.data[field])

        membership.save()

        return Response(api_response(
            True,
            "Permissions updated",
            LawFirmMemberSerializer(membership).data
        ))


# =========================
# LIST STAFF
# =========================
class ListStaffView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):

        firm = getattr(request.user, "owned_firm", None)
        if not firm:
            return Response(api_response(False, "No firm found"), status=403)

        members = LawFirmMember.objects.filter(
            firm=firm,
            role__in=['LAWYER', 'SECRETARY']
        ).select_related('user')

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(members, many=True).data
        ))


# =========================
# LIST CLIENTS (SECURE FIX)
# =========================
class ListClientsView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):

        firm = request.user.firm
        if not firm:
            return Response(api_response(False, "No firm found"), status=403)

        clients = LawFirmMember.objects.filter(
            firm=firm,
            role='CLIENT'
        ).select_related('user')

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(clients, many=True).data
        ))


# =========================
# DELETE USER
# =========================
class DeleteUserView(APIView):
    permission_classes = [IsAuthenticated, CanDeleteUser]

    def delete(self, request, user_id):

        user = get_object_or_404(User, id=user_id)

        if user == request.user:
            return Response(api_response(
                False,
                "You cannot delete yourself"
            ), status=400)

        user.delete()

        return Response(api_response(
            True,
            "User deleted successfully"
        ))


# =========================
# CURRENT USER
# =========================
class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(api_response(
            True,
            data=UserSerializer(request.user).data
        ))