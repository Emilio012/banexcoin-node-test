# banexcoin-node-test
Realizar un módulo api que permita registrar, actualizar, consultar clientes en una base
de datos.

---
## Developer: Emilio Gonzales
## Build Setup
```bash
# Versión de trabajo en local (Emilio Gonzales) (comando: node -v)
$ v14.17.3

# Versión de trabajo en local (Emilio Gonzales) (comando: npm -v)
$ 6.14.13
```

### `RAMAS DE TRABAJO`
```bash
# La actual rama de trabajo al clonar el proyecto (commando: git branch)
$ main
```

### `VARIABLES DE ENTORNO (.env)`
```bash
# copiar el archivo .env.example
$ cp .env.example .env
```

### `INSTALACIÓN DE DEPENDENCIAS`
```bash
# install dependencies
$ npm install
```

### `BACK-END (Express + ORM Sequelize + PostgreSQL)`
```bash
# BBDD
$ crear una BBDD en PostgreSQL llamada `${database_name}`

# configurar BBDDD (setear las variables)
$ DB_USERNAME=postgres
$ DB_PASSWORD=postgres
$ DB_PORT=5432
$ DB_NAME=${database_name}
$ DB_HOST=localhost

# Ejecutar las migraciones y seeders (creación de la tabla "clientes" y generación de data falsa)
# En caso de ejecutar este comando, ya NO será necesario cargar el sql.
$ npx fresh migrate seed

# Serve with hot reload at localhost:8001
$ npm start
```