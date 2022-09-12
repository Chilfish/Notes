echo "building!"

@REM pnpm run build
@REM cd docs/.vuepress/dist

echo "git init"

git init
git remote add origin "https://github.com/Organic-Fish/Notes.git"
git branch -m master build

git add .
git commit -m deploy

echo "git pushing"

git push -f origin build

@echo off
PAUSE
