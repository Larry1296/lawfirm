from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import User


class EmailBackend(BaseBackend):

    def authenticate(self, request, email=None, password=None, username=None, **kwargs):
        """
        Supports both email and username for compatibility
        """

        if email is None:
            email = username  # fallback for Django default behavior

        if email is None or password is None:
            return None

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            # Run fake hash to prevent timing attacks
            User().set_password(password)
            return None

        # Check password + active status
        if user.check_password(password) and user.is_active:
            return user

        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None