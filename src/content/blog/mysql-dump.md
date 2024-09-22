---
title: 'Mysql Dump'
description: 'Como hacer buckups de bases de datos mysql'
pubDate: '2024-09-22'
heroImage: '/blog-placeholder-2.jpg'
tags: ['mysql', 'bash']
---

# MYSQL DUMP

mysql dump sirve para realizar respaldos de una base de datos lo cual es un backup en toda la regla.
Pero usando dbeaver en un imagen de mysql de docker no puede hacer funcionar el mysql dump integrado de dbeaver por lo que dedici realizar un script para poder realizar mis buckups.

```bash

#!/bin/bash

# Configuración
DB_HOST="127.0.0.1"      # Dirección IP del servidor MySQL
DB_PORT="3307"               # Puerto del servidor MySQL
DB_USER="root"               # Nombre de usuario de MySQL
DB_PASS="1234"      # Contraseña de MySQL (puede dejarse en blanco para que se solicite interactivamente)
DB_NAME="dbname"          # Nombre de la base de datos a respaldar

# Generar la marca de tiempo en formato YYYYMMDD_HHMMSS
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Nombre del archivo de salida
OUTPUT_FILE="buckups/${DB_NAME}_backup_${TIMESTAMP}.sql"

# Comando mysqldump con opciones
mysqldump --column-statistics=0 -u ${DB_USER} -p -h ${DB_HOST} -P ${DB_PORT} ${DB_NAME} > ${OUTPUT_FILE}

# Comprobar si el comando mysqldump tuvo éxito
if [ $? -eq 0 ]; then
    echo "Backup de la base de datos '${DB_NAME}' realizado con éxito en el archivo '${OUTPUT_FILE}'."
else
    echo "Error al realizar el backup de la base de datos '${DB_NAME}'."
fi

```

con el siguiente podra recupeara un la db a un buckup echo.

```bash

#!/bin/bash

# Configuración
DB_HOST="127.0.0.1"      # Dirección IP del servidor MySQL
DB_PORT="3307"               # Puerto del servidor MySQL
DB_USER="root"               # Nombre de usuario de MySQL
DB_PASS="1234"      # Contraseña de MySQL (puede dejarse en blanco para que se solicite interactivamente)
DB_NAME="timetable"          # Nombre de la base de datos a respaldar

# Directorio donde se encuentran los archivos .sql
SQL_DIR="./buckups"          # Cambia a tu ruta de directorio de backups

# Listar archivos .sql en el directorio especificado
echo "Archivos .sql disponibles para restaurar:"
select SQL_FILE in $(ls ${SQL_DIR}/*.sql); do
    if [[ -n "$SQL_FILE" ]]; then
        echo "Has seleccionado el archivo: $SQL_FILE"
        break
    else
        echo "Selección no válida. Por favor, selecciona un archivo válido."
    fi
done

# Confirmar restauración
echo "¿Seguro que deseas restaurar la base de datos '${DB_NAME}' desde '$SQL_FILE'? (y/n)"
read CONFIRMATION
if [[ "$CONFIRMATION" != "y" ]]; then
    echo "Operación cancelada."
    exit 1
fi

# Comando para restaurar la base de datos
mysql -u ${DB_USER} -p -h ${DB_HOST} -P ${DB_PORT} ${DB_NAME} < ${SQL_FILE}

# Comprobar si el comando mysql tuvo éxito
if [ $? -eq 0 ]; then
    echo "Base de datos '${DB_NAME}' restaurada con éxito desde el archivo '${SQL_FILE}'."
else
    echo "Error al restaurar la base de datos '${DB_NAME}'."
fi

```

el script anterior le listara los buckups anteriores y podra seleccionar cual de ellos quiere recuperar.
