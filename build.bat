cd dist/Notes
echo.>.nojekyll

git init
git remote add origin "https://github.com/Organic-Fish/Notes.git"
git branch -m master build

git add .
git commit -m deploy

git push -f origin build