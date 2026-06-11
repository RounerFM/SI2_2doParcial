# ============================================================
#  MECANICA — Detener todos los servicios
# ============================================================

Write-Host "Deteniendo todos los servicios..." -ForegroundColor Yellow

# Restaurar suspension de PC
powercfg /change standby-timeout-ac 30 2>$null
powercfg /change monitor-timeout-ac 15 2>$null

# Matar procesos
Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue | ForEach-Object {
    Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
}
Get-Process ngrok   -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Get-Process stripe  -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Cerrar ventanas CMD de los servicios
Get-Process cmd -ErrorAction SilentlyContinue | Where-Object {
    $_.MainWindowTitle -match "BACKEND|WORKER|NGROK|STRIPE"
} | Stop-Process -Force -ErrorAction SilentlyContinue

Write-Host "Todo detenido correctamente." -ForegroundColor Green
Write-Host "Presiona Enter para cerrar..."
Read-Host
