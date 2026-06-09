from django.urls import path
from .views import (
    RegisterView,
    ConvertClientToFirmView,
    LoginView,
    CreateStaffView,
    CreateClientView,
    UpdateStaffPermissionsView,
    ListStaffView,
    ListClientsView,
    DeleteUserView,
    MeView,
    SingleStaffView,
    SingleClientView,
)

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    # ================= AUTH =================
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),

    # ================= STAFF =================
    path('staff/', ListStaffView.as_view()),  # GET All
    path('staff/<uuid:user_id>/', SingleStaffView.as_view()),  # GET Single

    path('staff/create/', CreateStaffView.as_view()),  # POST
    
    path('staff/<uuid:user_id>/permissions/', UpdateStaffPermissionsView.as_view()),  # PATCH
    path('staff/<uuid:user_id>/delete/', DeleteUserView.as_view()),  # DELETE

    # ================= CLIENT =================
    path('clients/', ListClientsView.as_view()),  # GET All
    path('clients/<uuid:user_id>/', SingleClientView.as_view()),  # GET Single

    path('clients/create/', CreateClientView.as_view()),

    path('clients/<uuid:user_id>/convert/', ConvertClientToFirmView.as_view()),  # POST
    path('clients/<uuid:user_id>/delete/', DeleteUserView.as_view()),  # DELETE

    # ================= USER =================
    path('me/', MeView.as_view()),
]