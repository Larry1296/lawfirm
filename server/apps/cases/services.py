from datetime import datetime

from .models import LegalCase


CASE_PREFIXES = {
    "CIVIL": "CIV",
    "CRIMINAL": "CRM",
    "FAMILY": "FAM",
    "LAND": "LND",
    "EMPLOYMENT": "EMP",
    "COMMERCIAL": "COM",
    "SUCCESSION": "SUC",
}


def generate_case_number(case_type):

    year = datetime.now().year

    prefix = CASE_PREFIXES.get(
        case_type,
        "GEN"
    )

    count = LegalCase.objects.count() + 1

    return f"SHERIA-{prefix}-{year}-{count:05d}"