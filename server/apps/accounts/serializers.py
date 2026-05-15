from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import (
    User,
    Profile,
    LawFirmMember,
    FirmPermission,
)


# =========================
# PROFILE SERIALIZER
# =========================
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = [
            'full_name',
            'national_id',
            'phone_number',
        ]


# =========================
# USER SERIALIZER
# =========================
class UserSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer(read_only=True)

    firm_role = serializers.SerializerMethodField()
    permissions = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'role',
            'firm_role',
            'permissions',
            'created_at',
            'profile',
        ]

    def get_membership(self, obj):
        return obj.get_membership()

    def get_firm_role(self, obj):
        membership = self.get_membership(obj)
        return membership.role if membership else None

    def get_permissions(self, obj):
        membership = self.get_membership(obj)

        if not membership:
            return []

        return list(
            membership.permissions.values_list(
                'code',
                flat=True
            )
        )


# =========================
# REGISTER (CLIENT ONLY)
# =========================
class RegisterSerializer(serializers.ModelSerializer):

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True, required=False, allow_blank=True)
    phone_number = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'password',
            'full_name',
            'national_id',
            'phone_number',
        ]
        read_only_fields = ['id']

    def create(self, validated_data):

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')
        password = validated_data.pop('password')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=password,
            role='CLIENT'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number,
        )

        return user


# =========================
# LOGIN
# =========================
class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):

        user = authenticate(
            request=self.context.get("request"),
            email=data['email'],
            password=data['password']
        )

        if user is None:
            raise serializers.ValidationError("Invalid email or password")

        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")

        data['user'] = user
        return data

# =========================
# CONVERT CLIENT
# =========================
class ConvertClientSerializer(serializers.Serializer):

    user_id = serializers.UUIDField()


# =========================
# LAW FIRM MEMBER SERIALIZER
# =========================
class LawFirmMemberSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(source='user.email')
    full_name = serializers.SerializerMethodField()
    permissions = serializers.SerializerMethodField()

    class Meta:
        model = LawFirmMember

        fields = [
            'id',
            'email',
            'full_name',
            'role',
            'permissions',
            'is_active',
            'created_at',
        ]

    def get_full_name(self, obj):
        try:
            return obj.user.profile.full_name
        except:
            return None

    def get_permissions(self, obj):
        return list(
            obj.permissions.values_list(
                'code',
                flat=True
            )
        )


# =========================
# CREATE STAFF
# =========================
class CreateStaffSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, min_length=6)

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True, required=False, allow_blank=True)
    phone_number = serializers.CharField(write_only=True)

    firm_role = serializers.ChoiceField(
        choices=['LAWYER', 'SECRETARY']
    )

    permissions = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    class Meta:
        model = User

        fields = [
            'email',
            'password',
            'full_name',
            'national_id',
            'phone_number',
            'firm_role',
            'permissions',
        ]

    def validate(self, data):

        request = self.context['request']

        if request.user.role != 'ADMIN':
            raise serializers.ValidationError("Only ADMIN can create staff")

        if not request.user.firm:
            raise serializers.ValidationError("Admin must own a firm")

        return data

    def create(self, validated_data):

        request = self.context['request']
        firm = request.user.firm

        firm_role = validated_data.pop('firm_role')
        permission_codes = validated_data.pop('permissions', [])

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')
        password = validated_data.pop('password')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=password,
            role='STAFF'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number,
        )

        membership = LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role=firm_role,
            created_by=request.user,
        )

        if permission_codes:

            permissions = FirmPermission.objects.filter(
                code__in=permission_codes
            )

            membership.permissions.set(permissions)

        return user
    
# =============================
# UPDATE STAFF PERMISSIONS
# =============================
class UpdateStaffPermissionsSerializer(serializers.Serializer):

    permission = serializers.CharField(required=False)

    permissions = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )

    is_active = serializers.BooleanField(required=False)

# =========================
# CREATE CLIENT
# =========================
class CreateClientSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, min_length=6)

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True, required=False, allow_blank=True)
    phone_number = serializers.CharField(write_only=True)

    class Meta:
        model = User

        fields = [
            'email',
            'password',
            'full_name',
            'national_id',
            'phone_number',
        ]

    def validate(self, data):

        request = self.context['request']

        if not request.user.firm:
            raise serializers.ValidationError("User must belong to a firm")

        membership = request.user.get_membership()

        if request.user.role != 'ADMIN':

            if not membership:
                raise serializers.ValidationError("No active membership found")

            if not membership.has_permission('create_clients'):
                raise serializers.ValidationError(
                    "No permission to create clients"
                )

        return data

    def create(self, validated_data):

        request = self.context['request']
        firm = request.user.firm

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')
        password = validated_data.pop('password')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=password,
            role='CLIENT'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number,
        )

        LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role='CLIENT',
            created_by=request.user,
        )

        return user