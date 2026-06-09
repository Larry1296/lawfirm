from rest_framework.permissions import BasePermission
from .models import LawFirmMember


# =========================================================
# HELPERS
# =========================================================
def get_membership(user):
    """
    Returns active firm membership for a user.
    Central source of truth (avoid duplication elsewhere).
    """
    if not user or not user.is_authenticated:
        return None

    return user.get_membership()


# =========================================================
# BASE ROLE PERMISSIONS
# =========================================================
class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        return (
            user
            and user.is_authenticated
            and user.role == 'ADMIN'
            and user.is_active
        )


class IsStaff(BasePermission):
    """
    System-level staff (not firm role)
    """
    def has_permission(self, request, view):
        user = request.user

        return (
            user
            and user.is_authenticated
            and user.role in ['ADMIN', 'STAFF']
        )


class IsClient(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        return (
            user
            and user.is_authenticated
            and user.role == 'CLIENT'
        )


class IsFirmMember(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        return bool(get_membership(user))


# =========================================================
# RBAC BASE PERMISSION (FIRM LEVEL)
# =========================================================
class HasFirmPermission(BasePermission):
    """
    Base class for all firm-level permissions
    """
    required_permission = None

    def has_permission(self, request, view):
        user = request.user

        if not user or not user.is_authenticated:
            return False

        # ADMIN bypass (safe version)
        if user.role == 'ADMIN' and user.is_active:
            return True

        if not self.required_permission:
            return False

        membership = get_membership(user)

        if not membership:
            return False

        return membership.has_permission(self.required_permission)


# =========================================================
# SYSTEM RBAC PERMISSIONS
# =========================================================
class CanCreateClients(HasFirmPermission):
    required_permission = 'create_clients'


class CanManageCases(HasFirmPermission):
    required_permission = 'manage_cases'


class CanViewAllCases(HasFirmPermission):
    required_permission = 'view_all_cases'


class CanScheduleEvents(HasFirmPermission):
    required_permission = 'schedule_events'


class CanManageDocuments(HasFirmPermission):
    required_permission = 'manage_documents'


class CanManageStaff(HasFirmPermission):
    required_permission = 'manage_staff'


class CanManagePermissions(HasFirmPermission):
    required_permission = 'manage_permissions'


class CanAssignCasesToClients(HasFirmPermission):
    """
    FIXED: matches your seed_permissions.py
    """
    required_permission = 'convert_client_membership'


# =========================================================
# DESTRUCTIVE ACTIONS
# =========================================================
class CanDeleteUser(BasePermission):
    def has_permission(self, request, view):
        user = request.user

        return (
            user
            and user.is_authenticated
            and user.role == 'ADMIN'
            and user.is_active
        )