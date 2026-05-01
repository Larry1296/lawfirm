from rest_framework.permissions import BasePermission
from .models import LawFirmMember


# =========================
# HELPER
# =========================
def get_membership(user):
    if user.role == 'LAWYER':
        return LawFirmMember.objects.filter(
            user=user,
            firm=user.owned_firm,
            is_active=True
        ).first()

    return LawFirmMember.objects.filter(
        user=user,
        is_active=True
    ).first()


# =========================
# ONLY SYSTEM OWNER
# =========================
class IsLawyer(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'LAWYER'
        )


# =========================
# CAN CREATE CLIENT
# =========================
class CanCreateClient(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        # owner always allowed
        if user.role == 'LAWYER':
            return True

        membership = get_membership(user)

        return membership and membership.can_create_clients