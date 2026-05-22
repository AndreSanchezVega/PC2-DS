# UrbanetPeru

Plataforma web para reportes ciudadanos de incidencias urbanas, con flujo para vecinos y panel de gestion municipal.

## Estructura

El proyecto esta dividido en dos aplicaciones:

- `frontend/`: cliente en React + Vite.
- `backend/`: API REST en Express + MongoDB Atlas con Mongoose.
- `docs/`: documentacion funcional y tecnica del proyecto.

## Requisitos

- Node.js 18 o superior
- npm
- acceso a una base de datos MongoDB Atlas

## Variables de entorno

### Backend

Crea `backend/.env` tomando como base `backend/.env.example`:

```env
PORT=5001
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/urbanetperu?retryWrites=true&w=majority
JWT_SECRET=una_clave_segura
CLIENT_URL=http://localhost:5173
```

### Frontend

Crea `frontend/.env` tomando como base `frontend/.env.example`:

```env
VITE_API_URL=http://localhost:5001
```

## Instalacion

Instala dependencias por separado en cada parte del proyecto:

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

## Ejecucion local

### 1. Iniciar backend

```bash
cd backend
npm run dev
```

El backend quedara disponible en `http://localhost:5001`.

### 2. Iniciar frontend

```bash
cd frontend
npm run dev
```

El frontend quedara disponible en `http://localhost:5173`.

## Funcionalidades principales

- Registro e inicio de sesion con JWT.
- Persistencia de usuarios y reportes en MongoDB Atlas.
- Creacion de reportes ciudadanos con categoria, prioridad, ubicacion e imagen.
- Consulta de reportes del usuario autenticado.
- Vista municipal para seguimiento y gestion de incidencias.

## Scripts disponibles

### Backend

- `npm start`: inicia el servidor con Node.
- `npm run dev`: inicia el servidor con `nodemon`.

### Frontend

- `npm run dev`: inicia Vite en desarrollo.
- `npm run build`: genera el build de produccion.
- `npm run preview`: sirve el build generado.
- `npm run lint`: ejecuta la verificacion de TypeScript.

## Verificacion realizada

Se comprobo lo siguiente durante la revision:

- conexion correcta del backend con MongoDB Atlas
- respuesta correcta de registro e inicio de sesion
- creacion exitosa de reportes en la API
- build y chequeo del frontend sin errores

## Documentacion adicional

- `docs/UrbanetPeru_SRS.md`: documento de requerimientos del sistema.
- `docs/arquitectura-proyecto.md`: arquitectura del sistema, decisiones tecnicas y flujo de datos.
