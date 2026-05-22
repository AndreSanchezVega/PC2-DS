# Especificación de Requisitos de Software

**Proyecto:** UrbanetPeru

**Plataforma:** Plataforma Inteligente de Reporte Ciudadano

**Revisión:** 1.0 — MVP Baches

**Fecha:** Abril de 2026

---

## Ficha del documento

| Fecha | Revisión | Descripción | Verificado |
| --- | --- | --- | --- |
| Abril 2026 | 1.0 | Versión inicial — MVP Baches | Pendiente |

Documento validado por las partes en fecha: 14/04/2026

| Por el cliente | Por la empresa suministradora |
| --- | --- |
| Fdo. D. Quispe Torres, Manuel Alejandro  | Fdo. D. Espinoza Benavente, Hector |

## Índice

> GitHub genera automáticamente enlaces a los encabezados del documento.

## Introducción

El presente documento constituye la Especificación de Requisitos de Software (SRS) del
proyecto UrbanetPeru, una plataforma web inteligente de reporte ciudadano orientada a
mejorar la gestión de infraestructura vial urbana. Los vecinos — como taxistas o
transeúntes — pueden subir una fotografía de un bache o daño en la pista; el sistema
aplica un modelo de Inteligencia Artificial que clasifica automáticamente la gravedad del
daño (Leve, Moderado o Crítico) a partir de la imagen, y ubica el reporte en un mapa
interactivo para que las municipalidades puedan priorizar el mantenimiento vial. Esta
SRS ha sido elaborada siguiendo el estándar IEEE Std 830-1998 y describe los requisitos
funcionales y no funcionales del sistema en su primera iteración: el MVP para el reporte
de huecos en pistas (baches).

### Propósito

El propósito de este documento es definir de manera formal y completa los requisitos que
debe cumplir el sistema UrbanetPeru en su versión MVP, de forma que:

- El equipo de desarrollo disponga de una guía clara para el diseño e
  implementación del sistema.
- Los responsables de pruebas puedan verificar el cumplimiento de cada requisito.
- Los stakeholders (municipalidades, ciudadanía reportante, equipo técnico) cuenten
  con un documento de referencia y validación.

Este documento va dirigido a desarrolladores de software, arquitectos de sistemas,
testers, gestores de proyecto, y representantes municipales involucrados en el desarrollo
y adopción de UrbanetPeru.

### Alcance

UrbanetPeru es una aplicación web que permite a vecinos (taxistas, transeúntes y
ciudadanía en general) reportar daños en la infraestructura vial mediante la carga de una
fotografía. El sistema aplica un modelo de IA que analiza la imagen y clasifica la gravedad
del daño en tres niveles: Leve, Moderado o Crítico. Los reportes son ubicados en un
mapa interactivo accesible para las municipalidades, quienes utilizan esta
información para priorizar y planificar las labores de mantenimiento vial.

Aunque la interfaz mostrará la estructura general para reportar distintos tipos de
incidentes (basura, alumbrado, etc.), el desarrollo funcional del MVP se centrará
exclusivamente en el flujo de reporte de baches.

El sistema comprende tres capas:
- Frontend: interfaz de usuario web (HTML, CSS, JavaScript) con formulario
  de reporte y mapa de visualización de incidentes.
- Backend y Base de Datos: lógica de negocio en Python y almacenamiento en
  PostgreSQL, incluyendo coordenadas geográficas de cada reporte.
- Módulo de Inteligencia Artificial: modelo de IA integrado en el backend
  que clasifica la gravedad del bache (Leve / Moderado / Crítico) a partir del
  análisis de la imagen enviada por el usuario.

### Personal involucrado

| Campo | Detalle |
| --- | --- |
| Nombre | Espinoza Benavente, Hector |
| Rol | Desarrollador Backend |
| Categoría profesional | Estudiante de Ciencias de la Computación |
| Responsabilidades | Diseño de arquitectura, integración de base de datos y gestión del equipo |
| Información de contacto | hector.espinoza.b@uni.pe |
| Aprobación | Aprobado |

| Campo | Detalle |
| --- | --- |
| Nombre | Inga Chavez, Jorly |
| Rol | Analista QA / Tester |
| Categoría profesional | Estudiante de Ciencias de la Computación |
| Responsabilidades | Diseño y ejecución de casos de prueba; validación del modelo de IA; pruebas de usabilidad; reporte y seguimiento de defectos encontrados; verificación de requisitos de seguridad y rendimiento |
| Información de contacto | jorly.inga.c@uni.pe |
| Aprobación | Aprobado |

| Campo | Detalle |
| --- | --- |
| Nombre | Sanchez Vega, Andre Alvaro |
| Rol | BA(Analista de Negocios) |
| Categoría profesional | Estudiante de Ciencias de la Computación |
| Responsabilidades | Identificación de mejoras, Gestión de requisitos, Validación de objetivos, Análisis de impacto, Enlace de comunicación |
| Información de contacto | andre.sanchez.v@uni.pe |
| Aprobación | Aprobado |

| Campo | Detalle |
| --- | --- |
| Nombre | Trujillo Serva, Luis Andre |
| Rol | Analista de Negocios (BA) / UI/UX |
| Categoría profesional | Estudiante de Ciencias de la Computación |
| Responsabilidades | Levantamiento de requerimientos, diseño de flujos de usuario (wireframes) y redacción técnica |
| Información de contacto | luis.trujillo.s@uni.pe |
| Aprobación | Aprobado |

