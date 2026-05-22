from django.contrib import admin

from .models import LegalCase


@admin.register(LegalCase)
class LegalCaseAdmin(admin.ModelAdmin):

    list_display = (
        "case_number",
        "title",
        "case_type",
        "status",
        "priority",
        "law_firm",
        "created_at",
    )

    search_fields = (
        "case_number",
        "title",
        "plaintiff",
        "defendant",
    )

    list_filter = (
        "status",
        "case_type",
        "court_type",
        "priority",
    )

    ordering = (
        "-created_at",
    )           