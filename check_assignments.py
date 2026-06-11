import django, os, sys
sys.path.insert(0, r'C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda')
os.chdir(r'C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from apps.incidents.models import Incident
from apps.assignments.models import Assignment

# Ver los ultimos incidentes y sus asignaciones
print('=== ULTIMOS 5 INCIDENTES ===')
for inc in Incident.objects.order_by('-id')[:5]:
    assigns = Assignment.objects.filter(incident=inc)
    print(f'Incidente #{inc.id} | status={inc.status} | tipo={inc.incident_type} | coords=({inc.latitude},{inc.longitude})')
    print(f'  Asignaciones: {assigns.count()}')
    for a in assigns:
        print(f'    -> {a.workshop.name} | status={a.status} | dist={a.distance_km} km')
    print()
