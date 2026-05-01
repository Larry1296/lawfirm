from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    CreateStaffView,
    CreateClientView,
    UpdateStaffPermissionsView,
    ListStaffView,
    ListClientsView,
    MeView
)

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    # ================= AUTH =================
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),

    # ================= STAFF =================
    path('create-staff/', CreateStaffView.as_view()),
    path('staff/', ListStaffView.as_view()),
    path('staff/<int:user_id>/permissions/', UpdateStaffPermissionsView.as_view()),

    # ================= CLIENT =================
    path('create-client/', CreateClientView.as_view()),
    path('clients/', ListClientsView.as_view()),

    # ================= USER =================
    path('me/', MeView.as_view()),
]