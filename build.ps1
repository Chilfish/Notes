Move-Item out/dist/.git out/

pnpm build

Move-Item out/.git out/dist

cd out/dist

new-item .nojekyll -type file
new-item CNAME -type file -value notes.organicfish.top

git add .
git commit -m deploy

git push -f origin build