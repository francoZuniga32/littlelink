#!/bin/bash

echo "compilamos..."

npm run build

echo "movemos los elementos a docs ..." 

rm -r docs/

mv dist/ docs/

echo "subimos el codigo ..." 

fecha_actual=$(date +"%Y-%m-%d")

git add .
git commit -m "feat: se compilo y subio el proyecto / $fecha_actual"
git push
