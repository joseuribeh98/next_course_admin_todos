# Development

Pasos para levantar la app en desarrollo

1. Levantar la base de datos

    ``` bash
    docker compose up -d
    ```

2. Renombrar .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el seed para [crear la base de datos local](localhost:3000/api/v1/seed)

## Prisma commands

``` bash
npx prisma init
npx prisma migrate dev
npx prisma generate
```
