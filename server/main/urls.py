from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # AUTH MODULE
    path('api/auth/', include('apps.accounts.urls')),
]