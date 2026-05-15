from apps.accounts.models import User, LawFirm, Profile

admin = User.objects.get(email="admin@email.com")

# configure admin
admin.role = "ADMIN"
admin.is_staff = True
admin.is_superuser = True
admin.save()

# create profile FIRST
profile, created = Profile.objects.get_or_create(
    user=admin,
    defaults={
        "full_name": "System Admin",
        "phone_number": "0712345678",
        "national_id": "12345678"
    }
)

# create law firm
law_firm, created = LawFirm.objects.get_or_create(
    owner=admin,
    defaults={
        "name": "Musau Advocates"
    }
)

print("DONE")
print(admin.email)
print(law_firm.name)