cd out/dist

new-item .nojekyll -type file
new-item CNAME -type file -value notes.organicfish.top

git init
git remote add origin "https://github.com/Chilfish/Notes.git"
git branch -m master build

git add .
git commit -m deploy

git push -f origin build
