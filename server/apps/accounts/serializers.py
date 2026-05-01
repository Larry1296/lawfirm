from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import User, Profile, LawFirmMember


# =========================
# REGISTER (CLIENT ONLY - PUBLIC)
# =========================
class RegisterSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True)
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
        national_id = validated_data.pop('national_id')
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
# PROFILE SERIALIZER
# =========================
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['full_name', 'national_id', 'phone_number']


# =========================
# USER OUTPUT SERIALIZER
# =========================
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'created_at', 'profile']


# =========================
# LAW FIRM MEMBER OUTPUT
# =========================
class LawFirmMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = LawFirmMember
        fields = [
            'id',
            'role',
            'is_active',

            # permissions
            'can_create_clients',
            'can_manage_cases',
            'can_view_all_cases',
            'can_schedule',
            'can_manage_documents',

            'created_at',
            'user'
        ]


# =========================
# CREATE STAFF (LAWYER ONLY)
# =========================
class CreateStaffSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True)
    phone_number = serializers.CharField(write_only=True)

    # 🔥 NEW
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

    def create(self, validated_data):
        firm_role = validated_data.pop('firm_role')

        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id')
        phone_number = validated_data.pop('phone_number')

        request = self.context['request']
        firm = request.user.owned_firm

        # create user
        user = User.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            role='STAFF'
        )

        # create profile
        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number
        )

        # create membership
        LawFirmMember.objects.create(
            user=user,
            firm=firm,
            role=firm_role,
            created_by=request.user
        )

        return user


# =========================
# CREATE CLIENT (LAWYER / STAFF)
# =========================
class CreateClientSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True)
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

    def create(self, validated_data):
        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id')
        phone_number = validated_data.pop('phone_number')

        request = self.context['request']
        firm = request.user.firm

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