| Campo | Detalle |
| --- | --- |
| Nombre | Villanueva Alzamora, Farid Alonzo |
| Rol | Analista QA / Tester |
| Categoría profesional | Estudiante de Ciencias de la Computación |
| Responsabilidades | Diseño y ejecución de planes de prueba, reporte de bugs y validación de criterios de aceptación |
| Información de contacto | farid.villanueva.a@uni.pe |
| Aprobación | Aprobado |

### Definiciones, acrónimos y abreviaturas

| Término | Definición |
| --- | --- |
| SRS | Software Requirements Specification (Especificación de Requisitos de Software) |
| MVP | Minimum Viable Product (Producto Mínimo Viable) |
| IA / AI | Inteligencia Artificial |
| Bache | Hueco o deterioro en la superficie de una pista o calzada vial |
| Gravedad | Clasificación del nivel de daño de un bache asignada por el modelo de IA. Los valores posibles en el MVP son: Leve, Moderado y Crítico |
| Vecino reportante | Usuario del sistema: cualquier ciudadano (taxista, transeúnte u otro) que detecta y sube el reporte de un bache |
| Municipalidad | Entidad gubernamental local que consume los reportes del mapa para planificar y priorizar el mantenimiento vial |
| Mapa interactivo | Vista cartográfica del sistema donde se muestran geolocalizados todos los reportes de baches con su nivel de gravedad |
| Frontend | Capa de presentación e interacción con el usuario (navegador web) |
| Backend | Capa de lógica de negocio y procesamiento del servidor |
| API | Application Programming Interface (interfaz de programación de aplicaciones) |
| PostgreSQL | Sistema gestor de base de datos relacional de código abierto |
| GPS | Global Positioning System; coordenadas de latitud y longitud usadas para geolocalizar los reportes en el mapa |
| RF | Requisito Funcional |
| RNF | Requisito No Funcional |

### Referencias

| Ref. | Título | Ruta / Fuente | Fecha | Autor |
| --- | --- | --- | --- | --- |
| [IEEE830] | IEEE Std 830-1998: Recommended Practice for SRS | IEEE Standards Association | 1998 | IEEE |
| [PY3] | Documentación oficial de Python 3 | https://docs.python.org | 2024 | Python.org |
| [PGSQL] | Documentación de PostgreSQL 16 | https://www.postgresql.org/docs | 2024 | PostgreSQL Global Dev. Group |

### Resumen

Este documento está organizado en cuatro secciones principales:

- **Sección 1 — Introducción**: propósito, alcance, glosario y referencias.
- **Sección 2 — Descripción general**: visión del producto, funcionalidades
  de alto nivel, perfil de usuarios, restricciones y supuestos.
- **Sección 3 — Requisitos específicos**: detalle completo de interfaces,
  requisitos funcionales y no funcionales del MVP.
- **Sección 4 — Apéndices**: información complementaria.

## Descripción general

### Perspectiva del producto

**UrbanetPeru** es un producto independiente de nueva creación. No forma parte de ningún sistema mayor preexistente, aunque está diseñado para que en el futuro pueda integrarse con sistemas de gestión municipal o plataformas de gobierno digital.

El sistema tiene dos actores principales: los vecinos reportantes (ciudadanos que detectan y suben el reporte del bache) y las municipalidades (que consultan el mapa para priorizar el mantenimiento). Para atender a cada actor con flujos y permisos diferenciados, UrbanetPeru expone dos portales de acceso independientes:

- **Portal Vecino (`/`)**: acceso público con registro abierto, orientado al ciudadano que reporta daños viales.
- **Portal Administrador (`/admin`)**: acceso restringido, exclusivo para trabajadores de la municipalidad; las cuentas son creadas únicamente por el Administrador del Sistema, sin opción de registro público.

El sistema sigue una **arquitectura cliente-servidor de tres capas**:

1. **Capa de presentación (Frontend)**: El vecino o trabajador municipal accede mediante un navegador web al frontend (HTML/CSS/JS), que renderiza el portal correspondiente según la ruta de acceso y las credenciales del usuario.
1. **Capa de lógica de negocio (Backend)**: El frontend se comunica con el backend (Python / API REST) vía HTTP/HTTPS, que procesa la imagen, consulta el módulo de IA para clasificar la gravedad del bache y gestiona la lógica de autorización por roles.
1. **Capa de datos (Base de datos)**: El backend almacena el reporte con sus coordenadas en PostgreSQL y expone los datos al mapa interactivo donde la municipalidad visualiza y prioriza los incidentes según su gravedad.

### Funcionalidad del Producto
Las funcionalidades principales del MVP de UrbanetPeru son:
#### Portal Vecino
1. Registro de cuenta ciudadana con correo o Google.
1. Inicio de sesión exclusivo para vecinos.
1. Captura y subida de fotografías de daños viales.
1. Geolocalización automática o manual del reporte.
1. Clasificación automática de gravedad por IA.
1. Visualización del mapa público de reportes.
1. Consulta del historial personal de reportes y notificaciones de estado.

#### Portal Administrador
1. Inicio de sesión exclusivo para trabajadores de la municipalidad (credenciales creadas por el administrador del sistema, no por registro público).
1. Visualización del mapa completo de reportes con filtros por gravedad, fecha y estado.
1. Gestión de estados de reportes (Pendiente → En Revisión → Atendido / Rechazado).
1. Visualización de estadísticas y mapa de calor por distrito.
1. Exportación de reportes en CSV o PDF.

