# Reporte de Actividades - Sprint 1
### Proyecto Urbanet Peru Frontend

* **Desarrollador:** Jorly Inga Chavez
* **Rol:** Desarrollador Web Front-end
* **Periodo:** Sprint 1
* **Estado general del Sprint:** Finalizado satisfactoriamente.

---

## 1. Documentación del Ticket URB-31: Flujo de reporte de bache

**Resumen.** Este ticket representa la creación de la interfaz interactiva para el registro de baches por parte del ciudadano. Su propósito fue implementar la navegación visual completa, la carga de evidencia, captura de ubicación simulada y el procesamiento temporal del reporte.

### Ficha rápida

| Criterio | Detalle | 
| :--- | :--- | 
| **Ticket** | URB-31 | 
| **Epica / Etiquetas** | EP-03 FRONTEND type:feature sprint-1 | 
| **Tipo de desarrollo** | Interfaz frontend interactiva | 

### Alcance incluido

* Pantalla de Reportar Bache con carga de imagen principal y vista previa.
* Selección de ubicación en mapa visual simulado y descripción opcional.
* Validaciones frontend para campos obligatorios (imagen y ubicación). Pantalla de procesamiento simulado y confirmación del reporte.
* Generación de reporte mock y guardado temporal en localStorage.

### Archivos trabajados

| Archivo | Estado | Descripción | 
| :--- | :--- | :--- | 
| `src/pages/ReportPothole.tsx` | Creado | Formulario principal y mapa simulado. | 
| `src/pages/Processing.tsx` | Creado | Pantalla de procesamiento (temporizador). | 
| `src/pages/Confirmation.tsx` | Creado | Pantalla de confirmación de datos. | 
| `src/utils/reportStorage.ts` | Creado | Lógica de persistencia en localStorage. | 
| `src/App.tsx` | Modificado | Integración de nuevas rutas del flujo. | 

**Validaciones obtenidas.** Se obtuvo un flujo funcional a nivel visual. El sistema impide el envío si faltan datos y la pantalla de procesamiento avanza automáticamente a la confirmación tras 3.2 segundos.

---

## 2. Documentación del Ticket URB-44: Historial de reportes

**Resumen.** Este ticket representa la creación de la pantalla donde el vecino puede revisar el historial de reportes enviados. Su propósito fue implementar la vista de lista, la lectura de los datos temporales del flujo anterior y un modal de detalles, cerrando así el flujo ciudadano.

### Ficha rápida

| Criterio | Detalle |
| :--- | :--- | 
| **Ticket** | URB-44 | 
| **Epica / Etiquetas** | EP-03 FRONTEND type:feature sprint-1 | 
| **Tipo de desarrollo** | Interfaz frontend interactiva | 

### Alcance incluido

* Pantalla `/mis-reportes` con miniatura, ID, fecha, dirección y estado. Modal de detalle del reporte con imagen, mapa y confianza IA simulada.
* Manejo de "Estado vacío" cuando no existen reportes registrados. Navegación integrada desde el menú principal y la confirmación.

### Archivos trabajados

| Archivo | Estado | Descripción | 
| :--- | :--- | :--- | 
| `src/pages/MyReports.tsx` | Creado | Pantalla principal del historial. | 
| `src/components/common/ReportDetailModal.tsx` | Creado | Modal de visualización detallada. | 
| `src/styles/my-reports.css` | Creado | Estilos visuales de la vista y el modal. | 
| `src/App.tsx` | Modificado | Actualización de navegación y rutas. | 

**Implementación resumida.** Se maquetó la vista de historial para leer los reportes almacenados en el localStorage por el proceso de URB-31. Se añadió renderizado condicional para listas vacías y se vinculó el modal de detalles para cada elemento de la lista.

---

## Resumen de Resultados del Sprint 1

Al finalizar este sprint, se ha completado exitosamente el flujo del ciudadano de extremo a extremo: desde el reporte inicial hasta la consulta en el historial. El proyecto cuenta con una base sólida de interfaces funcionales listas para la integración con servicios de backend y APIs de mapas reales en los siguientes ciclos de desarrollo.