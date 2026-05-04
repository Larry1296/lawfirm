from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import User, Profile, LawFirmMember


# =========================
# PROFILE SERIALIZER
# =========================
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['full_name', 'national_id', 'phone_number']


# =========================
# USER SERIALIZER (SAFE + CONSISTENT)
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
            'profile'
        ]

    def get_membership(self, obj):
        return obj.get_membership()

    def get_firm_role(self, obj):
        membership = self.get_membership(obj)
        return membership.role if membership else None

    def get_permissions(self, obj):
        membership = self.get_membership(obj)

        if not membership:
            return {}

        return {
            "can_create_clients": membership.can_create_clients,
            "can_manage_cases": membership.can_manage_cases,
            "can_view_all_cases": membership.can_view_all_cases,
            "can_schedule": membership.can_schedule,
            "can_manage_documents": membership.can_manage_documents,
        }


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
            'phone_number'
        ]
        read_only_fields = ['id']

    def create(self, validated_data):
        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role='CLIENT'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number
        )

        return user

# ========================
# CONVERT SELFREGISTERED CLIENT TO FIRM MEMBER
# ========================
class ConvertClientSerializer(serializers.Serializer):
    user_id = serializers.IntegerField()

# =========================
# LOGIN
# =========================
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(
            email=data['email'],
            password=data['password']
        )

        if not user:
            raise serializers.ValidationError("Invalid email or password")

        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")

        data['user'] = user
        return data


# =========================
# LAW FIRM MEMBER SERIALIZER
# =========================
class LawFirmMemberSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(source='user.email')
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = LawFirmMember
        fields = [
            'id',
            'email',
            'full_name',
            'role',

            'can_create_clients',
            'can_manage_cases',
            'can_view_all_cases',
            'can_schedule',
            'can_manage_documents',

            'is_active',
            'created_at'
        ]

    def get_full_name(self, obj):
        try:
            return obj.user.profile.full_name
        except:
            return None


# =========================
# CREATE STAFF
# =========================
class CreateStaffSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True, required=False, allow_blank=True)
    phone_number = serializers.CharField(write_only=True)

    firm_role = serializers.ChoiceField(choices=['LAWYER', 'SECRETARY'])

    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'full_name',
            'national_id',
            'phone_number',
            'firm_role'
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

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role='STAFF'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number
        )

        LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role=firm_role,
            created_by=request.user
        )

        return user


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
            'phone_number'
        ]

    def validate(self, data):
        request = self.context['request']

        if not request.user.firm:
            raise serializers.ValidationError("User must belong to a firm")

        membership = request.user.get_membership()

        if request.user.role != 'ADMIN':
            if not membership or not membership.can_create_clients:
                raise serializers.ValidationError("No permission to create clients")

        return data

    def create(self, validated_data):
        request = self.context['request']
        firm = request.user.firm

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id', None)
        phone_number = validated_data.pop('phone_number')

        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role='CLIENT'
        )

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number
        )

        LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role='CLIENT',
            created_by=request.user
        )

        return user