### Características de los usuarios

**Usuario tipo 1 — Vecino reportante**

| Campo | Detalle |
| --- | --- |
| Tipo de usuario | Vecino reportante: taxista, transeúnte u otro ciudadano que detecta un bache |
| Formación | Sin requisito de formación técnica. Se asume alfabetización digital básica (uso de navegador web o smartphone con cámara). |
| Habilidades | Capacidad de tomar una fotografía, acceder al navegador web y proporcionar su ubicación aproximada. |
| Actividades | Subir la fotografía del bache, indicar su ubicación y enviar el reporte. Recibir la clasificación de gravedad asignada por la IA. |

**Usuario tipo 2 — Personal municipal**

| Campo | Detalle |
| --- | --- |
| Tipo de usuario | Funcionario o técnico de la municipalidad |
| Formación | Conocimientos básicos de informática y gestión municipal. |
| Habilidades | Lectura e interpretación de mapas digitales, toma de decisiones sobre prioridades de mantenimiento. |
| Actividades | Consultar el mapa interactivo con los reportes geolocalizados, filtrar por gravedad (Leve/Moderado/Crítico) y planificar las intervenciones de mantenimiento vial. |

### Restricciones

- El desarrollo del MVP se limita exclusivamente al flujo funcional de baches;
  los demás tipos de incidentes se presentan en la interfaz pero no son procesados.
- El backend debe desarrollarse en Python (versión 3.10 o superior).
- La base de datos debe ser PostgreSQL (versión 14 o superior).
- El frontend debe ser compatible con los navegadores modernos más utilizados
  (Chrome, Firefox, Edge — últimas dos versiones estables).
- El modelo de IA debe poder ejecutarse desde el servidor backend sin dependencias
  de servicios externos de pago en la fase MVP.
- El sistema debe ser accesible vía HTTPS en el entorno de producción.

- La plataforma debe cumplir con la normativa de protección de datos personales vigente en Perú (Ley N.° 29733).
- No se permitirá almacenar información de identificación facial en las imágenes subidas.

### Suposiciones y dependencias

- Se asume que los vecinos reportantes disponen de un dispositivo con cámara
  (smartphone o similar) y acceso a internet para subir la fotografía del bache.
- Se asume que existe un modelo de IA preentrenado o entrenable con imágenes
  de daños viales que permita clasificar la gravedad en Leve, Moderado y Crítico.
- Se asume que PostgreSQL estará instalado y configurado en el entorno de
  despliegue del backend.
- Se asume la disponibilidad constante de los servicios de mapas (como Google Maps API) para la geolocalización de los puntos críticos.
- Se asume que el sistema recibirá coordenadas GPS válidas (latitud/longitud)
  junto con cada reporte, bien por geolocalización automática del navegador o
  por ingreso manual del vecino.
- Si el modelo de IA dejara de estar disponible o sus dependencias cambiaran,
  la sección de clasificación automática del sistema debería ser revisada y
  actualizada.
- Si la biblioteca de mapas utilizada en el frontend cambiara de licencia o
  API, la capa de visualización cartográfica debería adaptarse.

### Evolución previsible del sistema

Las siguientes funcionalidades están identificadas como mejoras futuras fuera del alcance
del MVP:

- Habilitación funcional de otros tipos de incidentes: basura, alumbrado público,
  filtraciones, señalización vial, entre otros.
- Panel de administración municipal con seguimiento de estado de cada reporte
  (pendiente, en proceso, resuelto) y exportación de datos.
- Sistema de autenticación y registro de usuarios ciudadanos para dar
  trazabilidad a los reportes por persona.
- Notificaciones automáticas al vecino reportante sobre el avance de su reporte.
- Filtros avanzados en el mapa por gravedad, zona geográfica y período de tiempo.
- Mejora continua del modelo de IA con imágenes reales acumuladas del sistema.
- Integración del mapa con sistemas GIS oficiales de las municipalidades.

## Requisitos específicos

### Requisitos comunes de los interfaces

El sistema UrbanetPeru interactúa con dos perfiles de usuario (vecinos y personal municipal) mediante una interfaz web responsiva. La arquitectura se basa en una separación clara entre el frontend y el backend, comunicándose a través de una API REST protegida para garantizar la integridad de los reportes de infraestructura vial.

#### Interfaces de usuario

La interfaz es una aplicación web accesible desde navegadores modernos (Chrome, Firefox, Safari). Debe cumplir con:

- **Diseño Responsivo y Estética**: Adaptación automática a pantallas de escritorio (mín. 1024px) y móviles (mín. 360px). Se empleará una paleta de colores institucional (azules y grises) con alto contraste para facilitar la lectura en exteriores bajo luz solar.
- **Formulario de Reporte**: Interfaz simplificada con selector de tipo de incidente, botón de carga de imagen (JPG/PNG), captura de ubicación y descripción opcional. Solo el flujo de baches estará activo; otros tipos mostrarán un estado de "Próximamente".
- **Feedback de IA**: Pantalla de confirmación tras el envío que muestra el ID del reporte y el nivel de gravedad detectado (Leve, Moderado, Crítico) mediante indicadores visuales de color (verde, amarillo, rojo).
- **Visualización de Datos**: Mapa interactivo para el personal municipal que permite filtrar marcadores por gravedad y fecha para la planificación de cuadrillas.

