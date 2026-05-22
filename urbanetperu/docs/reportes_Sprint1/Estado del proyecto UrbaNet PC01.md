# UNIVERSIDAD NACIONAL DE INGENIERÍA
## FACULTAD DE CIENCIAS
### ESCUELA PROFESIONAL DE CIENCIA DE LA COMPUTACIÓN

**ESTADO DEL PROYECTO-PC01**
**UrbaNet**

* **Curso:** Desarrollo de Software (CC3S2-A)
* **Profesor:** Quispe Torres Manuel Alejandro

| Integrantes | Código |
| :--- | :--- |
| Espinoza Benavente Hector | 202221090 |
| Inga Chavez Jorly | 20220467J |
| Sanchez Vega Andre Alvaro | 20220043E |
| Trujillo Serva Luis Andre | 20220428D |
| Villanueva Alzamora Farid Alonzo | 20234010G |

* **Fecha de entrega:** 01/05/2026
* **Ciclo:** 2026-1

---

## Índice

| # | Sección | Página |
| :--- | :--- | :--- |
| 1. | Descripción general del proyecto | 2 |
| 2. | Issues del Sprint 01 | 2 |
| 2.1. | EP-01 DOCUMENTACIÓN Y PLANIFICACIÓN | 2 |
| 2.2. | EP-02 ARQUITECTURA | 2 |
| 2.3. | EP-03 FRONTEND | 2 |
| 2.4. | EP-04 BACKEND | 2 |
| 2.5. | EP-05 TESTING Y CALIDAD | 3 |
| 3. | Flujo de trabajo | 3 |
| 3.1. | Frontend | 3 |
| 3.2. | Backend | 3 |
| 3.2.1. | Configuración del entorno | 3 |
| 3.2.2. | Conexión con base de datos | 3 |
| 3.2.3. | Endpoints implementados | 3 |
| 4. | Estado actual del proyecto | 4 |
| 5. | Cierre de la etapa | 6 |

---

## 1. Descripción general del proyecto
Urbanet Peru es una plataforma web para reportes ciudadanos. En esta entrega, el enfoque principal es el reporte de baches. 

El sistema permite que un ciudadano se registre, inicie sesión y envíe un reporte con foto como evidencia. A nivel técnico, el frontend fue desarrollado con React y Vite para la interfaz de usuario, mientras que el backend fue implementado con Node.js y Express para gestionar la lógica y los endpoints. La información de usuarios y reportes se almacena en MongoDB Atlas.

---

## 2. Issues del Sprint 01
Para la división del trabajo de este Sprint 01, utilizamos el tablero Backlog de Jira, definiendo distintas tareas (issues) entre los integrantes del grupo. Los issues fueron organizados por épicas:

### 2.1. EP-01 DOCUMENTACIÓN Y PLANIFICACIÓN
* URB-20: Estructura inicial del proyecto
* URB-24: Redactar documento SRS del proyecto
* URB-26: Redactar README
* URB-48: Documentar reporte grupal e individual

### 2.2. EP-02 ARQUITECTURA
* URB-38: Definir arquitectura

### 2.3. EP-03 FRONTEND
* URB-27: Configurar esqueleto del frontend y estilos CSS
* URB-28: Implementar pantalla inicial de acceso de la app
* URB-29: Implementar pantallas de registro y recuperación de contraseña
* URB-30: Implementar pantalla principal de selección de reportes
* URB-31: Implementar flujo visual de reporte de bache
* URB-44: Implementar pantalla de historial de reportes del usuario
* URB-45: Integrar autenticación real
* URB-46: Integrar creación de reporte con API backend
* URB-47: Reemplazar usuario estático

### 2.4. EP-04 BACKEND
* URB-32: Configurar entorno backend
* URB-33: Configurar conexión inicial con MongoDB
* URB-34: Implementar endpoints REST de reportes (CRUD)

### 2.5. EP-05 TESTING Y CALIDAD
* URB-35: Documentar casos de prueba
* URB-36: Ejecutar casos de prueba

---

## 3. Flujo de trabajo

### 3.1. Frontend
En el frontend se implementaron las pantallas principales del proyecto: inicio de sesión, registro, recuperación de contraseña, pantalla principal del ciudadano, formulario de reporte de bache y vista de historial de reportes. Estas funcionalidades corresponden a los issues definidos para la parte visual y de navegación (URB-27, URB-28, URB-29, URB-30, URB-31 y URB-44), los cuales se encuentran completados.

También se completaron mejoras de integración:
* Integración de autenticación real con backend.
* Integración del envío de reportes a la API backend.
* Reemplazo de usuario estático por usuario real en sesión.

Estas mejoras corresponden a URB-45, URB-46 y URB-47.

### 3.2. Backend

#### 3.2.1. Configuración del entorno
Se completó la configuración del servidor backend (URB-32), incluyendo:
* Inicialización de Express.
* Configuración de variables de entorno.
* Configuración de CORS para la comunicación con frontend.
* Ajuste de límite JSON para soportar imágenes en Base64.

#### 3.2.2. Conexión con base de datos
Se completó la conexión inicial con MongoDB Atlas (URB-33). Se verificó que el registro de usuarios y reportes se almacena correctamente en la base de datos.

#### 3.2.3. Endpoints implementados
Se implementaron endpoints REST de reportes (URB-34), incluyendo:
* Crear reporte (POST).
* Ver historial de reporte de un usuario (GET).

Además, se implementaron endpoints de autenticación:
* Registro de usuario.
* Inicio de sesión.

---

## 4. Estado actual del proyecto
A la fecha, todos los issues definidos para esta etapa fueron completados. El flujo principal del sistema está funcionando correctamente.

**1. El ciudadano se registra o inicia sesión.**
*(El documento original incluye capturas de pantalla de Login del usuario y Crear cuenta de usuario)*

**2. El ciudadano crea un reporte con imagen.**
*(El documento original incluye capturas de pantalla de la Página principal, Crear un reporte y el Historial de reporte)*

**3. El backend procesa la solicitud y guarda la información en MongoDB Atlas.**
*(El documento original incluye capturas de pantalla de Users DB y Reports DB en MongoDB)*

Con esto, el MVP de Urbanet Peru para reporte de baches se considera implementado y validado.

---

## 5. Cierre de la etapa
Además del desarrollo funcional, se completaron actividades de documentación y soporte del proyecto (README, arquitectura y estado del proyecto).