# 🚀 Cómo correr el proyecto (Taller Mecánica La Leyenda)

Guía para levantar, detener y trabajar el proyecto localmente.

> **PostgreSQL ya corre solo** (servicio de Windows, arranca con la PC). No hay que iniciarlo.

---

## ▶️ Arrancar todo (5 terminales en VS Code)

Abre cada terminal con el botón **`+`** (deben ser **PowerShell**).

### 1️⃣ Backend (Django / Daphne) — puerto 8080
```powershell
cd "C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda"
.\venv\Scripts\python.exe manage.py runasgi 0.0.0.0:8080
```
✅ Listo: `Listening on TCP address 0.0.0.0:8080`

### 2️⃣ Worker de tareas (django-q2 — procesa incidentes)
```powershell
cd "C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda"
.\venv\Scripts\python.exe manage.py qcluster
```
✅ Listo: `Q Cluster ... running.`

### 3️⃣ Frontend Angular (panel web) — puerto 4300
```powershell
cd "C:\Users\User\Desktop\Parcial 2\frontend-taller-meca_leyenda"
npx ng serve --port 4300
```
✅ Listo: `➜ Local: http://localhost:4300/`

### 4️⃣ Túnel público ngrok (para APK de producción)
```powershell
ngrok http 8080 --domain=repugnant-fanning-pendant.ngrok-free.dev
```
✅ Listo: `Forwarding  https://repugnant-fanning-pendant.ngrok-free.dev -> localhost:8080`

> **Solo necesario si vas a usar el APK instalado en Android desde fuera de casa (con datos móviles).**
> Sin este túnel, el APK no llega al backend.

### 5️⃣ Móvil (Expo / Metro) — puerto 8081 *(solo para desarrollo en emulador/Expo Go)*
```powershell
cd "C:\Users\User\Desktop\Parcial 2\app-taller-meca_leyenda"
$env:EXPO_TOKEN = "7biCJ8-AgmkSH8nw6YDvLXvAtEWw794j4IRTK0az"
corepack yarn expo start
```
✅ Listo: `Waiting on http://localhost:8081`

### 6️⃣ Stripe (solo para probar pagos)
```powershell
$env:Path += ";C:\Users\User\AppData\Local\Microsoft\WinGet\Links"
stripe listen --forward-to localhost:8080/api/stripe/webhook/
```
✅ Listo: `Ready! ... whsec_...`

---

## 🛑 Detener todo

### Normal
En **cada terminal**, pulsa **`Ctrl + C`** (a veces dos veces).

### Rápido (matar todo de golpe)
```powershell
Get-NetTCPConnection -LocalPort 8080,8081,4300 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
Get-CimInstance Win32_Process -Filter "Name='python.exe'" | Where-Object { $_.CommandLine -like '*qcluster*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
Get-Process stripe -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process ngrok -ErrorAction SilentlyContinue | Stop-Process -Force
Write-Output "Todo detenido"
```
*(No toca PostgreSQL.)*

---

## 🔄 Qué reiniciar según el cambio

| Si cambias... | Qué hacer |
|---|---|
| Código backend o `.env` | `Ctrl+C` en Backend (y Worker) y volver a arrancar |
| Angular (`.ts`, `.css`, templates) | Nada — recarga solo. Refresca el navegador (`Ctrl+Shift+R`) |
| Móvil: JS/estilos de pantallas | Recarga sola (o sacude el teléfono → "Reload") |
| Móvil: `tailwind.config.js` o `colors.js` | `Ctrl+C` Metro y `corepack yarn expo start -c` (caché limpia) |
| Móvil: `app.json` o `_layout.js` (navegación) | Reinicia Metro **y cierra/reabre la app por completo** |

---

## ⚠️ Notas

1. **Si cambia tu IP de WiFi** (cambias de red): edita
   `app-taller-meca_leyenda\.env` → `EXPO_PUBLIC_API_URL=http://TU_NUEVA_IP:8080`
   (Ver IP: `ipconfig` → "Dirección IPv4" del adaptador Wi-Fi.) Reinicia Metro.

2. **El APK de producción (instalado en Android) necesita:** PC encendida + backend corriendo + **ngrok corriendo**.
   Funciona desde cualquier lugar con datos móviles mientras ngrok esté activo.
   La app está disponible en: https://expo.dev/accounts/rouner/projects/emergencias-meca-leyenda/builds/48e334e8-b03b-4c9c-868c-2a8057d49819

3. **Login web:** `admin` / `admin123` en http://localhost:4300/

4. **Login móvil:** es solo para clientes/técnicos (no el `admin`). Registra un cliente desde la app.

5. **Reportar emergencia:** hay que **adjuntar al menos una foto o audio**, si no, el incidente no se procesa ni llega a los talleres.

6. **Respaldo del proyecto:** `C:\Users\User\Desktop\Backup-Parcial2-20260608`

---

## 🔌 URLs y accesos

| Qué | Dónde |
|---|---|
| Panel web (Angular) | http://localhost:4300/ |
| API docs (Swagger) | http://localhost:8080/api/docs/ |
| Admin Django | http://localhost:8080/admin/ (`admin` / `admin123`) |
| Móvil (Metro — dev) | `exp://<TU_IP>:8081` |
| APK producción (descarga) | https://expo.dev/accounts/rouner/projects/emergencias-meca-leyenda/builds/48e334e8-b03b-4c9c-868c-2a8057d49819 |
| Túnel público ngrok | https://repugnant-fanning-pendant.ngrok-free.dev |

## 🧩 Servicios externos configurados
- **Stripe** (pagos) — modo test, tarjeta `4242 4242 4242 4242`
- **VAPID** (push web) — activado
- **Firebase** (push backend) — proyecto `examensi2-34241`
- **OpenAI** (IA voz/GPT) — **apagado** (de pago); el resto funciona

## 🎨 Tema actual
- Dark mode esmeralda en panel web (barra superior horizontal) y app móvil (riel vertical izquierdo, bordes rectos).