#### Interfaces de hardware

- **Dispositivos de Captura**: El sistema debe interactuar con la cámara integrada de dispositivos móviles para la toma directa de fotografías.
- **Sensores de Geolocalización**: Interfaz con el módulo GPS del dispositivo del usuario (vía API de Geolocalización del navegador) para obtener coordenadas con una precisión mínima de 15 metros.
- **Almacenamiento Local**: Acceso al sistema de archivos para permitir la subida de imágenes previamente almacenadas en la galería o disco duro.

#### Interfaces de software

- **Python Backend (API REST)**: Servidor basado en Python 3.10+ que expone endpoints para recibir objetos JSON y archivos multimedia. Gestiona la lógica de negocio y la invocación del modelo de IA.
- **PostgreSQL 14+**: Interfaz de persistencia para datos estructurados (coordenadas, marcas de tiempo, metadatos de usuario y resultados de clasificación).
- **Modelo de IA (Visión Computacional)**: Integración con librerías de procesamiento de imágenes (e.g., OpenCV, PyTorch/TensorFlow) para el análisis de baches. Entrada: JPG/PNG; Salida: Clase de gravedad.
- **Servicio de Mapas**: Interfaz con proveedores de teselas (e.g., OpenStreetMap a través de `Leaflet.js`) para la renderización de la cartografía base y el posicionamiento de marcadores.
- **Almacenamiento de Objetos**: Interfaz con el sistema de archivos del servidor o servicio en la nube para el guardado y recuperación de las imágenes de los reportes.

#### Interfaces de comunicación

- **Protocolos de Red**: Toda comunicación entre cliente y servidor se realizará mediante HTTPS utilizando el puerto 443 para garantizar el cifrado de datos en tránsito.
- **Formato de Intercambio**: Uso estricto de JSON para peticiones y respuestas de la API.
- **Seguridad y Autenticación**: Las comunicaciones que requieran privilegios (personal municipal) deberán incluir Tokens de Autenticación (JWT) en las cabeceras HTTP.
- **Estándar de Cifrado**: Uso obligatorio de certificados SSL/TLS 1.2 o superior para la protección de la privacidad de los vecinos reportantes.

### Requisitos funcionales

A continuación se detallan los requisitos funcionales del MVP de UrbanetPeru, organizados
por módulos. Cada requisito incluye su tabla de identificación y descripción.

#### RF-01: Registro y autenticación de usuarios

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-01 |
| Nombre de requisito | Registro y autenticación de usuarios |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El sistema debe permitir a los ciudadanos registrarse mediante dos métodos:
(1) **Correo electrónico y contraseña**: el usuario proporciona correo, crea
una contraseña (mínimo 8 caracteres con mayúsculas, minúsculas y números) y confirma
mediante un enlace de verificación enviado a su correo.
(2) **Cuenta de Google (OAuth 2.0)**: el usuario autoriza el acceso mediante
su cuenta de Google existente.
Una vez registrado, el usuario puede iniciar sesión para realizar reportes asociados
a su perfil. El sistema debe validar credenciales, gestionar tokens de sesión seguros
(JWT) y permitir recuperación de contraseña mediante correo electrónico.

#### RF-02: Selección de tipo de incidente

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-02 |
| Nombre de requisito | Selección de tipo de incidente |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El sistema debe mostrar al vecino reportante autenticado un selector con los tipos
de incidente disponibles: **Baches, Basura, Alumbrado Público, Filtraciones,
Señalización Vial**. Al seleccionar un tipo distinto a "Baches", el sistema mostrará
un mensaje visual indicando "Próximamente disponible — Esta funcionalidad estará
activa en la siguiente versión" y deshabilitará temporalmente el formulario de reporte.
Solo la selección de "Baches" habilitará el formulario completo de reporte fotográfico
y permitirá continuar con el proceso.

#### RF-03: Captura y validación de ubicación geográfica

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-03 |
| Nombre de requisito | Captura y validación de ubicación geográfica |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El sistema debe ofrecer dos métodos para capturar la ubicación del bache:
(1) **Geolocalización automática**: mediante la API de Geolocalización del
navegador (navigator.geolocation), obtener coordenadas GPS con precisión mínima
de 15 metros. El sistema debe solicitar permiso explícito al usuario.
(2) **Selección manual en mapa**: permitir al usuario señalar la ubicación
exacta mediante un clic en un mapa interactivo embebido en el formulario.
El sistema debe validar que las coordenadas estén dentro del territorio peruano
(latitud: -18.35 a 0°, longitud: -81.33 a -68.65°) y mostrar la dirección aproximada
mediante geocodificación inversa para confirmación del usuario.

#### RF-04: Registro de reporte de bache con validaciones

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-04 |
| Nombre de requisito | Registro de reporte de bache con validaciones |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El sistema debe permitir al vecino reportante registrar un bache mediante un
formulario con los siguientes campos:

**Campos obligatorios**:
- **Fotografía**: imagen del bache en formato JPG, JPEG o PNG con tamaño
  máximo de 5 MB y resolución mínima de 640x480 píxeles.
- **Ubicación**: coordenadas GPS capturadas automáticamente o seleccionadas
  manualmente según RF-03.

**Campos opcionales**:
- **Descripción textual**: campo de texto libre con máximo 500 caracteres
  para detalles adicionales del problema.
