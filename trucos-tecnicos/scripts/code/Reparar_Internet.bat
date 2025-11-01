@echo off
title Solucionador de Internet - Br4nd0nC4str0
color 0a

echo ==============================
echo   Script de Reparacion Internet
echo ==============================
echo.

echo [*] Liberando IP...
ipconfig /release
echo.

echo [*] Renovando IP...
ipconfig /renew
echo.

echo [*] Vaciando cache DNS...
ipconfig /flushdns
echo.


echo [OK] Proceso completado.
echo.
echo Presiona Enter para cerrar...
set /p input=
