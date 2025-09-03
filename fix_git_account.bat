@echo off
echo Fixing git account configuration...
cd /d "C:\Users\rahul\Desktop\xr\fullstack-app"

echo Setting git user to rahahahaa...
git config user.name "rahahahaa"
git config user.email "rahahahaa@example.com"

echo Resetting the last commit...
git reset --soft HEAD~1

echo Re-committing with correct account...
git commit -m "Update backend server with proper welcome message for live deployment"

echo Pushing to GitHub...
git push origin main

echo Done! Your changes are now committed with rahahahaa account.
pause