- **Fotografías adicionales**: hasta 2 imágenes complementarias del mismo
  bache desde diferentes ángulos (mismas restricciones de formato y tamaño).

El sistema debe realizar las siguientes validaciones antes de habilitar el envío:
- Verificar presencia de fotografía principal y ubicación válida.
- Validar formato de imagen mediante inspección del encabezado del archivo
  (magic bytes), no solo la extensión.
- Comprobar que el tamaño de cada imagen no exceda 5 MB.
- Sanitizar la descripción textual para prevenir inyección de código HTML/JS.

En caso de validación fallida, mostrar mensajes de error específicos junto al campo
correspondiente sin limpiar los datos ya ingresados.

#### RF-05: Almacenamiento seguro de imágenes

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-05 |
| Nombre de requisito | Almacenamiento seguro de imágenes |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El backend debe almacenar las fotografías de los reportes en el sistema de archivos
del servidor o en un servicio de almacenamiento en la nube compatible con S3 API.
Cada imagen debe:
- Renombrarse con un identificador único (UUID v4) concatenado con timestamp
  para evitar colisiones y preservar el orden cronológico.
- Almacenarse en una estructura de directorios organizados por año y mes
  (ej: /reportes/2026/04/).
- Ser procesada mediante una librería de imágenes (Pillow) para eliminar
  metadatos EXIF sensibles (datos de GPS del dispositivo, marca/modelo de
  cámara, información de software) antes del almacenamiento final, cumpliendo
  con la restricción de privacidad indicada en la sección 2.4.
- Generar una versión miniatura (thumbnail) de 200x200 píxeles para optimizar
  la carga en el mapa y listados.

El sistema debe retornar las URLs de acceso a la imagen completa y miniatura para
su registro en la base de datos.

#### RF-06: Clasificación de gravedad mediante Inteligencia Artificial

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-06 |
| Nombre de requisito | Clasificación de gravedad mediante Inteligencia Artificial |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El backend debe integrar un módulo de Inteligencia Artificial basado en Visión
Computacional para el análisis automático de baches. Al recibir un reporte, el
sistema debe:

**Procesamiento de imagen**:
- Preprocesar la fotografía principal del bache: redimensionar a resolución
  estándar (ej: 512x512), normalizar valores de píxeles y aplicar técnicas de
  mejora de contraste si es necesario.
- Invocar el modelo de clasificación (basado en arquitectura de red neuronal
  convolucional como ResNet, EfficientNet o similar, preentrenado y ajustado
  con dataset de daños viales).

**Clasificación de gravedad**:
El modelo debe analizar características visuales del bache (extensión superficial,
profundidad aparente, irregularidad de bordes, contraste con pavimento circundante)
y retornar exclusivamente una de las siguientes clasificaciones:
- **Leve**: bache superficial, diámetro menor a 30 cm, profundidad estimada
  menor a 3 cm. Prioridad baja.
- **Moderado**: bache de tamaño medio, diámetro entre 30-60 cm, profundidad
  estimada de 3-7 cm. Prioridad media.
- **Crítico**: bache extenso, diámetro mayor a 60 cm, profundidad estimada
  mayor a 7 cm o múltiples baches agrupados. Prioridad alta — requiere atención
  urgente.

**Manejo de errores**:
- Si la imagen está borrosa, sobreexpuesta o el modelo no detecta claramente
  un bache (confianza de predicción menor al 60%), el sistema debe retornar
  la clasificación especial: **"No determinada"** y registrar un log
  para revisión manual.
- En caso de fallo técnico del servicio de IA (timeout, error de ejecución),
  el sistema debe continuar registrando el reporte con gravedad "No determinada",
  almacenar el error en logs y notificar al vecino que la clasificación automática
  no está disponible temporalmente.

La clasificación debe almacenarse en la base de datos junto con el nivel de confianza
del modelo (score de 0 a 1) para futura auditoría y mejora del sistema.

#### RF-07: Persistencia del reporte en base de datos

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-07 |
| Nombre de requisito | Persistencia del reporte en base de datos |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El backend debe almacenar cada reporte de bache en PostgreSQL con la siguiente
información estructurada:

**Datos del reporte**:
- **ID único**: UUID v4 generado automáticamente.
- **ID de usuario**: referencia al usuario autenticado que realizó el reporte.
- **Fecha y hora de creación**: timestamp con zona horaria (UTC-5 para Perú).
- **Coordenadas geográficas**: latitud y longitud en formato DECIMAL(9,6)
  con índice espacial (PostGIS) para consultas geográficas eficientes.
- **Dirección textual**: geocodificación inversa de coordenadas (calle,
  distrito, provincia) generada automáticamente mediante servicio de mapas.
- **URLs de fotografías**: ruta de la imagen principal, thumbnail y hasta
  2 imágenes adicionales si fueron proporcionadas.
- **Gravedad asignada por IA**: ENUM (Leve, Moderado, Crítico, No determinada).
- **Nivel de confianza de IA**: DECIMAL(3,2) representando el score del modelo.
- **Descripción del vecino**: TEXT opcional (máximo 500 caracteres).
- **Estado del reporte**: ENUM (Recibido, En revisión, En proceso, Resuelto,
  Rechazado) con valor inicial "Recibido".
- **Fecha de última actualización**: timestamp actualizado automáticamente
  mediante trigger de base de datos.

El sistema debe garantizar:
- Transaccionalidad: si falla alguna parte del proceso (almacenamiento de imagen,
  clasificación IA, inserción en BD), debe revertirse toda la operación.
