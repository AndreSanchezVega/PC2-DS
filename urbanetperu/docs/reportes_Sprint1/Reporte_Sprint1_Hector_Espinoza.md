# Documentación del Ticket URB-27

## Configurar esqueleto del frontend y estilos CSS

**Proyecto UrbanetPeru — Frontend Sprint 1**

---

## Resumen

Este ticket representa el punto de partida del frontend. Su propósito fue dejar una estructura mínima funcional, verificar que el proyecto pueda ejecutarse localmente y establecer una base limpia para los commits posteriores. No se documenta una funcionalidad final de usuario, sino la preparación del entorno visual y estructural.

## Objetivo

Preparar la base inicial del frontend de UrbanetPeru para que las siguientes pantallas del sprint puedan integrarse de forma ordenada y progresiva.

## Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-27 |
| Épica / Etiquetas | EP-03 FRONTEND \| type:feature |
| Sprint | Frontend Sprint 1 |
| Autor | Hector Espinoza Benavente |
| Rol | Desarrollador Web Front-end |
| Tipo de desarrollo | Interfaz frontend |

## Alcance incluido

- Organización inicial de la aplicación frontend.
- Verificación de ejecución local sin errores visibles.
- Preparación del componente raíz para recibir pantallas posteriores.
- Separación del alcance para no incluir funcionalidades de tickets futuros.

## Fuera del alcance

- Autenticación real.
- Conexión con backend.
- Registro de reportes, mapas o IA.
- Pantallas completas de login, registro o reporte.

## Archivos trabajados o por validar

| Archivo | Estado | Descripción |
|---|---|---|
| `src/App.tsx` | Modificado | Componente principal de la aplicación; validar nombre real. |
| `src/main.tsx` | Revisado | Punto de entrada del frontend; confirmar si fue modificado. |
| `src/index.css` | Revisado/Modificado | Estilos generales base para la aplicación. |
| `package.json` | Revisado | Dependencias y scripts de ejecución. |

## Implementación resumida

1. Se revisó la estructura base del proyecto generado para el frontend.
2. Se dejó una aplicación funcional y lista para renderizar una pantalla inicial.
3. Se verificó que el proyecto pudiera levantarse en navegador sin errores principales.
4. Se evitó incluir pantallas o funcionalidades que correspondían a tickets posteriores.

## Resultado obtenido

Se obtuvo una base inicial del frontend lista para continuar con el desarrollo por tickets. El proyecto quedó preparado para integrar la pantalla de acceso y las demás vistas del primer sprint.

## Validaciones recomendadas

| Validación | Criterio |
|---|---|
| Ejecución local | La aplicación inicia sin errores visibles. |
| Alcance | El ticket no mezcla pantallas posteriores. |
| Orden del proyecto | La estructura permite continuar con commits pequeños y trazables. |

---

# Documentación del Ticket URB-28

## Implementar pantalla inicial de acceso de la app

**Proyecto UrbanetPeru — Frontend Sprint 1**

---

## Resumen

El Ticket URB-28 incorpora la primera pantalla visible del flujo de acceso. Esta vista funciona como portada o entrada de la aplicación, manteniendo el frontend centrado únicamente en esta pantalla para respetar el avance progresivo del sprint.

## Objetivo

Mostrar la pantalla inicial de acceso a UrbanetPeru como punto de entrada visual para el usuario.

## Ficha rápida

| Campo | Descripción |
|---|---|
| Ticket | URB-28 |
| Épica / Etiquetas | EP-03 FRONTEND \| type:feature |
| Sprint | Frontend Sprint 1 |
| Autor | Hector Espinoza Benavente |
| Rol | Desarrollador Web Front-end |
| Tipo de desarrollo | Interfaz frontend |

## Alcance incluido

- Visualización de la pantalla inicial de acceso.
- Ajuste del componente raíz para mostrar esta vista.
- Aplicación de estilos básicos y diseño responsivo inicial.
- Preparación visual para navegar posteriormente a inicio de sesión o registro.

## Fuera del alcance

- Validación de credenciales.
- Registro de usuarios.
- Formulario de reporte de bache.
- Integración con backend o base de datos.

## Archivos trabajados o por validar

| Archivo | Estado | Descripción |
|---|---|---|
| `src/App.tsx` | Modificado | Renderiza la pantalla correspondiente al ticket. |
| `src/pages/Login.tsx` | Creado / Modificado | Pantalla principal de acceso; validar nombre real. |
| `src/components/common/*` | Creado / Modificado | Componentes visuales reutilizables si existieron. |
| `src/styles/*` | Modificado | Estilos de la pantalla inicial. |

## Implementación resumida

1. Se delimitó que el ticket debía mostrar solo la pantalla de inicio de acceso.
2. Se integró la vista en el componente principal del frontend.
3. Se aplicaron estilos para conservar una presentación limpia y coherente.
4. Se verificó que no aparecieran formularios o pantallas de tickets posteriores.

## Resultado obtenido

El frontend muestra una pantalla inicial de acceso como primera interfaz del usuario. La vista queda lista para conectarse posteriormente con los flujos de login y registro.

## Validaciones recomendadas

| Validación | Criterio |
|---|---|
| Carga visual | La pantalla se visualiza correctamente en navegador. |
| Responsividad básica | La distribución se adapta a tamaños de pantalla comunes. |
| Separación por ticket | No se incluyen funcionalidades de login real ni registro. |
