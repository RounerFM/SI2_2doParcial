"""
Prueba end-to-end: crear incidente y verificar que se crean asignaciones para los talleres.
"""
import requests, json

BASE = 'http://localhost:8080'

# 1. Login como cliente de prueba
print('=== 1. Login cliente ===')
r = requests.post(f'{BASE}/api/app/auth/login/', json={
    'username': 'testcliente99',
    'password': 'test12',
})
print(f'Login: HTTP {r.status_code}')
if r.status_code != 200:
    print('ERROR:', r.text)
    exit(1)
token = r.json()['tokens']['access']
headers = {'Authorization': f'Bearer {token}'}
print('Login OK')

# 2. Crear incidente con coordenadas cerca de los talleres en Santa Cruz
print('\n=== 2. Crear incidente ===')
r2 = requests.post(f'{BASE}/api/app/incidents/', json={
    'description': 'Llanta pinchada, no puedo mover el auto',
    'latitude': -17.7800000,
    'longitude': -63.1820000,
    'address_text': 'Av. Banzer, Santa Cruz',
}, headers=headers)
print(f'Crear incidente: HTTP {r2.status_code}')
if r2.status_code not in (200, 201):
    print('ERROR:', r2.text)
    exit(1)
incident = r2.json()
print(f'Incidente ID: {incident["id"]}, status: {incident["status"]}')

# 3. Verificar asignaciones creadas
import time
time.sleep(2)
print('\n=== 3. Verificar talleres ofertados ===')
r3 = requests.get(f'{BASE}/api/app/incidents/{incident["id"]}/offered-workshops/', headers=headers)
print(f'Offered workshops: HTTP {r3.status_code}')
workshops = r3.json()
print(f'Talleres notificados: {len(workshops)}')
for w in workshops:
    print(f'  - {w["workshop_name"]} | {w["distance_km"]} km | precio estimado: {w["ai_estimated_price"]} BOB')

# 4. Verificar el estado actual del incidente
r4 = requests.get(f'{BASE}/api/app/incidents/{incident["id"]}/', headers=headers)
print(f'\nEstado final del incidente: {r4.json().get("status")}')

if len(workshops) > 0:
    print('\n✅ EXITO: Los talleres estan recibiendo emergencias')
else:
    print('\n❌ FALLO: Ningun taller recibio la emergencia')