- Persistencia: los datos deben sobrevivir reinicios del servidor y respaldarse
  automáticamente según política de backups de PostgreSQL.
- Integridad referencial: las relaciones entre tablas (usuarios, reportes,
  imágenes) deben mantenerse mediante llaves foráneas con restricciones CASCADE.

#### RF-08: Generación de ficha técnica del reporte

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-08 |
| Nombre de requisito | Generación de ficha técnica del reporte |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Media / Deseado |

El sistema debe generar automáticamente una ficha técnica en formato PDF para cada
reporte de bache registrado. La ficha debe incluir:

**Contenido de la ficha**:
- **Encabezado**: logo de UrbanetPeru, título "Reporte de Bache" y número
  de folio (ID del reporte).
- **Información del reporte**: fecha y hora de creación, ubicación exacta
  (coordenadas + dirección), distrito/provincia.
- **Clasificación de gravedad**: nivel asignado por IA con indicador visual
  de color (verde/amarillo/rojo) y nivel de confianza del modelo.
- **Evidencia fotográfica**: imagen principal del bache en alta resolución
  e imágenes adicionales si existen.
- **Descripción del reportante**: texto proporcionado por el vecino.
- **Datos del reportante**: nombre y correo del usuario autenticado (con
  consentimiento de compartir información con autoridades).
- **Prioridad sugerida**: recomendación de atención basada en gravedad
  (Urgente/Media/Baja).
- **Pie de página**: fecha de generación del documento y disclaimer de
  privacidad.

El sistema debe:
- Generar el PDF mediante librería ReportLab o similar en Python.
- Almacenar el PDF en el mismo directorio de las imágenes con nomenclatura
  estandarizada (ej: REPORTE_[UUID].pdf).
- Proporcionar un enlace de descarga del PDF en la pantalla de confirmación
  del reporte y en el detalle del marcador del mapa.
- Incluir metadatos del PDF (autor: UrbanetPeru, título, fecha de creación) para
  trazabilidad.

#### RF-09: Confirmación visual al ciudadano con detalles completos

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-09 |
| Nombre de requisito | Confirmación visual al ciudadano con detalles completos |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

Tras el envío exitoso del reporte, el sistema debe mostrar al vecino una pantalla
de confirmación completa que incluya:

**Información del reporte**:
- **ID del reporte**: número de folio único para seguimiento.
- **Clasificación de gravedad**: nivel detectado por la IA (Leve, Moderado,
  Crítico o No determinada) con representación visual mediante icono de color
  y badge descriptivo.
- **Ubicación confirmada**: miniatura del mapa mostrando el punto exacto
  del reporte y dirección textual.
- **Miniatura de la fotografía**: preview de la imagen principal enviada.
- **Descarga de ficha técnica**: botón para descargar el PDF del reporte
  (RF-08) para respaldo personal.
- **Tiempo estimado de atención**: mensaje orientativo basado en gravedad
  (ej: "Los reportes críticos son atendidos prioritariamente en 3-5 días hábiles").

**Opciones de acción**:
- Botón "Ver en el mapa" que redirige al mapa interactivo centrado en el
  reporte recién creado.
- Botón "Realizar otro reporte" que limpia el formulario y permite reportar
  un nuevo incidente.
- Opción de compartir el reporte en redes sociales o mediante enlace directo.

