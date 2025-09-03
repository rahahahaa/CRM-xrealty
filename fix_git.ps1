Write-Host "Fixing git account configuration..." -ForegroundColor Green

# Navigate to project directory
Set-Location "C:\Users\rahul\Desktop\xr\fullstack-app"

Write-Host "Current git config:" -ForegroundColor Yellow
git config user.name
git config user.email

Write-Host "Setting git user to rahahahaa..." -ForegroundColor Green
git config user.name "rahahahaa"
git config user.email "rahahahaa@example.com"

Write-Host "Resetting last commit..." -ForegroundColor Yellow
git reset --soft HEAD~1

Write-Host "Re-committing with correct account..." -ForegroundColor Green
git commit -m "feat: add root welcome route for backend API"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin main

Write-Host "Done! Changes committed with rahahahaa account." -ForegroundColor Green
Read-Host "Press Enter to continue"
