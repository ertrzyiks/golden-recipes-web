#!/bin/sh

rm -fr ./.git-deploy
npm run build
mkdir .git-deploy
cp -r public/* ./.git-deploy
cd .git-deploy
git init
git remote add origin git@github.com:ertrzyiks/golden-recipes-web.git
git add .
git commit -m 'Update'
git push origin master:gh-pages --force
