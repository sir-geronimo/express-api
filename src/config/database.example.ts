export default {
    "type": "mssql",
    "host": "localhost",
    "port": 1433,
    "username": "username",
    "password": "password",
    "database": "database",
    "synchronize": true,
    "logging": false,
    "entities": [ "src/entities/**/*.ts" ],
    "migrations": [ "src/migrations/**/*.ts" ],
    "subscribers": [ "src/subscribers/**/*.ts" ]
}
