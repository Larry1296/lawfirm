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
# USER OUTPUT SERIALIZER
# =========================
class UserSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'role', 'created_at', 'profile']

    def get_profile(self, obj):
        if hasattr(obj, 'profile'):
            return {
                "full_name": obj.profile.full_name,
                "national_id": obj.profile.national_id,
                "phone_number": obj.profile.phone_number,
            }
        return None


# =========================
# CREATE USER (LAWYER / ASSISTANT)
# =========================
class CreateUserByLawyerSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    # optional ONLY if you later decide assistants don't need profile
    full_name = serializers.CharField(write_only=True)
    national_id = serializers.CharField(write_only=True)
    phone_number = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'role',
            'full_name',
            'national_id',
            'phone_number'
        ]

    def validate(self, data):
        role = data.get('role')

        if role not in ['ASSISTANT', 'CLIENT']:
            raise serializers.ValidationError("Only ASSISTANT or CLIENT can be created")

        return data

    def create(self, validated_data):
        full_name = validated_data.pop('full_name')
        national_id = validated_data.pop('national_id')
        phone_number = validated_data.pop('phone_number')

        user = User.objects.create_user(**validated_data)

        Profile.objects.create(
            user=user,
            full_name=full_name,
            national_id=national_id,
            phone_number=phone_number
        )

        return user


# =========================
# LAW FIRM MEMBER SERIALIZER
# =========================
class LawFirmMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = LawFirmMember
        fields = [
            'id',
            'role',
            'can_create_clients',
            'created_at',
            'user'
        ]