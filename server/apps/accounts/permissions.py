from rest_framework.permissions import BasePermission
from .models import LawFirmMember


# =========================
# HELPER
# =========================
def get_membership(user):
    """
    Returns the active firm membership for a user
    """
    if not user or not user.is_authenticated:
        return None

    return LawFirmMember.objects.filter(
        user=user,
        is_active=True
    ).select_related('firm').first()


# =========================
# ROLE-BASED PERMISSIONS
# =========================

class IsAdmin(BasePermission):
    """
    Only system owner (ADMIN)
    """
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'ADMIN'
        )


class IsStaff(BasePermission):
    """
    Staff users only
    """
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'STAFF'
        )


class IsClient(BasePermission):
    """
    Client users only
    """
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'CLIENT'
        )


# =========================
# PERMISSION-BASED ACCESS
# =========================

class CanCreateClient(BasePermission):
    """
    ADMIN always allowed
    STAFF allowed only if permission is enabled
    """
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        # ADMIN can always create clients
        if user.role == 'ADMIN':
            return True

        membership = get_membership(user)

        return (
            membership
            and membership.is_active
            and membership.can_create_clients
        )


class CanManageCases(BasePermission):
    """
    Legal case management (LAWYERS only by default)
    """
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        if user.role == 'ADMIN':
            return True

        membership = get_membership(user)

        return (
            membership
            and membership.is_active
            and membership.can_manage_cases
        )


class CanViewAllCases(BasePermission):
    """
    View all firm cases
    """
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        if user.role == 'ADMIN':
            return True

        membership = get_membership(user)

        return (
            membership
            and membership.is_active
            and membership.can_view_all_cases
        )


class CanSchedule(BasePermission):
    """
    Calendar / scheduling access
    """
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        if user.role == 'ADMIN':
            return True

        membership = get_membership(user)

        return (
            membership
            and membership.is_active
            and membership.can_schedule
        )


class CanManageDocuments(BasePermission):
    """
    Document management
    """
    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        if user.role == 'ADMIN':
            return True

        membership = get_membership(user)

        return (
            membership
            and membership.is_active
            and membership.can_manage_documents
        )


# =========================
# DESTRUCTIVE ACTIONS
# =========================

class CanDeleteUser(BasePermission):
    """
    Only ADMIN can delete users (staff + clients)
    """
    def has_permission(self, request, view):
        return (
            request.user
            and request.user.is_authenticated
            and request.user.role == 'ADMIN'
        )