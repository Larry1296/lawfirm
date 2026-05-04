from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.core.exceptions import ValidationError
from django.db import models


# =========================
# USER MANAGER
# =========================
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
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'ADMIN')

        return self.create_user(email, password, **extra_fields)


# =========================
# USER MODEL (AUTH LAYER)
# =========================
class User(AbstractBaseUser, PermissionsMixin):

    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),     # system owner
        ('STAFF', 'Staff'),     # belongs to firm (lawyers/secretaries)
        ('CLIENT', 'Client'),
    )

    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    force_password_change = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    # =========================
    # MEMBERSHIP HELPERS
    # =========================
    def get_membership(self):
        return self.lawfirmmember_set.filter(is_active=True).first()

    @property
    def firm(self):
        """
        ADMIN -> owns firm
        STAFF -> belongs to firm via membership
        CLIENT -> may or may not belong to firm
        """
        if self.role == 'ADMIN':
            return getattr(self, 'owned_firm', None)

        membership = self.get_membership()
        return membership.firm if membership else None


# =========================
# PROFILE (IDENTITY LAYER)
# =========================
class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    full_name = models.CharField(max_length=255)
    national_id = models.CharField(max_length=50, unique=True, null=True, blank=True)
    phone_number = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


# =========================
# LAW FIRM (ORGANIZATION)
# =========================
class LawFirm(models.Model):

    name = models.CharField(max_length=255)

    owner = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='owned_firm'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def clean(self):
        if self.owner.role != 'ADMIN':
            raise ValidationError("Only ADMIN can own a law firm")

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        self.clean()
        super().save(*args, **kwargs)

        if is_new:
            LawFirmMember.objects.get_or_create(
                user=self.owner,
                firm=self,
                defaults={
                    "role": "LAWYER",
                    "can_create_clients": True,
                    "can_manage_cases": True,
                    "can_view_all_cases": True,
                    "can_schedule": True,
                    "can_manage_documents": True,
                    "created_by": self.owner,
                    "is_active": True,
                }
            )


# =========================
# LAW FIRM MEMBERSHIP
# =========================
class LawFirmMember(models.Model):

    ROLE_IN_FIRM = (
        ('LAWYER', 'Co-Lawyer'),
        ('SECRETARY', 'Secretary'),
        ('CLIENT', 'Client'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firm = models.ForeignKey(LawFirm, on_delete=models.CASCADE)

    role = models.CharField(max_length=20, choices=ROLE_IN_FIRM)

    # PERMISSIONS
    can_create_clients = models.BooleanField(default=False)
    can_manage_cases = models.BooleanField(default=False)
    can_view_all_cases = models.BooleanField(default=False)
    can_schedule = models.BooleanField(default=False)
    can_manage_documents = models.BooleanField(default=False)

    is_active = models.BooleanField(default=True)

    created_by = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='created_memberships'
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

    # =========================
    # VALIDATION RULES
    # =========================
    def clean(self):

        # CLIENT must match
        if self.role == 'CLIENT' and self.user.role != 'CLIENT':
            raise ValidationError("Only CLIENT users can have CLIENT role")

        # STAFF roles only for STAFF or ADMIN
        if self.role in ['LAWYER', 'SECRETARY'] and self.user.role not in ['STAFF', 'ADMIN']:
            raise ValidationError("Only STAFF/ADMIN can be assigned firm roles")

        # ADMIN must be LAWYER inside firm
        if self.user.role == 'ADMIN' and self.role != 'LAWYER':
            raise ValidationError("ADMIN must be LAWYER in firm")

        # Secretary restrictions
        if self.role == 'SECRETARY' and self.can_manage_cases:
            raise ValidationError("Secretary cannot manage cases")

    def save(self, *args, **kwargs):

        if not self.pk:
            if self.role == 'LAWYER':
                self.can_create_clients = True
                self.can_manage_cases = True
                self.can_view_all_cases = True
                self.can_schedule = True
                self.can_manage_documents = True

            elif self.role == 'SECRETARY':
                self.can_schedule = True
                self.can_manage_documents = True

        self.clean()
        super().save(*args, **kwargs)