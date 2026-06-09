from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()


class EmailBackend(ModelBackend):

    def authenticate(self, request, username=None, email=None, password=None, **kwargs):

        # Django passes username → treat it as email
        identifier = username or email

        if identifier is None or password is None:
            return None

        try:
            user = User.objects.get(email=identifier)

        except User.DoesNotExist:
            return None

        if user.check_password(password) and user.is_active:
            return user

        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None