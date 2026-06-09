# apps/accounts/seeds/permissions.py

# apps/accounts/seeds/permissions.py

PERMISSIONS = [
    {
        "code": "create_clients",
        "name": "Create Clients",
        "description": "Can create client accounts"
    },
    {
        "code": "manage_cases",
        "name": "Manage Cases",
        "description": "Can create and manage cases"
    },
    {
        "code": "view_all_cases",
        "name": "View All Cases",
        "description": "Can access all firm cases"
    },
    {
        "code": "schedule_events",
        "name": "Schedule Events",
        "description": "Can manage hearings and schedules"
    },
    {
        "code": "manage_documents",
        "name": "Manage Documents",
        "description": "Can upload and manage legal documents"
    },
    {
        "code": "manage_staff",
        "name": "Manage Staff",
        "description": "Can manage staff accounts"
    },
    {
        "code": "manage_permissions",
        "name": "Manage Permissions",
        "description": "Can assign staff permissions"
    },
    {
        "code": "assign_cases_to_clients",
        "name": "Assign Cases To Clients",
        "description": "Can assign legal cases to registered clients"
    }
]