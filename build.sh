#!/bin/bash

pnpm build

cd docs/.vuepress/dist
touch .nojekyll

git init
git remote add origin "https://github.com/Organic-Fish/Notes.git"
git branch -m master build

git add .
git commit -m deploy

git push -f origin build

