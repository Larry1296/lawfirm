from rest_framework.permissions import BasePermission
from .models import LawFirmMember


# =========================
# ONLY LAWYER ACCESS
# =========================
class IsLawyer(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'LAWYER'
        )


# =========================
# LAWYER OR AUTHORIZED ASSISTANT
# =========================
class CanCreateClient(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        # LAWYER → always allowed
        if user.role == 'LAWYER':
            return True

        # ASSISTANT → must have explicit permission
        if user.role == 'ASSISTANT':
            try:
                membership = LawFirmMember.objects.get(user=user)
                return membership.can_create_clients
            except LawFirmMember.DoesNotExist:
                return False

        return False