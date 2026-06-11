import django, os, sys
sys.path.insert(0, r'C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda')
os.chdir(r'C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.conf import settings
from apps.workshops.models import Workshop
from apps.workshops.eligibility import workshop_assignment_block_reason

print('=== CONFIGURACION ===')
print('ASSIGNMENT_ALLOW_UNVERIFIED:', settings.ASSIGNMENT_ALLOW_UNVERIFIED)
print('ASSIGNMENT_REQUIRE_SUBSCRIPTION:', settings.ASSIGNMENT_REQUIRE_SUBSCRIPTION)
print()

workshops = Workshop.objects.prefetch_related('technicians').select_related('owner', 'owner__subscription')
print('=== TALLERES EN BD:', workshops.count(), '===')
for w in workshops:
    block = workshop_assignment_block_reason(w)
    techs_avail = w.technicians.filter(is_available=True).count()
    sub = getattr(getattr(w, 'owner', None), 'subscription', None)
    estado = 'OK' if not block else ('BLOQUEADO: ' + block)
    print(f'  [{estado}] {w.name}')
    print(f'     active={w.is_active}, verified={w.is_verified}, coords=({w.latitude},{w.longitude})')
    print(f'     radius_km={w.radius_km}, techs_disponibles={techs_avail}')
    sub_op = sub.is_operational if sub else 'SIN-SUSCRIPCION'
    print(f'     suscripcion_operacional={sub_op}')
    print()
