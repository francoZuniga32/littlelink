#!/bin/bash

echo "compilamos..."

npm run build

echo "movemos los elementos a docs ..." 

rm -r docs/

mv dist/ docs/

mv docs/_astro/ docs/astro/

# cambiamos /_astro/ por /astro/

# Configura la carpeta donde están los archivos .html
FOLDER_PATH="docs"

# Cadena que deseas buscar
SEARCH_STRING="/_astro/"

# Cadena con la que deseas reemplazar
REPLACE_STRING="/astro/"

# Iterar por todos los archivos .html en la carpeta
for file in "$FOLDER_PATH"/*.html; do
    if [[ -f "$file" ]]; then
        # Usar sed para reemplazar en cada archivo
        sed -i "s/${SEARCH_STRING}/${REPLACE_STRING}/g" "$file"
        echo "Procesado: $file"
    else
        echo "No se encontró ningún archivo .html en la carpeta."
    fi
done

echo "Reemplazo completado."


echo "subimos el codigo ..." 

fecha_actual=$(date +"%Y-%m-%d")

git add .
git commit -m "feat: se compilo y subio el proyecto / $fecha_actual"
git push