**Manejo de errores**:
En caso de error durante el envío o fallo del módulo de IA, el sistema debe:
- Mostrar un mensaje claro y amigable indicando el tipo de error (ej: "No se
  pudo procesar la imagen", "Error de conexión", "Servicio temporalmente
  no disponible").
- Preservar los datos ingresados en el formulario para permitir reintento sin
  necesidad de volver a cargar la fotografía o ubicación.
- Ofrecer un botón "Reintentar envío" que vuelva a ejecutar la petición sin
  recargar la página.
- Registrar el error en logs del sistema con detalles técnicos para diagnóstico.

#### RF-10: Mapa interactivo de reportes geolocalizados con filtros

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-10 |
| Nombre de requisito | Mapa interactivo de reportes geolocalizados con filtros |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Alta / Esencial |

El sistema debe proporcionar un mapa interactivo accesible tanto para vecinos
reportantes como para personal municipal, con las siguientes características:

**Visualización de reportes**:
- **Marcadores geolocalizados**: cada reporte debe representarse como un
  marcador (pin) en su ubicación exacta según coordenadas GPS almacenadas.
- **Codificación por colores**: los marcadores deben diferenciarse visualmente
  según gravedad asignada por IA:
  - **Verde**: Leve
  - **Amarillo/Ámbar**: Moderado
  - **Rojo**: Crítico
  - **Gris**: No determinada

- **Agrupación de marcadores**: cuando existan múltiples reportes muy
  cercanos (cluster), el mapa debe agruparlos en un marcador numérico que se
  expanda al hacer zoom.

**Interacción con marcadores**:
Al hacer clic/tap sobre un marcador, debe desplegarse un popup flotante con:
- ID del reporte (con enlace a vista detallada).
- Fecha y hora de creación.
- Clasificación de gravedad con badge de color.
- Miniatura de la fotografía principal (clickeable para ampliar).
- Dirección exacta del bache.
- Estado actual del reporte (Recibido, En proceso, Resuelto).
- Botón "Ver detalles completos" que abre modal con toda la información.

**Panel de filtros**:
El mapa debe incluir un panel lateral (colapsable en móviles) con opciones de filtrado:
- **Por gravedad**: checkboxes para mostrar/ocultar cada nivel (Leve,
  Moderado, Crítico, No determinada).
- **Por estado**: filtrar por estado del reporte (Recibido, En proceso,
  Resuelto).
- **Por rango de fechas**: selector de fecha inicio y fin para mostrar
  reportes en período específico.
- **Por distrito**: dropdown con distritos disponibles basado en geocodificación
  de reportes existentes.
- Botón "Limpiar filtros" para resetear todos los criterios.

**Funcionalidades adicionales**:
- Control de zoom y paneo estándar de mapas (rueda de mouse, gestos táctiles).
- Botón de "Mi ubicación" que centra el mapa en la posición GPS actual del usuario.
- Botón de "Vista satelital" / "Vista de calles" para alternar capa base del mapa.
- Leyenda visible explicando el código de colores de gravedad.
- Contador de reportes visibles según filtros activos.

**Actualización en tiempo real**:
El mapa debe recargar automáticamente los marcadores cada 30 segundos mediante
peticiones AJAX al backend para reflejar nuevos reportes sin necesidad de refrescar
la página completa. Los reportes nuevos deben animarse brevemente al aparecer.

#### RF-11: Vista de listado tabular de reportes con ordenamiento

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-11 |
| Nombre de requisito | Vista de listado tabular de reportes con ordenamiento |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Media / Deseado |

El sistema debe ofrecer una vista de listado tabular complementaria al mapa interactivo,
diseñada principalmente para el personal municipal. La tabla debe mostrar todos los
reportes de baches con las siguientes características:

**Columnas de la tabla**:
- **ID**: número de folio del reporte (clickeable para ver detalles).
- **Fecha y hora**: timestamp de creación en formato legible (DD/MM/YYYY HH:MM).
- **Ubicación**: dirección textual o coordenadas formateadas.
- **Distrito**: distrito/localidad del reporte.
- **Gravedad**: badge con código de color (Verde/Amarillo/Rojo/Gris) y texto.
- **Estado**: badge indicando estado actual (Recibido/En proceso/Resuelto).
- **Reportado por**: nombre del usuario (solo para personal municipal autorizado).
- **Vista previa**: miniatura de la fotografía principal.
- **Acciones**: iconos para ver en mapa, descargar ficha PDF y marcar como
  resuelto (solo personal municipal).

**Funcionalidades de ordenamiento**:
- Al hacer clic en el encabezado de cualquier columna, los reportes deben
  reordenarse ascendente o descendentemente.
- Indicador visual (flecha ↑↓) mostrando la columna activa de ordenamiento.
- Prioridad de ordenamiento por defecto: Gravedad (Crítico primero) → Fecha
  (más recientes primero).

**Paginación y rendimiento**:
- Mostrar 20 reportes por página con controles de navegación (Anterior/Siguiente
  y selector de página).
- Indicador de "Mostrando X-Y de Z reportes totales".
- Carga asíncrona de datos mediante peticiones AJAX para evitar recargas completas.

**Búsqueda y filtros**:
- Barra de búsqueda de texto libre para buscar por ID, dirección o distrito.
- Mismos filtros disponibles en el mapa (gravedad, estado, rango de fechas, distrito).
- Botón "Exportar a CSV" para descargar tabla filtrada (solo personal municipal).

Dado que el MVP no incluye autenticación, la vista mostrará todos los reportes sin
filtro por usuario, pero las columnas de información sensible (nombre del reportante)
y acciones administrativas estarán ocultas hasta implementar el sistema de roles.

#### RF-12: Panel de control para personal municipal

| Campo | Detalle |
| --- | --- |
| Número de requisito | RF-12 |
| Nombre de requisito | Panel de control para personal municipal |
| Tipo | Requisito |
| Fuente del requisito | Análisis de producto — MVP UrbanetPeru |
| Prioridad del requisito | Baja / Opcional — Fuera del alcance del MVP |

El sistema debe proporcionar un panel de control (dashboard) exclusivo para personal
municipal autenticado con rol de "Funcionario" o "Administrador". Este requisito
está identificado para fases posteriores al MVP pero se documenta para planificación
futura.

**Funcionalidades previstas**:
- Estadísticas agregadas: total de reportes, distribución por gravedad y estado,
  tendencias temporales.
- Gráficos visuales: barras, líneas y mapas de calor mostrando zonas con mayor
  concentración de baches críticos.
- Gestión de reportes: cambio de estado (marcar como en proceso, resuelto,
  rechazado), asignación a cuadrillas de mantenimiento.
- Exportación de reportes: generación de informes consolidados en PDF/Excel
  para reportes a gerencia municipal.
- Notificaciones: alertas de nuevos reportes críticos que requieren atención
  inmediata.

Este requisito quedará implementado en una iteración futura del sistema, posterior
al lanzamiento del MVP.

### Requisitos no funcionales

#### Requisitos de rendimiento

El sistema deberá cumplir con los siguientes criterios de rendimiento:

- El sistema deberá soportar al menos 100 usuarios concurrentes,
  generando hasta 50 transacciones por minuto relacionadas con el registro
  de reportes, sin degradación apreciable del rendimiento.

- El tiempo de respuesta para el registro de un reporte no deberá
  exceder los 2 segundos en el 95% de los casos, bajo condiciones
  de carga normal.

- La carga de la página principal deberá realizarse en menos de
  3 segundos en conexiones de banda ancha de al menos 10 Mbps.

- El procesamiento de la imagen mediante el módulo de inteligencia
  artificial deberá completarse en un tiempo máximo de 5 segundos por
  reporte; en caso de superarse este límite, el sistema almacenará el
  reporte y notificará al usuario que el diagnóstico estará disponible
  en breve.

#### Seguridad

El sistema deberá garantizar la seguridad de la información mediante
los siguientes mecanismos:

- Todas las comunicaciones entre cliente y servidor deberán
  realizarse mediante el protocolo HTTPS, quedando prohibida cualquier
  transmisión en texto plano.

- El acceso al panel administrativo estará restringido únicamente
  a usuarios con rol de administrador, verificado mediante mecanismos
  de autenticación.

- Se deberá mantener un registro (log) de actividades relevantes,
  incluyendo inicio de sesión, creación de reportes y errores del sistema,
  conservándose por un periodo mínimo de 30 días.

- El sistema deberá validar y sanitizar todas las entradas del
  usuario para prevenir ataques de inyección SQL y XSS.

- Las imágenes cargadas por los usuarios deberán validarse en tipo
  y tamaño antes de ser procesadas o almacenadas.

- El sistema deberá implementar políticas de contraseñas seguras,
  incluyendo:
  - Longitud mínima de 8 caracteres.
  - Uso de mayúsculas, minúsculas, números y caracteres especiales.
  - Bloqueo temporal de la cuenta tras 5 intentos fallidos consecutivos.

#### Fiabilidad

El sistema deberá cumplir con los siguientes niveles de fiabilidad:

- El sistema deberá garantizar una tasa de éxito de al menos el
  98% en el procesamiento de reportes válidos.

- El sistema deberá asegurar la persistencia de los datos mediante
  almacenamiento en base de datos confiable.

- El sistema deberá permitir la recuperación de información mediante
  copias de seguridad realizadas diariamente.

- El sistema deberá ser capaz de recuperarse de fallos menores sin
  pérdida significativa de información.

#### Disponibilidad

El sistema deberá cumplir con los siguientes niveles de disponibilidad:

- El sistema deberá estar disponible al menos el **95%**
  del tiempo mensual, lo que equivale a un máximo de 36 horas de
  inactividad permitidas al mes.

- Las ventanas de mantenimiento programado no deberán exceder
  un total de 16 horas mensuales y deberán notificarse a los usuarios
  con al menos 24 horas de anticipación.

- Ante un fallo no planificado, el sistema deberá restaurarse
  en un tiempo máximo de 2 horas.

#### Mantenibilidad

El sistema deberá ser mantenible bajo las siguientes condiciones:

- El desarrollador será el encargado del mantenimiento del sistema,
  incluyendo corrección de errores, mejoras y actualizaciones.

- El código deberá estar organizado en módulos (rutas, lógica,
  base de datos y módulo de IA) para facilitar su comprensión.

- Se deberán realizar pruebas después de cada actualización,
  verificando que las funcionalidades principales sigan funcionando
  correctamente.

- El sistema deberá permitir agregar nuevos tipos de incidencias
  sin requerir cambios importantes en su estructura.

- Se deberá contar con un archivo `README` con instrucciones
  básicas de instalación y uso.

- El sistema deberá utilizar control de versiones (Git) para
  facilitar el mantenimiento y trabajo en equipo.

#### Portabilidad

El sistema deberá cumplir con los siguientes requisitos de portabilidad:

- La aplicación web deberá ser accesible desde navegadores modernos
  como Chrome, Firefox y Edge, tanto en computadoras como en dispositivos móviles.

- El sistema deberá funcionar en sistemas operativos como Windows,
  Linux y macOS sin requerir cambios importantes.

- El backend en Python deberá poder ejecutarse en cualquier entorno
  compatible con este lenguaje.

- La base de datos PostgreSQL podrá utilizarse tanto en entornos
  locales como en la nube.

- Opcionalmente, el sistema podrá ser desplegado mediante Docker.

### Otros requisitos

- **Requisitos legales:** El sistema deberá cumplir con la
  normativa de protección de datos personales vigente.

- **Privacidad:** El sistema deberá solicitar el consentimiento
  del usuario antes de almacenar información de ubicación e imágenes.

- **Requisitos sociales:** El sistema deberá ser accesible
  para usuarios con conocimientos básicos de tecnología.

- **Escalabilidad:** El sistema deberá permitir la incorporación
  futura de nuevos tipos de incidencias urbanas.

## Apéndices

### Apéndice A: Tecnologías utilizadas

| Componente | Tecnología |
| --- | --- |
| Frontend | HTML, CSS, JavaScript |
| Backend | Python (Flask) |
| Base de datos | PostgreSQL |
| Módulo IA | Machine Learning en Python |
| Control de versiones | Git |

**Tabla:** Tecnologías principales del proyecto

### Apéndice B: Flujo de operación del sistema

**Flujo del usuario:**
1. El usuario accede al sistema desde su navegador.
1. Registra un reporte con imagen, ubicación y descripción.
1. El sistema procesa la imagen mediante el módulo de IA.
1. El reporte se almacena y se muestra una confirmación.

**Flujo del administrador:**
1. El administrador accede al sistema.
1. Visualiza los reportes en el mapa.
1. Consulta detalles y gestiona el estado del reporte.
