from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import LawFirm, LawFirmMember, FirmPermission


# =========================================================
# CREATE OWNER MEMBERSHIP WHEN FIRM IS CREATED
# =========================================================
@receiver(post_save, sender=LawFirm)
def create_firm_owner_membership(sender, instance, created, **kwargs):
    """
    When a LawFirm is created:
    - Ensure owner is added as LAWYER member
    - Assign full admin permissions
    """

    if not created:
        return

    owner = instance.owner

    membership, created_membership = LawFirmMember.objects.get_or_create(
        user=owner,
        firm=instance,
        defaults={
            "role": "LAWYER",
            "created_by": owner,
            "is_active": True,
        }
    )

    # =====================================================
    # GIVE OWNER FULL SYSTEM/FIRM PERMISSIONS
    # =====================================================
    if created_membership:

        permissions = FirmPermission.objects.filter(
            code__in=[
                "create_clients",
                "manage_cases",
                "view_all_cases",
                "schedule_events",
                "manage_documents",
                "manage_staff",
                "manage_permissions",
            ]
        )

        membership.permissions.set(permissions)