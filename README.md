# Calcifer Inventario API

Este proyecto contiene un servidor Express con endpoints REST para gestionar un CRUD de inventario utilizando una base de datos MySQL.

## Estructura principal

- `server/src/app.js` - Configuración principal de Express y definición de rutas.
- `server/src/routes/inventarioRoutes.js` - Rutas de inventario para productos.
- `server/src/controllers/inventarioControllers.js` - Controladores que gestionan las solicitudes HTTP.
- `server/src/services/inventarioServices.js` - Lógica de acceso a datos usando MySQL.
- `server/src/config/db.js` - Configuración del pool de MySQL.
- `server/sql/create_calcifer.sql` - Script SQL para crear la base de datos y la tabla `productos`.
- `server/.env.example` - Ejemplo de variables de entorno para la conexión MySQL.

## Configuración

1. Instala dependencias dentro de `server`:

   ```bash
   cd server
   npm install
   ```

2. Crea un archivo `.env` dentro de `server` con los valores de tu conexión MySQL. Puedes basarte en `.env.example`:

   ```env
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=calcifer
   DB_PORT=3306
   ```

3. Crea la base de datos y la tabla ejecutando el script SQL en tu servidor MySQL:

   ```sql
   -- Dentro de MySQL o desde un cliente SQL:
   SOURCE server/sql/create_calcifer.sql;
   ```

## Script SQL

El script `server/sql/create_calcifer.sql` crea la base de datos `calcifer` y la tabla `productos` con las siguientes columnas:

- `id` (PRIMARY KEY)
- `nombre`
- `descripcion`
- `cantidad`
- `precio_compra`
- `precio_venta`
- `marca`
- `ubicacion`
- `categoria`
- `stock_minimo`
- `created_at`
- `updated_at`

## Endpoints del CRUD de inventario

- `GET /api/productos`
  - Devuelve todos los productos.

- `POST /api/productos`
  - Crea un producto nuevo.
  - Cuerpo JSON de ejemplo:

    ```json
    {
      "nombre": "Teclado mecánico",
      "descripcion": "Teclado mecánico RGB para gaming",
      "cantidad": 20,
      "precio_compra": 1200.50,
      "precio_venta": 1850.00,
      "marca": "Logitech",
      "ubicacion": "A1-03",
      "categoria": "Periféricos",
      "stock_minimo": 5
    }
    ```

- `PUT /api/productos/:id`
  - Actualiza un producto existente.
  - Cuerpo JSON de ejemplo:

    ```json
    {
      "nombre": "Teclado mecánico",
      "descripcion": "Teclado mecánico RGB para gaming actualizado",
      "cantidad": 18,
      "precio_compra": 1200.50,
      "precio_venta": 1799.99,
      "marca": "Logitech",
      "ubicacion": "A1-03",
      "categoria": "Periféricos",
      "stock_minimo": 5
    }
    ```

- `DELETE /api/productos/:id`
  - Elimina el producto con el ID indicado.

## Uso con Postman

1. Asegúrate de que el servidor esté corriendo:

   ```bash
   cd server
   npm run dev
   ```

2. En Postman, usa la URL base `http://localhost:3000`.
3. Agrega las siguientes rutas:
   - `GET http://localhost:3000/api/productos`
   - `POST http://localhost:3000/api/productos`
   - `PUT http://localhost:3000/api/productos/1`
   - `DELETE http://localhost:3000/api/productos/1`
4. En POST y PUT, selecciona `Body` > `raw` > `JSON` y pega el JSON de ejemplo.

## Notas

- El proyecto ya incluye la ruta `/api/fichas` existente.
- Si deseas añadir más campos o validaciones, puedes extender `productos` en la tabla SQL y en los servicios del servidor.
