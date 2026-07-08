@echo off
setlocal

cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo Git for Windows is not installed or is not available in PATH.
  echo Install Git for Windows, then run this file again:
  echo https://git-scm.com/download/win
  pause
  exit /b 1
)

git --version

if not exist ".codex-git-store\HEAD" (
  echo Prepared Git store was not found: .codex-git-store
  echo Please open this project in Codex again and prepare commits before pushing.
  pause
  exit /b 1
)

git --git-dir=.codex-git-store --work-tree=. remote set-url origin https://github.com/gfdxee4-max/PinturaTorrevieja.git
git --git-dir=.codex-git-store --work-tree=. status --short --branch
git --git-dir=.codex-git-store --work-tree=. push origin main

if errorlevel 1 (
  echo.
  echo Push failed. If GitHub asks for login, complete authorization and run this file again.
  pause
  exit /b 1
)

echo.
echo GitHub updated successfully. Vercel can be redeployed.
pause
