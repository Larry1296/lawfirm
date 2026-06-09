from django.core.management.base import BaseCommand

from apps.accounts.models import FirmPermission
from apps.accounts.seeds.permissions import PERMISSIONS


class Command(BaseCommand):

    help = "Seed system permissions"

    def handle(self, *args, **kwargs):

        created_count = 0

        for permission in PERMISSIONS:

            _, created = FirmPermission.objects.get_or_create(
                code=permission['code'],
                defaults={
                    'name': permission['name'],
                    'description': permission['description']
                }
            )

            if created:
                created_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"{created_count} permissions seeded successfully."
            )
        )