# Reporte de Actividades - Sprint 1
### Proyecto UrbanetPeru

* **Desarrollador:** Andre Alvaro Sanchez Vega
* **Código:** 20220043E
* **Rol:** Desarrollador Web Back-end / Documentación
* **Periodo:** Sprint 1
* **Estado general del Sprint:** Finalizado satisfactoriamente.

---

## Resumen

Este reporte describe las tareas realizadas en los issues del **Sprint 1** relacionadas con la definición de modelos de datos, la implementación de rutas del backend, la documentación de la arquitectura del sistema y la actualización del README del proyecto.

---

## Objetivo

Implementar los modelos de datos y rutas REST del backend, definir la arquitectura del sistema y mantener la documentación del proyecto actualizada y coherente con el estado real del desarrollo.

---

## Tickets incluidos

- **URB-33**: Configurar conexión inicial con MongoDB (modelos de datos)
- **URB-34**: Implementar endpoints GET y POST de reportes
- **URB-38**: Definir arquitectura del sistema
- **URB-26**: Redactar README del proyecto

---

## 1. URB-33: Configurar conexión inicial con MongoDB

Se implementaron los modelos de datos Mongoose que definen la estructura de usuarios y reportes persistidos en MongoDB Atlas.

### Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-33 |
| Épica / Etiquetas | EP-04 Backend \| type:feature \| sprint-1 |
| Tipo de desarrollo | Modelos de datos (Mongoose) |

### Archivos trabajados

| Archivo | Estado | Descripción |
|---|---|---|
| `backend/models/User.js` | Creado | Modelo de usuario con campos: `name`, `email`, `password`, `role`. |
| `backend/models/Report.js` | Creado | Modelo de reporte con campos: `userId`, `userName`, `userEmail`, `title`, `description`, `location`, `latitude`, `longitude`, `category`, `status`, `priority`, `images`. |

### Implementación resumida

1. Se definió el esquema `User` con Mongoose para gestionar la identidad y rol de cada ciudadano registrado.
2. Se definió el esquema `Report` para almacenar las incidencias urbanas con todos los campos necesarios para el MVP.
3. Se verificó la integración de los modelos con el entorno de MongoDB Atlas configurado por el equipo.

**Resultado obtenido.** Modelos de datos funcionales y disponibles para ser consumidos por las rutas del backend. La estructura permite persistir usuarios y reportes correctamente en MongoDB Atlas.

---

## 2. URB-34: Implementar endpoints GET y POST de reportes

Se implementaron las rutas REST del backend para autenticación y gestión de reportes ciudadanos.

### Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-34 |
| Épica / Etiquetas | EP-04 Backend \| type:feature \| sprint-1 |
| Tipo de desarrollo | Rutas REST (Express) |

### Archivos trabajados

| Archivo | Estado | Descripción |
|---|---|---|
| `backend/routes/auth.js` | Creado | Rutas de autenticación: registro y login con JWT. |
| `backend/routes/reports.js` | Creado | Rutas de reportes: creación y consulta de incidencias urbanas. |

### Endpoints implementados

| Método | Endpoint | Descripción |
|---|---|---|
| `POST` | `/api/auth/register` | Registro de nuevo usuario con hash de contraseña. |
| `POST` | `/api/auth/login` | Inicio de sesión y emisión de token JWT. |
| `POST` | `/api/reports` | Creación de reporte autenticado. |
| `GET` | `/api/reports` | Listado general de reportes con filtros. |
| `GET` | `/api/reports/user` | Reportes del usuario autenticado. |
| `GET` | `/api/reports/:id` | Detalle de un reporte por ID. |

### Implementación resumida

1. Se implementó la ruta de registro con validación de datos y hash de contraseña mediante `bcrypt`.
2. Se implementó la ruta de login con verificación de credenciales y emisión de JWT.
3. Se implementaron las rutas de reportes con protección mediante el middleware de autenticación JWT.
4. Se verificó que los endpoints respondan con códigos HTTP consistentes.

**Resultado obtenido.** Rutas REST funcionales disponibles para ser consumidas por el frontend. La autenticación y la gestión de reportes quedan operativas y conectadas con los modelos definidos en URB-33.

---

## 3. URB-38: Definir arquitectura del sistema

Se elaboró el documento de arquitectura del sistema UrbanetPeru, describiendo componentes, decisiones técnicas, flujo de datos y estructura del proyecto.

### Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-38 |
| Épica / Etiquetas | EP-02 Arquitectura del sistema \| type:documentation \| sprint-1 |
| Tipo de desarrollo | Documentación técnica |

### Archivos trabajados

| Archivo | Estado | Descripción |
|---|---|---|
| `docs/arquitectura-proyecto.md` | Creado | Documento de arquitectura con tipo de arquitectura, stack tecnológico, componentes, decisiones técnicas, flujos de datos, estructura de carpetas y riesgos identificados. |

### Contenido del documento

- Tipo de arquitectura: cliente-servidor en 3 capas (presentación, negocio/API, datos).
- Stack tecnológico con versiones reales del proyecto.
- Diagrama lógico de alto nivel del sistema.
- Responsabilidades de cada componente (frontend, backend, base de datos).
- Decisiones técnicas: JWT stateless, Mongoose como ODM, almacenamiento en `localStorage`, imágenes en Base64.
- Flujos de datos: registro/login y creación de reporte.
- Estructura de carpetas del repositorio.
- Riesgos identificados y mejoras recomendadas.

**Resultado obtenido.** Documento de arquitectura completo publicado en el repositorio bajo `docs/arquitectura-proyecto.md`, alineado con el estado real del proyecto en el Sprint 1.

---

## 4. URB-26: Redactar README del proyecto

Se actualizó el README principal del repositorio corrigiendo variables de entorno, puertos y referencias desactualizadas.

### Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-26 |
| Épica / Etiquetas | EP-01 Documentación y planificación \| type:documentation \| sprint-1 |
| Tipo de desarrollo | Documentación del proyecto |

### Archivos trabajados

| Archivo | Estado | Descripción |
|---|---|---|
| `README.md` | Actualizado | README principal con información corregida de configuración, ejecución local y documentación adicional. |

### Cambios aplicados

| Campo | Valor anterior | Valor corregido |
|---|---|---|
| `CLIENT_URL` | `localhost:3000` | `localhost:5173` |
| `VITE_API_URL` | `localhost:5001/api` | `localhost:5001` |
| Puerto frontend | `localhost:3000` | `localhost:5173` |
| Estructura | Sin carpeta `docs/` | Incluye carpeta `docs/` |
| Documentación extra | Solo `PROJECT_FILES.md` | Incluye SRS y arquitectura |

**Resultado obtenido.** README actualizado y coherente con la configuración real del proyecto, permitiendo que cualquier miembro del equipo pueda clonar y ejecutar el sistema sin errores de configuración.

---

## Resultados generales

- Modelos de datos de usuarios y reportes operativos en MongoDB Atlas.
- Rutas REST de autenticación y reportes disponibles para el frontend.
- Documentación de arquitectura del sistema publicada en el repositorio.
- README del proyecto actualizado y alineado con el estado real del Sprint 1.

---

## Conclusión

El sprint concluye con la base del backend completamente estructurada: modelos de datos definidos, rutas implementadas y documentación técnica actualizada. Estas piezas son fundamentales para la integración con el frontend y para garantizar la trazabilidad del proyecto en los siguientes ciclos de desarrollo.
