from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.http import FileResponse, Http404
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
import django_eventstream
import os


def angular_spa(request, path=''):
    """Sirve index.html para cualquier ruta no reconocida → Angular Router."""
    index_path = os.path.join(settings.WHITENOISE_ROOT, 'index.html')
    if not os.path.exists(index_path):
        raise Http404('Frontend no encontrado. Ejecuta ng build primero.')
    return FileResponse(open(index_path, 'rb'), content_type='text/html')

# Importar patrones de URLs de las apps
from apps.users.urls import app_patterns as users_app_patterns, web_patterns as users_web_patterns, admin_patterns as users_admin_patterns
from apps.workshops.urls import app_patterns as workshops_app_patterns, web_patterns as workshops_web_patterns, admin_patterns as workshops_admin_patterns
from apps.vehicles.urls import app_patterns as vehicles_app_patterns
from apps.incidents.urls import app_patterns as incidents_app_patterns, web_patterns as incidents_web_patterns, admin_patterns as incidents_admin_patterns
from apps.payments.urls import app_patterns as payments_app_patterns, web_patterns as payments_web_patterns, admin_patterns as payments_admin_patterns
from apps.payments.urls import shared_patterns as payments_shared_patterns
from apps.payments import reports_views
from apps.notifications.urls import app_patterns as notifications_app_patterns, web_patterns as notifications_web_patterns
from apps.assignments.urls import app_patterns as assignments_app_patterns
from apps.assignments.technician_urls import technician_app_patterns

urlpatterns = [
    path('dj-admin/', admin.site.urls),  # movido para liberar /admin/ a Angular

    # API Documentation (OpenAPI/Swagger)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # SSE (Server-Sent Events) - Real-time notifications
    path('api/events/', include(django_eventstream.urls)),

    # ==================== APP MÓVIL (Flutter) ====================
    # /api/app/auth/
    path('api/app/auth/', include((users_app_patterns, 'users'), namespace='app-auth')),

    # /api/app/vehicles/
    path('api/app/vehicles/', include((vehicles_app_patterns, 'vehicles'), namespace='app-vehicles')),

    # /api/app/incidents/
    path('api/app/incidents/', include((incidents_app_patterns, 'incidents'), namespace='app-incidents')),

    # /api/app/workshops/
    path('api/app/workshops/', include((workshops_app_patterns, 'workshops'), namespace='app-workshops')),

    # /api/app/notifications/
    path('api/app/notifications/', include((notifications_app_patterns, 'notifications'), namespace='app-notifications')),

    # /api/app/payments/
    path('api/app/payments/', include((payments_app_patterns, 'payments'), namespace='app-payments')),

    # /api/app/assignments/
    path('api/app/assignments/', include((assignments_app_patterns, 'assignments'), namespace='app-assignments')),

    # /api/app/technician/ — app móvil técnico
    path('api/app/technician/', include((technician_app_patterns, 'technician'), namespace='app-technician')),

    # ==================== WEB (Angular) ====================
    # /api/web/auth/
    path('api/web/auth/', include((users_web_patterns, 'users'), namespace='web-auth')),

    # /api/web/workshop/
    path('api/web/workshop/', include((workshops_web_patterns, 'workshops'), namespace='web-workshop')),

    # /api/web/incidents/
    path('api/web/incidents/', include((incidents_web_patterns, 'incidents'), namespace='web-incidents')),

    # /api/web/notifications/
    path('api/web/notifications/', include((notifications_web_patterns, 'notifications'), namespace='web-notifications')),

    # /api/web/payments/
    path('api/web/payments/', include((payments_web_patterns, 'payments'), namespace='web-payments')),

    # ==================== ADMIN ====================
    # /api/admin-api/users/
    path('api/admin-api/users/', include((users_admin_patterns, 'users'), namespace='admin-users')),

    # /api/admin-api/workshops/
    path('api/admin-api/workshops/', include((workshops_admin_patterns, 'workshops'), namespace='admin-workshops')),

    # /api/admin-api/incidents/
    path('api/admin-api/incidents/', include((incidents_admin_patterns, 'incidents'), namespace='admin-incidents')),

    # Reportes admin (rutas explícitas antes del include amplio para evitar 404 si el proceso no recargó urls)
    path('api/admin-api/reports/export/', reports_views.admin_reports_export_xlsx, name='admin-reports-export'),
    path('api/admin-api/reports/', reports_views.admin_reports_summary, name='admin-reports-summary'),
    path(
        'api/admin-api/operational-dashboard/',
        reports_views.admin_operational_dashboard,
        name='admin-operational-dashboard',
    ),

    # /api/admin-api/ (commission, payments, metrics)
    path('api/admin-api/', include((payments_admin_patterns, 'payments'), namespace='admin-api')),

    # /api/stripe/webhook/
    path('api/', include((payments_shared_patterns, 'payments'), namespace='shared-payments')),
]

# Servir archivos media en desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Catch-all: cualquier ruta que no sea /api/, /admin/, /media/ → Angular SPA
# DEBE ir al final para no interceptar rutas del backend
urlpatterns += [
    re_path(r'^(?!api/|dj-admin/|media/|static/).*$', angular_spa, name='angular-spa'),
]
