# Reporte de Actividades - Sprint 1
### Proyecto Urbanet Peru Frontend

* **Desarrollador:** Farid Alonzo Villanueva Alzamora
* **Rol:** Desarrollador Web Front-end
* **Periodo:** Sprint 1
* **Estado general del Sprint:** Finalizado satisfactoriamente.

---

## 1. Documentación del Ticket URB-29: Implementar pantallas de registro y recuperación de contraseña

**Resumen.** Este ticket abarca el desarrollo de las interfaces de usuario para el registro de ciudadanos y la gestión de contraseñas olvidadas. Se implementó una lógica de navegación simulada y validaciones frontend sin dependencia de servicios de backend reales, asegurando una base visual sólida para el proyecto.

### Ficha rápida

| Criterio | Detalle | 
| :--- | :--- | 
| **Ticket** | URB-29 | 
| **Epica / Etiquetas** | EP-03 FRONTEND type:feature sprint-1 | 
| **Tipo de desarrollo** | Interfaz de usuario (Registro/Recuperación) | 

### Alcance incluido

* Implementación de las pantallas: `Register`, `ForgotPassword`, `ForgotPasswordSent`, `ResetPassword` y `ResetPasswordSuccess`.
* Desarrollo de componentes React con manejo de estados para formularios (`useState`).
* Estilización unificada mediante el archivo `auth.css` con diseño responsive.
* Configuración de rutas en `App.tsx` mediante `react-router-dom`.
* Validaciones básicas (email válido, longitud de clave, coincidencia de contraseñas).

### Archivos trabajados

| Archivo | Estado | Descripción | 
| :--- | :--- | :--- | 
| `src/pages/Register.tsx` | Creado | Vista de creación de cuenta ciudadana. | 
| `src/pages/ForgotPassword.tsx` | Creado | Formulario inicial de recuperación. | 
| `src/pages/ForgotPasswordSent.tsx` | Creado | Pantalla de confirmación de instrucciones. | 
| `src/pages/ResetPassword.tsx` | Creado | Formulario de cambio de clave. | 
| `src/pages/ResetPasswordSuccess.tsx` | Creado | Mensaje de éxito tras actualización. | 
| `src/styles/auth.css` | Creado | Estilos específicos para el flujo de acceso. | 
| `src/App.tsx` | Modificado | Registro de rutas de autenticación. | 
| `src/pages/Login.tsx` | Modificado | Integración de navegación hacia registro/olvido. | 

**Validaciones obtenidas.** Se obtuvo un flujo de autenticación visual completo y funcional en términos de navegación. El sistema valida la consistencia de datos (claves coincidentes e email válido) antes de permitir el avance simulado.

---

## 2. Documentación del Ticket URB-30: Implementar pantalla principal de selección de reportes

**Resumen.** Este ticket consistió en la creación de la interfaz principal para el ciudadano (`CitizenHome`). La pantalla actúa como selector central de incidentes urbanos, presentando las opciones disponibles para el MVP y dejando estructuradas las funcionalidades futuras.

### Ficha rápida

| Criterio | Detalle |
| :--- | :--- | 
| **Ticket** | URB-30 | 
| **Epica / Etiquetas** | EP-03 FRONTEND type:feature sprint-1 | 
| **Tipo de desarrollo** | Pantalla Principal / Selector de Reportes | 

### Alcance incluido

* Creación del componente `CitizenHome.tsx` con cabecera y sección hero.
* Implementación de un grid de tarjetas interactivo basado en `REPORT_TYPES`.
* Gestión de estados activos e inactivos para los tipos de reporte (Baches activo, otros bloqueados).
* Desarrollo del archivo de estilos `citizen-home.css` con diseño adaptativo.
* Inclusión de avisos visuales (Toasts) para opciones no disponibles en el MVP.
* Integración de la ruta `/inicio` y vinculación con la salida del Login.

### Archivos trabajados

| Archivo | Estado | Descripción | 
| :--- | :--- | :--- | 
| `src/pages/CitizenHome.tsx` | Creado | Vista principal del portal ciudadano. | 
| `src/data/reportTypes.ts` | Creado | Estructura de datos para los tipos de incidencia. | 
| `src/styles/citizen-home.css` | Creado | Estilos para el layout y las tarjetas de reporte. | 
| `src/App.tsx` | Modificado | Inclusión de la ruta `/inicio`. | 
| `src/pages/Login.tsx` | Modificado | Redirección al éxito del login hacia el inicio. | 
| `src/index.css` | Modificado | Importación de nuevos estilos globales. | 

**Implementación resumida.** Se construyó una interfaz profesional y escalable utilizando renderizado condicional para mostrar etiquetas de "Próximamente" en opciones inactivas. Se configuró correctamente la navegación de salida (logout) y la vinculación fluida desde la pantalla de acceso.

---

## Resumen de Resultados del Sprint 1

Al finalizar este sprint, se han consolidado las bases del acceso ciudadano y la navegación principal de UrbanetPeru. El proyecto cuenta ahora con un flujo completo de registro y recuperación, además de una pantalla de inicio robusta que servirá de nodo central para los diferentes tipos de reportes urbanos en futuros ciclos de desarrollo.
