from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

from rest_framework_simplejwt.tokens import RefreshToken

from django.shortcuts import get_object_or_404

from .models import User, LawFirm, LawFirmMember
from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    UserSerializer,
    CreateUserByLawyerSerializer,
    LawFirmMemberSerializer
)
from .permissions import IsLawyer, CanCreateClient


# =========================
# CLIENT SELF REGISTRATION
# =========================
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            refresh = RefreshToken.for_user(user)

            return Response({
                "success": True,
                "message": "Client registered successfully",
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)

        return Response({
            "success": False,
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
# =========================
# LOGIN (JWT)
# =========================
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)

            return Response({
                "success": True,
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": UserSerializer(user).data
            }, status=status.HTTP_200_OK)

        return Response({
            "success": False,
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)


# =========================
# CREATE ASSISTANT (LAWYER ONLY)
# =========================
class CreateAssistantView(APIView):
    permission_classes = [IsAuthenticated, IsLawyer]

    def post(self, request):
        data = request.data.copy()
        data['role'] = 'ASSISTANT'

        serializer = CreateUserByLawyerSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()

            firm = request.user.owned_firm

            LawFirmMember.objects.create(
                user=user,
                firm=firm,
                role='ASSISTANT',
                can_create_clients=False
            )

            return Response({
                "success": True,
                "message": "Assistant created successfully",
                "user": UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# =========================
# CREATE CLIENT (LAWYER OR AUTHORIZED ASSISTANT)
# =========================
class CreateClientView(APIView):
    permission_classes = [IsAuthenticated, CanCreateClient]

    def post(self, request):
        data = request.data.copy()
        data['role'] = 'CLIENT'

        serializer = CreateUserByLawyerSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()

            if request.user.role == 'LAWYER':
                firm = request.user.owned_firm
            else:
                membership = get_object_or_404(
                    LawFirmMember,
                    user=request.user
                )
                firm = membership.firm

            LawFirmMember.objects.create(
                user=user,
                firm=firm,
                role='CLIENT'
            )

            return Response({
                "success": True,
                "message": "Client created successfully",
                "user": UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# =========================
# TOGGLE ASSISTANT PERMISSION
# =========================
class ToggleAssistantPermissionView(APIView):
    permission_classes = [IsAuthenticated, IsLawyer]

    def post(self, request, user_id):
        assistant = get_object_or_404(
            User,
            id=user_id,
            role='ASSISTANT'
        )

        membership = get_object_or_404(
            LawFirmMember,
            user=assistant,
            firm=request.user.owned_firm
        )

        membership.can_create_clients = not membership.can_create_clients
        membership.save()

        return Response({
            "success": True,
            "can_create_clients": membership.can_create_clients
        })


# =========================
# LIST ASSISTANTS
# =========================
class ListAssistantsView(APIView):
    permission_classes = [IsAuthenticated, IsLawyer]

    def get(self, request):
        firm = request.user.owned_firm

        assistants = LawFirmMember.objects.filter(
            firm=firm,
            role='ASSISTANT'
        ).select_related('user')

        return Response({
            "success": True,
            "count": assistants.count(),
            "data": LawFirmMemberSerializer(assistants, many=True).data
        })


# =========================
# LIST CLIENTS
# =========================
class ListClientsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        if request.user.role == 'LAWYER':
            firm = request.user.owned_firm

        elif request.user.role == 'ASSISTANT':
            membership = get_object_or_404(
                LawFirmMember,
                user=request.user
            )
            firm = membership.firm

        else:
            return Response({
                "error": "Not allowed"
            }, status=status.HTTP_403_FORBIDDEN)

        clients = LawFirmMember.objects.filter(
            firm=firm,
            role='CLIENT'
        ).select_related('user')

        return Response({
            "success": True,
            "count": clients.count(),
            "data": LawFirmMemberSerializer(clients, many=True).data
        })


# =========================
# CURRENT USER
# =========================
class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "success": True,
            "user": UserSerializer(request.user).data
        })