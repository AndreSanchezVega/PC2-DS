# Documentación individual PC01

**Proyecto:** UrbanetPeru - Sprint 01  
**Autor:** Luis Andre Trujillo Serva (20220428D)

---

## Resumen
Este reporte describe las tareas realizadas en los issues del **Sprint 1** relacionadas con la configuración del backend, las modificaciones en el frontend, la integración de autenticación real y la conexión del frontend con la API del backend.

---

## Objetivo
Preparar e integrar la base del proyecto para que el backend y el frontend funcionen correctamente, implementar autenticación segura, permitir la creación de reportes reales y validar el funcionamiento mediante casos de prueba.

---

## Tickets incluidos
- URB-32: Configurar el entorno backend  
- URB-35: Documentar casos de prueba  
- URB-36: Ejecutar casos de prueba  
- URB-45: Integración autenticación real  
- URB-46: Integrar creación de reporte con API backend  
- URB-47: Reemplazar usuario estático  

---

## Descripción del trabajo realizado

### 1. URB-32: Configurar el entorno backend
Se configuró el backend utilizando Node.js y Express, incluyendo conexión a MongoDB Atlas y configuración del servidor.

#### Archivos trabajados

| Archivo | Descripción |
|--------|------------|
| `backend/package.json` | Dependencias y scripts del servidor |
| `backend/index.js` | Inicialización de Express, configuración de CORS y rutas |
| `backend/.env.example` | Variables de entorno necesarias |
| `backend/config/db.js` | Conexión a MongoDB con Mongoose |
| `backend/middleware/auth.js` | Middleware para validación de JWT |

---

### 2. URB-45: Integración autenticación real
Se implementó autenticación completa con JWT entre frontend y backend.

#### Archivos trabajados

| Archivo | Descripción |
|--------|------------|
| `frontend/src/pages/Register.tsx` | Registro de usuario |
| `frontend/src/pages/Login.tsx` | Inicio de sesión |
| `frontend/src/utils/api.ts` | Cliente HTTP |
| `frontend/src/utils/authStorage.ts` | Manejo de sesión |
| `frontend/.env.example` | Configuración de API |

---

### 3. URB-46: Integrar creación de reporte con API backend
Se conectó el frontend con el backend para enviar reportes reales.

#### Archivos trabajados

| Archivo | Descripción |
|--------|------------|
| `frontend/src/pages/ReportPothole.tsx` | Envío de reportes al backend |

---

### 4. URB-47: Reemplazar usuario estático
Se implementó el uso de usuario autenticado en lugar de datos simulados.

#### Archivos trabajados

| Archivo | Descripción |
|--------|------------|
| `frontend/src/pages/CitizenHome.tsx` | Usuario dinámico |
| `frontend/src/pages/MyReports.tsx` | Reportes del usuario |

---

### 5. URB-35: Documentar casos de prueba
Se documentaron casos de prueba funcionales considerando escenarios positivos y negativos.

- **Login**
  - Inicio de sesión exitoso  
  - Error por contraseña incorrecta  
  - Validación de campos vacíos  
  - Logout  

- **Registro**
  - Registro exitoso  
  - Validación de campos vacíos  

- **Carga del sistema**
  - Verificación de despliegue correcto  

- **Formulario de reporte**
  - Validación de campos obligatorios  

- **Navegación**
  - Validación de secciones  
  - Mensaje de “próximamente”  

---

## Ejecución de pruebas

### 6. URB-36: Ejecutar casos de prueba
Los casos de prueba fueron ejecutados en entorno local con backend y frontend desplegados.

- Validación del flujo de autenticación  
- Verificación de mensajes de error  
- Pruebas de carga del sistema  
- Validación del formulario de reportes  
- Navegación entre secciones  

Se documentó evidencia visual (capturas de pantalla) almacenadas en:  
`docs/evidencia/`

---

## Resultados
- Backend funcionando correctamente  
- Autenticación con JWT operativa  
- Integración frontend-backend exitosa  
- Persistencia de reportes en MongoDB  

---

## Conclusión
El sprint concluye con una integración completa entre frontend y backend, permitiendo autenticación real y gestión de reportes persistentes. Se establece una base sólida para continuar el desarrollo del sistema.