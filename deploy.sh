#!/bin/bash

echo "compilamos..."

npm run build

echo "movemos los elementos a docs ..." 

rm -r docs/

mv dist/ docs/

echo "subimos el codigo ..." 

git add .
git commit -m "feat: se compilo y subio el proyecto / %Y-%m-%d %H:%M:%S"
git push
