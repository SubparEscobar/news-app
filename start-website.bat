@echo off
echo Starting NewsHub Website...
echo.

echo Starting backend server...
start "Backend Server" cmd /k "cd news-proxy-server && node server.js"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting frontend server...
start "Frontend Server" cmd /k "cd frontend && live-server --port=8080 --open=/index.html"

echo.
echo Website is starting up!
echo Backend: http://localhost:3000
echo Frontend: http://localhost:8080
echo.
echo Press any key to close this window...
pause > nul 