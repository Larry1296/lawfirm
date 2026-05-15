import uuid

from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)


# =========================================================
# USER MANAGER
# =========================================================
class UserManager(BaseUserManager):

    def create_user(self, email, password=None, role='CLIENT', **extra_fields):

        if not email:
            raise ValueError("Users must have an email")

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            role=role,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):

        extra_fields.setdefault('role', 'ADMIN')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_verified', True)
        extra_fields.setdefault('status', 'ACTIVE')

        return self.create_user(
            email=email,
            password=password,
            **extra_fields
        )


# =========================================================
# USER MODEL
# =========================================================
class User(AbstractBaseUser, PermissionsMixin):

    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('STAFF', 'Staff'),
        ('CLIENT', 'Client'),
    )

    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('ACTIVE', 'Active'),
        ('SUSPENDED', 'Suspended'),
        ('DEACTIVATED', 'Deactivated'),
    )

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='CLIENT'
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    is_verified = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    force_password_change = models.BooleanField(default=True)

    last_login_ip = models.GenericIPAddressField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.email

    # =========================================================
    # MEMBERSHIP HELPERS
    # =========================================================
    def get_membership(self):

        return self.memberships.filter(
            is_active=True
        ).select_related('firm').first()

    @property
    def is_firm_member(self):
        return self.get_membership() is not None

    @property
    def firm(self):

        # ADMIN owns firm directly
        if self.role == 'ADMIN':
            return getattr(self, 'owned_firm', None)

        membership = self.get_membership()

        return membership.firm if membership else None

    def deactivate(self):

        self.status = 'DEACTIVATED'
        self.is_active = False
        self.save()

    def suspend(self):

        self.status = 'SUSPENDED'
        self.save()


# =========================================================
# PROFILE MODEL
# =========================================================
class Profile(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    full_name = models.CharField(max_length=255)

    national_id = models.CharField(
        max_length=50,
        unique=True,
        null=True,
        blank=True
    )

    phone_number = models.CharField(max_length=20)

    avatar = models.ImageField(
        upload_to='avatars/',
        null=True,
        blank=True
    )

    address = models.TextField(blank=True)

    date_of_birth = models.DateField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['full_name']

    def __str__(self):
        return self.full_name


# =========================================================
# SYSTEM PERMISSIONS
# =========================================================
class FirmPermission(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    code = models.CharField(
        max_length=100,
        unique=True
    )

    name = models.CharField(max_length=255)

    description = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


# =========================================================
# LAW FIRM MODEL
# =========================================================
class LawFirm(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    name = models.CharField(max_length=255)

    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='owned_firm'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    def clean(self):

        if self.owner.role != 'ADMIN':
            raise ValidationError(
                "Only ADMIN users can own law firms"
            )

    def save(self, *args, **kwargs):

        is_new = self.pk is None

        self.clean()

        super().save(*args, **kwargs)

        # Automatically create owner membership
        if is_new:

            membership, created = LawFirmMember.objects.get_or_create(
                user=self.owner,
                firm=self,
                defaults={
                    'role': 'LAWYER',
                    'created_by': self.owner,
                    'is_active': True,
                }
            )

            # Assign owner permissions
            if created:

                permissions = FirmPermission.objects.filter(
                    code__in=[
                        'create_clients',
                        'manage_cases',
                        'view_all_cases',
                        'schedule_events',
                        'manage_documents',
                        'manage_staff',
                        'manage_permissions',
                    ]
                )

                membership.permissions.set(permissions)


# =========================================================
# LAW FIRM MEMBER
# =========================================================
class LawFirmMember(models.Model):

    ROLE_IN_FIRM = (
        ('LAWYER', 'Co-Lawyer'),
        ('SECRETARY', 'Secretary'),
        ('CLIENT', 'Client'),
    )

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='memberships'
    )

    firm = models.ForeignKey(
        LawFirm,
        on_delete=models.CASCADE,
        related_name='members'
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_IN_FIRM
    )

    permissions = models.ManyToManyField(
        FirmPermission,
        blank=True,
        related_name='members'
    )

    is_active = models.BooleanField(default=True)

    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_memberships'
    )

    joined_at = models.DateTimeField(auto_now_add=True)

    deactivated_at = models.DateTimeField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'firm'],
                name='unique_user_firm_membership'
            )
        ]

        ordering = ['-created_at']

    def __str__(self):

        return f"{self.user.email} - {self.role}"

    # =========================================================
    # VALIDATION RULES
    # =========================================================
    def clean(self):

        # CLIENT membership validation
        if self.role == 'CLIENT' and self.user.role != 'CLIENT':
            raise ValidationError(
                "Only CLIENT users can have CLIENT membership"
            )

        # STAFF membership validation
        if self.role in ['LAWYER', 'SECRETARY']:

            if self.user.role not in ['STAFF', 'ADMIN']:
                raise ValidationError(
                    "Only STAFF or ADMIN users can have staff memberships"
                )

        # ADMIN must always be LAWYER
        if self.user.role == 'ADMIN' and self.role != 'LAWYER':
            raise ValidationError(
                "ADMIN users must have LAWYER role inside firm"
            )

    # =========================================================
    # PERMISSION HELPERS
    # =========================================================
    def has_permission(self, code):

        return self.permissions.filter(
            code=code
        ).exists()

    def deactivate(self):

        self.is_active = False
        self.deactivated_at = timezone.now()
        self.save()

    # =========================================================
    # SAVE
    # =========================================================
    def save(self, *args, **kwargs):

        is_new = self.pk is None

        self.clean()

        super().save(*args, **kwargs)

        # Assign default permissions
        if is_new:

            codes = []

            if self.role == 'LAWYER':

                codes = [
                    'create_clients',
                    'manage_cases',
                    'view_all_cases',
                    'schedule_events',
                    'manage_documents',
                ]

            elif self.role == 'SECRETARY':

                codes = [
                    'schedule_events',
                    'manage_documents',
                ]

            if codes:

                permissions = FirmPermission.objects.filter(
                    code__in=codes
                )

                self.permissions.set(permissions)


# =========================================================
# AUDIT LOGS
# =========================================================
class AuditLog(models.Model):

    ACTION_CHOICES = (
        ('CREATE', 'Create'),
        ('UPDATE', 'Update'),
        ('DELETE', 'Delete'),
        ('LOGIN', 'Login'),
        ('LOGOUT', 'Logout'),
        ('PERMISSION_UPDATE', 'Permission Update'),
    )

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )

    actor = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='performed_actions'
    )

    target_user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='audit_logs'
    )

    action = models.CharField(
        max_length=50,
        choices=ACTION_CHOICES
    )

    description = models.TextField()

    metadata = models.JSONField(
        default=dict,
        blank=True
    )

    ip_address = models.GenericIPAddressField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):

        return f"{self.action} by {self.actor}"