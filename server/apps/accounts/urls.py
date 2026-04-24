from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    CreateAssistantView,
    CreateClientView,
    ToggleAssistantPermissionView,
    ListAssistantsView,
    ListClientsView,
    MeView
)

# 👇 ADD THIS IMPORT
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # ================= AUTH =================
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),

    # 👇 JWT REFRESH ENDPOINT (THIS FIXES YOUR FRONTEND ERROR)
    path('token/refresh/', TokenRefreshView.as_view()),

    # ================= LAW FIRM OPERATIONS =================
    path('create-assistant/', CreateAssistantView.as_view()),
    path('create-client/', CreateClientView.as_view()),
    path('toggle-assistant/<int:user_id>/', ToggleAssistantPermissionView.as_view()),

    # ================= LISTING =================
    path('assistants/', ListAssistantsView.as_view()),
    path('clients/', ListClientsView.as_view()),
    path('me/', MeView.as_view()),
]