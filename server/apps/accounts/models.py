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
        """
        LAWYER (SYSTEM OWNER)
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'LAWYER')

        return self.create_user(email, password, **extra_fields)


# =========================
# USER MODEL (AUTH LAYER)
# =========================
class User(AbstractBaseUser, PermissionsMixin):

    ROLE_CHOICES = (
        ('LAWYER', 'Lawyer'),
        ('ASSISTANT', 'Assistant'),
        ('CLIENT', 'Client'),
    )

    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # forces first-time password change (important for lawyer-created accounts)
    force_password_change = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


# =========================
# PROFILE (UNIFIED IDENTITY LAYER)
# =========================
class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    full_name = models.CharField(max_length=255)
    national_id = models.CharField(max_length=50, unique=True)
    phone_number = models.CharField(max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name


# =========================
# LAW FIRM (ORGANIZATION LAYER)
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
        if self.owner.role != 'LAWYER':
            raise ValidationError("Only a LAWYER can own a law firm")

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


# =========================
# LAW FIRM MEMBERSHIP (ACCESS CONTROL LAYER)
# =========================
class LawFirmMember(models.Model):

    ROLE_IN_FIRM = (
        ('ASSISTANT', 'Assistant'),
        ('CLIENT', 'Client'),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firm = models.ForeignKey(LawFirm, on_delete=models.CASCADE)

    role = models.CharField(max_length=20, choices=ROLE_IN_FIRM)

    # permission system
    can_create_clients = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'firm')

    def __str__(self):
        return f"{self.user.email} - {self.firm.name}"