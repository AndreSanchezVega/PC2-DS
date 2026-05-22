# Arquitectura del Proyecto - UrbanetPeru

Este documento define la arquitectura actual del proyecto y sus decisiones clave.

## 1. Tipo de arquitectura

La solucion usa una arquitectura web cliente-servidor en 3 capas logicas:

- Capa de presentacion: `frontend` (React + Vite).
- Capa de negocio/API: `backend` (Express).
- Capa de datos: MongoDB Atlas (Mongoose).

No es microservicios; es un monolito liviano dividido por frontend y backend.

## 2. Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | React + Vite | ^6.2.0 |
| Backend | Node.js + Express | ^4.18.2 |
| Base de datos | MongoDB Atlas | 8.0.2 |
| ODM | Mongoose | ^7.8.9 |
| Autenticación | JWT (jsonwebtoken) | ^9.0.0 |
| Hash de contraseñas | bcrypt | ^5.1.0 |
| Variables de entorno | dotenv | ^16.3.1 |

## 3. Diagrama logico (alto nivel)

```text
[Usuario]
   |
   v
[Frontend React (Vite)]
   |  HTTP/JSON + JWT (Bearer)
   v
[Backend Express API]
   |  Mongoose
   v
[MongoDB Atlas]
```

## 4. Componentes y responsabilidades

## 4.1 Frontend

- Renderiza interfaces de autenticacion y flujo de reporte.
- Valida formularios basicos del lado cliente.
- Gestiona sesion local (token + user) en `localStorage`.
- Consume API REST del backend.

## 4.2 Backend

- Expone endpoints REST para auth y reportes.
- Aplica reglas basicas de validacion y control de errores.
- Gestiona autenticacion con JWT.
- Persiste y consulta datos en MongoDB Atlas.

## 4.3 Base de datos

- Coleccion `users`: identidad y rol de usuario.
- Coleccion `reports`: incidencias urbanas y su estado.
- Imagenes almacenadas actualmente como Data URL/Base64 en `reports.images`.

## 5. Decisiones tecnicas actuales

- **JWT stateless** para autenticacion.
  - Ventaja: simple de integrar con SPA.
  - Consideracion: manejo de expiracion y renovacion pendiente para evolucion.

- **Mongoose como ODM**.
  - Ventaja: esquemas claros y validacion de estructura.

- **Storage temporal de sesion en localStorage**.
  - Ventaja: implementacion rapida para MVP.
  - Riesgo: no es la opcion mas robusta para escenarios de seguridad avanzada.

- **Imagenes en Base64 dentro de MongoDB**.
  - Ventaja: velocidad de implementacion.
  - Riesgo: crecimiento rapido del tamano de documentos y payloads.

## 6. Flujo de datos principal

## 6.1 Registro/Login

1. Frontend envia credenciales a `/api/auth/register` o `/api/auth/login`.
2. Backend valida datos y devuelve `token` + `user`.
3. Frontend guarda sesion y habilita rutas funcionales.

## 6.2 Creacion de reporte

1. Usuario completa formulario de bache.
2. Frontend envia `POST /api/reports` con token JWT.
3. Backend valida token y payload.
4. Backend crea documento `report` en MongoDB Atlas.
5. Frontend muestra confirmacion del envio.

## 7. Calidad y operacion

- CORS configurado para entorno local de desarrollo (Vite).
- Limite JSON configurado para soportar imagenes en Base64 (`10mb`).
- Endpoints con respuestas y codigos HTTP consistentes para flujo basico.

## 8. Riesgos y mejoras recomendadas

- Migrar imagenes a almacenamiento externo (Cloudinary/S3/Firebase Storage) y guardar solo URL.
- Implementar proteccion de rutas en frontend (guard de autenticacion).
- Incorporar capa de servicios en backend para separar rutas de logica de negocio.
- Agregar pruebas:
  - Backend: integracion de endpoints (auth/reportes).
  - Frontend: pruebas de componentes y flujo critico.
- Agregar observabilidad:
  - Logs estructurados.
  - Manejo centralizado de errores.

## 9. Estructura de carpetas

```
urbanetperu/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Report.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── reports.js
│   └── index.js
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── styles/
│       └── utils/
└── docs/
    ├── UrbanetPeru_SRS.md
    └── arquitectura-proyecto.md
```

## 10. Conclusion

La arquitectura actual es adecuada para un MVP funcional: simple, entendible y ya validada de extremo a extremo con MongoDB Atlas. El siguiente paso natural es fortalecer escalabilidad y mantenibilidad (storage de imagenes, tests, y mayor modularidad de backend).
