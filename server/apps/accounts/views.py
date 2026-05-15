from django.db import transaction
from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User, LawFirmMember, FirmPermission
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    CreateStaffSerializer,
    CreateClientSerializer,
    LawFirmMemberSerializer,
)
from .permissions import (
    IsAdmin,
    CanCreateClients,   # ✅ FIXED
    CanDeleteUser
)


# =========================================================
# RESPONSE HELPER
# =========================================================
def api_response(success=True, message="", data=None, errors=None):
    return {
        "success": success,
        "message": message,
        "data": data,
        "errors": errors,
    }


# =========================================================
# REGISTER (CLIENT)
# =========================================================
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
                    "user": UserSerializer(user).data,
                }
            ), status=status.HTTP_201_CREATED)

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================================================
# LOGIN
# =========================================================
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            refresh = RefreshToken.for_user(user)

            return Response(api_response(
                True,
                "Login successful",
                {
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "user": UserSerializer(user).data,
                }
            ))

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================================================
# CURRENT USER
# =========================================================
class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(api_response(
            True,
            data=UserSerializer(request.user).data
        ))


# =========================================================
# CREATE STAFF (ADMIN ONLY)
# =========================================================
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
            ), status=status.HTTP_201_CREATED)

        return Response(api_response(False, errors=serializer.errors), status=400)
    

    


# =========================================================
# CREATE CLIENT (FIRM CONTROLLED)
# =========================================================
class CreateClientView(APIView):
    permission_classes = [IsAuthenticated, CanCreateClients]

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
            ), status=status.HTTP_201_CREATED)

        return Response(api_response(False, errors=serializer.errors), status=400)


# =========================================================
# ADD CLIENT TO FIRM
# =========================================================
class ConvertClientToFirmView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def post(self, request, user_id):

        user = get_object_or_404(User, id=user_id)

        if user.role != "CLIENT":
            return Response(api_response(
                False,
                "User is not a client"
            ), status=status.HTTP_400_BAD_REQUEST)

        firm = getattr(request.user, "owned_firm", None)

        if not firm:
            return Response(api_response(
                False,
                "Admin has no firm"
            ), status=status.HTTP_403_FORBIDDEN)

        existing = LawFirmMember.objects.filter(
            user=user,
            firm=firm
        ).first()

        if existing:
            return Response(api_response(
                False,
                "Client already belongs to this firm"
            ), status=status.HTTP_400_BAD_REQUEST)

        membership = LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role="CLIENT",
            created_by=request.user
        )

        return Response(api_response(
            True,
            "Client successfully added to firm",
            {
                "user": UserSerializer(user).data,
                "membership_id": str(membership.id)
            }
        ), status=status.HTTP_201_CREATED)


# =========================================================
# UPDATE STAFF (PERMISSIONS + STATUS)
# =========================================================
class UpdateStaffPermissionsView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    @transaction.atomic
    def patch(self, request, user_id):

        firm = getattr(request.user, "owned_firm", None)

        if not firm:
            return Response(
                api_response(False, "No firm found"),
                status=status.HTTP_403_FORBIDDEN
            )

        membership = get_object_or_404(
            LawFirmMember,
            user__id=user_id,
            firm=firm,
            role__in=["LAWYER", "SECRETARY"]
        )

        # =====================================================
        # UPDATE ACTIVE STATUS
        # =====================================================
        if "is_active" in request.data:

            membership.is_active = bool(
                request.data.get("is_active")
            )

        # =====================================================
        # TOGGLE SINGLE PERMISSION
        # =====================================================
        permission_code = request.data.get("permission")

        if permission_code:

            permission = FirmPermission.objects.filter(
                code=permission_code
            ).first()

            if not permission:
                return Response(
                    api_response(
                        False,
                        "Invalid permission code"
                    ),
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Toggle ON/OFF
            if membership.permissions.filter(
                id=permission.id
            ).exists():

                membership.permissions.remove(permission)

            else:
                membership.permissions.add(permission)

        # =====================================================
        # REPLACE ALL PERMISSIONS
        # =====================================================
        if "permissions" in request.data:

            codes = request.data.get("permissions", [])

            if not isinstance(codes, list):

                return Response(
                    api_response(
                        False,
                        "permissions must be a list"
                    ),
                    status=status.HTTP_400_BAD_REQUEST
                )

            permissions = FirmPermission.objects.filter(
                code__in=codes
            )

            if permissions.count() != len(set(codes)):

                return Response(
                    api_response(
                        False,
                        "Some permission codes are invalid"
                    ),
                    status=status.HTTP_400_BAD_REQUEST
                )

            membership.permissions.set(permissions)

        membership.save()

        return Response(
            api_response(
                True,
                "Staff updated successfully",
                LawFirmMemberSerializer(membership).data
            ),
            status=status.HTTP_200_OK
        )

# =========================================================
# LIST STAFF
# =========================================================
class ListStaffView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):

        firm = getattr(request.user, "owned_firm", None)

        if not firm:
            return Response(api_response(False, "No firm found"), status=403)

        members = LawFirmMember.objects.filter(
            firm=firm,
            role__in=["LAWYER", "SECRETARY"]
        ).select_related("user")

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(members, many=True).data
        ))


# =========================================================
# LIST CLIENTS
# =========================================================
class ListClientsView(APIView):
    permission_classes = [IsAuthenticated, IsAdmin]

    def get(self, request):

        firm = getattr(request.user, "owned_firm", None)

        if not firm:
            return Response(api_response(False, "No firm found"), status=403)

        clients = LawFirmMember.objects.filter(
            firm=firm,
            role="CLIENT"
        ).select_related("user")

        return Response(api_response(
            True,
            data=LawFirmMemberSerializer(clients, many=True).data
        ))


# =========================================================
# DELETE USER
# =========================================================
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