from apps.accounts.models import User

user = User.objects.get(email="lawyer45@email.com")
user.role = "LAWYER"
user.save()


from apps.accounts.models import LawFirm, User

lawyer = User.objects.get(email="lawyer45@email.com")

LawFirm.objects.create(
    name="Musau Advocates",
    owner=lawyer
)