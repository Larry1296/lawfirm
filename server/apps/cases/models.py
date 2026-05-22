from django.db import models
from django.conf import settings
from django.core.exceptions import ValidationError  

from apps.accounts.models import (
    LawFirm,
    LawFirmMember
)


# =========================================================
# CASE STATUS
# =========================================================
class CaseStatus(models.TextChoices):

    PENDING = "PENDING", "Pending"
    FILED = "FILED", "Filed"
    UNDER_REVIEW = "UNDER_REVIEW", "Under Review"
    MENTION = "MENTION", "Mention"
    PRE_TRIAL = "PRE_TRIAL", "Pre Trial"
    HEARING = "HEARING", "Hearing"
    JUDGMENT_PENDING = "JUDGMENT_PENDING", "Judgment Pending"
    JUDGMENT_DELIVERED = "JUDGMENT_DELIVERED", "Judgment Delivered"
    APPEAL = "APPEAL", "Appeal"
    CLOSED = "CLOSED", "Closed"
    DISMISSED = "DISMISSED", "Dismissed"


# =========================================================
# CASE PRIORITY
# =========================================================
class CasePriority(models.TextChoices):

    LOW = "LOW", "Low"
    MEDIUM = "MEDIUM", "Medium"
    HIGH = "HIGH", "High"
    URGENT = "URGENT", "Urgent"


# =========================================================
# CASE TYPE
# =========================================================
class CaseType(models.TextChoices):

    CIVIL = "CIVIL", "Civil"
    CRIMINAL = "CRIMINAL", "Criminal"
    FAMILY = "FAMILY", "Family"
    LAND = "LAND", "Land"
    EMPLOYMENT = "EMPLOYMENT", "Employment"
    COMMERCIAL = "COMMERCIAL", "Commercial"
    SUCCESSION = "SUCCESSION", "Succession"


# =========================================================
# COURT TYPE
# =========================================================
class CourtType(models.TextChoices):

    MAGISTRATE = "MAGISTRATE", "Magistrate"
    HIGH_COURT = "HIGH_COURT", "High Court"
    COURT_OF_APPEAL = "COURT_OF_APPEAL", "Court of Appeal"
    SUPREME_COURT = "SUPREME_COURT", "Supreme Court"
    ENVIRONMENT_LAND = "ENVIRONMENT_LAND", "Environment & Land Court"
    EMPLOYMENT_LABOUR = "EMPLOYMENT_LABOUR", "Employment & Labour"
    SMALL_CLAIMS = "SMALL_CLAIMS", "Small Claims"


# =========================================================
# LEGAL CASE
# =========================================================
class LegalCase(models.Model):

    id = models.BigAutoField(
        primary_key=True
    )

    case_number = models.CharField(
        max_length=100,
        unique=True
    )

    law_firm = models.ForeignKey(
        LawFirm,
        on_delete=models.CASCADE,
        related_name="cases"
    )

    title = models.CharField(
        max_length=255
    )

    description = models.TextField()

    case_type = models.CharField(
        max_length=50,
        choices=CaseType.choices
    )

    court_type = models.CharField(
        max_length=50,
        choices=CourtType.choices
    )

    status = models.CharField(
        max_length=50,
        choices=CaseStatus.choices,
        default=CaseStatus.PENDING
    )

    priority = models.CharField(
        max_length=20,
        choices=CasePriority.choices,
        default=CasePriority.MEDIUM
    )

    filing_date = models.DateField()

    hearing_date = models.DateTimeField(
        null=True,
        blank=True
    )

    next_mention_date = models.DateTimeField(
        null=True,
        blank=True
    )

    court_name = models.CharField(
        max_length=255,
        blank=True
    )

    court_location = models.CharField(
        max_length=255,
        blank=True
    )

    plaintiff = models.CharField(
        max_length=255,
        blank=True
    )

    defendant = models.CharField(
        max_length=255,
        blank=True
    )

    # =====================================================
    # MEMBERSHIPS
    # =====================================================

    client_membership = models.ForeignKey(
        LawFirmMember,
        on_delete=models.CASCADE,
        related_name="client_cases"
    )

    assigned_lawyer = models.ForeignKey(
        LawFirmMember,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_lawyer_cases"
    )

    assigned_secretary = models.ForeignKey(
        LawFirmMember,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assigned_secretary_cases"
    )

    # =====================================================
    # AUDIT
    # =====================================================

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="created_cases"
    )

    is_active = models.BooleanField(
        default=True
    )

    is_archived = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    # =====================================================
    # META
    # =====================================================

    class Meta:

        ordering = ["-created_at"]

        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["case_type"]),
            models.Index(fields=["filing_date"]),
            models.Index(fields=["law_firm"]),
        ]

    
        # =====================================================
    # VALIDATION
    # =====================================================

    def clean(self):

        # =================================================
        # CLIENT VALIDATION
        # =================================================
        if self.client_membership.role != "CLIENT":

            raise ValidationError({
                "client_membership":
                    "Selected membership is not a client."
            })

        # =================================================
        # LAWYER VALIDATION
        # =================================================
        if self.assigned_lawyer:

            if self.assigned_lawyer.role != "LAWYER":

                raise ValidationError({
                    "assigned_lawyer":
                        "Assigned lawyer must have LAWYER role."
                })

        # =================================================
        # SECRETARY VALIDATION
        # =================================================
        if self.assigned_secretary:

            if self.assigned_secretary.role != "SECRETARY":

                raise ValidationError({
                    "assigned_secretary":
                        "Assigned secretary must have SECRETARY role."
                })

        # =================================================
        # SAME LAW FIRM VALIDATION
        # =================================================
        memberships = [
            self.client_membership,
            self.assigned_lawyer,
            self.assigned_secretary,
        ]

        for membership in memberships:

            if membership and membership.firm != self.law_firm:

                raise ValidationError(
                    "All memberships must belong to the same law firm."
                )

        # =================================================
        # ACTIVE MEMBERSHIP VALIDATION
        # =================================================
        for membership in memberships:

            if membership and not membership.is_active:

                raise ValidationError(
                    "Inactive memberships cannot be assigned to cases."
                )   
    
    # =====================================================
    # SAVE
    # =====================================================

    def save(self, *args, **kwargs):

        self.clean()

        super().save(*args, **kwargs)

    # =====================================================
    # STRING
    # =====================================================

    def __str__(self):

        return f"{self.case_number} - {self.title}"