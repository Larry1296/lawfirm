from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import get_object_or_404

from .models import LawFirmMember
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    CreateStaffSerializer,
    CreateClientSerializer,
    LawFirmMemberSerializer
)
from .permissions import (
    IsLawyer,
    CanCreateClient
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
# CREATE STAFF (LAWYER ONLY)
# =========================
class CreateStaffView(APIView):
    permission_classes = [IsAuthenticated, IsLawyer]

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
    permission_classes = [IsAuthenticated, IsLawyer]

    def patch(self, request, user_id):
        membership = get_object_or_404(
            LawFirmMember,
            user__id=user_id,
            firm=request.user.owned_firm
        )

        for field in [
            'can_create_clients',
            'can_manage_cases',
            'can_view_all_cases',
            'can_schedule',
            'can_manage_documents',
            'is_active'
        ]:
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
    permission_classes = [IsAuthenticated, IsLawyer]

    def get(self, request):
        members = LawFirmMember.objects.filter(
            firm=request.user.owned_firm,
            role__in=['LAWYER', 'SECRETARY']
        ).select_related('user')

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(members, many=True).data
        ))


# =========================
# LIST CLIENTS
# =========================
class ListClientsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        membership = request.user.firm

        clients = LawFirmMember.objects.filter(
            firm=membership,
            role='CLIENT'
        ).select_related('user')

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(clients, many=True).data
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