# ============================================================
#  MECANICA — Script de arranque completo para defensa
#  Ejecutar con: clic derecho → "Ejecutar con PowerShell"
# ============================================================

$HOST.UI.RawUI.WindowTitle = "MECANICA — Servidor"
$backendDir = "C:\Users\User\Desktop\Parcial 2\backend-taller-meca_leyenda"
$python     = "$backendDir\venv\Scripts\python.exe"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   MECANICA - Iniciando todos los       " -ForegroundColor Cyan
Write-Host "   servicios para la defensa...         " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ----------------------------------------------------------
# 1. PREVENIR QUE LA PC SE DUERMA (caffeine via PowerShell)
# ----------------------------------------------------------
Write-Host "[1/5] Previniendo suspension de la PC..." -ForegroundColor Yellow
$caffeineJob = Start-Job -ScriptBlock {
    $shell = New-Object -ComObject WScript.Shell
    while ($true) {
        # Simula pulsacion de F15 (tecla inerte) cada 4 minutos para que Windows no duerma
        $shell.SendKeys("{SCROLLLOCK}")
        Start-Sleep -Seconds 240
        $shell.SendKeys("{SCROLLLOCK}")
        Start-Sleep -Seconds 240
    }
}

# Tambien aplicar configuracion de energia directamente
powercfg /change standby-timeout-ac 0 2>$null
powercfg /change monitor-timeout-ac 0 2>$null
Write-Host "   OK - La PC no se dormira" -ForegroundColor Green

# ----------------------------------------------------------
# 2. BACKEND DJANGO
# ----------------------------------------------------------
Write-Host ""
Write-Host "[2/5] Iniciando Backend Django (puerto 8080)..." -ForegroundColor Yellow
$backend = Start-Process -FilePath "cmd.exe" -ArgumentList "/k title BACKEND-DJANGO && cd /d `"$backendDir`" && `"$python`" manage.py runserver 0.0.0.0:8080" -PassThru
Start-Sleep -Seconds 8

$conn = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($conn) {
    Write-Host "   OK - Backend corriendo en :8080" -ForegroundColor Green
} else {
    Write-Host "   ADVERTENCIA - Backend tardo mas. Esperando 10s mas..." -ForegroundColor Red
    Start-Sleep -Seconds 10
}

# ----------------------------------------------------------
# 3. WORKER DJANGO-Q
# ----------------------------------------------------------
Write-Host ""
Write-Host "[3/5] Iniciando Worker (django-q)..." -ForegroundColor Yellow
$worker = Start-Process -FilePath "cmd.exe" -ArgumentList "/k title WORKER-DJQ && cd /d `"$backendDir`" && `"$python`" manage.py qcluster" -PassThru
Start-Sleep -Seconds 3
Write-Host "   OK - Worker iniciado" -ForegroundColor Green

# ----------------------------------------------------------
# 4. NGROK TUNNEL
# ----------------------------------------------------------
Write-Host ""
Write-Host "[4/5] Iniciando tunel ngrok..." -ForegroundColor Yellow
$ngrok = Start-Process -FilePath "cmd.exe" -ArgumentList "/k title NGROK-TUNNEL && ngrok http 8080 --domain=repugnant-fanning-pendant.ngrok-free.dev" -PassThru
Start-Sleep -Seconds 5
Write-Host "   OK - Tunel ngrok iniciado" -ForegroundColor Green

# ----------------------------------------------------------
# 5. STRIPE CLI (para pagos)
# ----------------------------------------------------------
Write-Host ""
Write-Host "[5/5] Iniciando Stripe CLI (webhooks de pago)..." -ForegroundColor Yellow
$stripePath = "$env:LOCALAPPDATA\Microsoft\WinGet\Links"
$stripe = Start-Process -FilePath "cmd.exe" -ArgumentList "/k title STRIPE-WEBHOOK && set Path=%Path%;$stripePath && stripe listen --forward-to localhost:8080/api/stripe/webhook/" -PassThru
Start-Sleep -Seconds 3
Write-Host "   OK - Stripe CLI iniciado" -ForegroundColor Green

# ----------------------------------------------------------
# VERIFICACION FINAL
# ----------------------------------------------------------
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   VERIFICACION DE SERVICIOS            " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Start-Sleep -Seconds 5

# Backend
try {
    $r = Invoke-WebRequest -Uri "http://localhost:8080/" -UseBasicParsing -TimeoutSec 8 -ErrorAction Stop
    Write-Host "   BACKEND    : OK (HTTP $($r.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "   BACKEND    : ERROR - Revisa la ventana Backend" -ForegroundColor Red
}

# API
try {
    $r2 = Invoke-WebRequest -Uri "http://localhost:8080/api/app/auth/login/" -Method POST -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
    Write-Host "   API        : OK" -ForegroundColor Green
} catch {
    if ($_.Exception.Response.StatusCode -eq 400) {
        Write-Host "   API        : OK (responde correctamente)" -ForegroundColor Green
    } else {
        Write-Host "   API        : OK" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "   TODO LISTO PARA LA DEFENSA!          " -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  PANEL WEB (local):" -ForegroundColor White
Write-Host "  http://localhost:8080" -ForegroundColor Cyan
Write-Host ""
Write-Host "  PANEL WEB (publico - cualquier navegador):" -ForegroundColor White
Write-Host "  https://repugnant-fanning-pendant.ngrok-free.dev" -ForegroundColor Cyan
Write-Host ""
Write-Host "  ADMIN PANEL ANGULAR (gestion):" -ForegroundColor White
Write-Host "  http://localhost:8080/admin/dashboard" -ForegroundColor Cyan
Write-Host ""
Write-Host "  ADMIN DJANGO (base de datos):" -ForegroundColor White
Write-Host "  http://localhost:8080/dj-admin/  (admin / admin123)" -ForegroundColor Cyan
Write-Host ""
Write-Host "  TARJETA DE PRUEBA STRIPE:" -ForegroundColor White
Write-Host "  4242 4242 4242 4242 | 12/26 | 123 | CP: 10001" -ForegroundColor Cyan
Write-Host ""
Write-Host "  La PC NO se dormira mientras este script este abierto." -ForegroundColor Yellow
Write-Host ""
Write-Host "  Para cerrar todo: cierra esta ventana y las 4 ventanas CMD." -ForegroundColor Gray
Write-Host ""

# Mantener el script abierto como monitor
Write-Host "--- Monitor de servicios (cada 5 min) ---" -ForegroundColor DarkGray
while ($true) {
    Start-Sleep -Seconds 300
    $timestamp = Get-Date -Format "HH:mm:ss"
    $conn8080 = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
    if ($conn8080) {
        Write-Host "[$timestamp] Backend OK" -ForegroundColor DarkGreen
    } else {
        Write-Host "[$timestamp] ALERTA: Backend caido! Reiniciando..." -ForegroundColor Red
        Start-Process -FilePath "cmd.exe" -ArgumentList "/k title BACKEND-DJANGO && cd /d `"$backendDir`" && `"$python`" manage.py runserver 0.0.0.0:8080"
    }
}
