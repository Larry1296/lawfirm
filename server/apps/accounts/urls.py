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

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),

    path('create-assistant/', CreateAssistantView.as_view()),
    path('create-client/', CreateClientView.as_view()),
    path('toggle-assistant/<int:user_id>/', ToggleAssistantPermissionView.as_view()),

    # ✅ NEW
    path('assistants/', ListAssistantsView.as_view()),
    path('clients/', ListClientsView.as_view()),
    path('me/', MeView.as_view()),
]