from apps.accounts.models import User, LawFirm, Profile

admin = User.objects.get(email="admin@email.com")

# set role
admin.role = "ADMIN"
admin.is_staff = True
admin.is_superuser = True
admin.save()

# create law firm
law_firm = LawFirm.objects.create(
    name="Musau Advocates",
    owner=admin
)

# set admin phone
profile = admin.profile
profile.phone_number = "0712345678"
profile.full_name = "System Admin"
profile.save()



print(f"Law firm '{law_firm.name}' created with owner {lawyer.email}")