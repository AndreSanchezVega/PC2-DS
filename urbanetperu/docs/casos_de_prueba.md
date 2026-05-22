# Casos de prueba-Sprint 01

## 1. Login de usuario

### Login exitoso con credenciales válidas
- Usuario registrado en el sistema.
- Ingresar correo y contraseña correctos.
- Hacer clic en "Iniciar sesión".
- Redirige a la página principal del ciudadano.

**Resultado**: Paso

### Login fallido con contraseña incorrecta
- Usuario registrado en el sistema.
- Ingresar correo válido y contraseña incorrecta.
- Hacer clic en "Iniciar sesión".
- Aparece mensaje de error "Credenciales inválidad".

**Resultado**: Paso

### Login fallido con campos vacíos
- Estar en la página de login.
- Dejar los campos vacíos y hacer clic en "Iniciar sesión".
- Aparece el mensaje "Ingresa tu correo y contraseña".

**Resultado**: Paso

### Cierre de sesión
- Usuario logeado correctamente.
- Hacer clic en "Cerrar sesión".
- Redirige a la página de login y limpia la sesión.

**Resultado**: Paso

## 2. Crear cuenta

### Registro exitoso con datos válidos
- Estar en la página de registro.
- Ingresar nombre, correo y contraseña válidos.
- Hacer clic en "Crear cuenta".
- Usuario creado y redirige a la página principal.

**Resultado**: Paso

### Registro fallido con campos vacíos
- Estar en la página de registro.
- Dejar los campos vacíos y hacer clic en "Crear cuenta".
- Aparece el mensaje "Completa todos los campos".

**Resultado**: Paso

## 3. Cargar página principal

- Servidor corriendo (backend-frontend).
- Abrir `localhost:3000`.
- Página cargada correctamente.

**Resultado**: Paso.

## 4. Formulario de reporte - campos obligatorios

- Usuario en la página de reportes.
- Intenta enviar sin llenar campos.
- Aparece un mensaje de error.

**Resultado**: Paso

## 5. Navegación entre secciones

- Estar en la página principal.
- Click en las otras secciones diferente a reportar bache.
- Aparece un mensaje de "proximamente".

**Resultado**: Paso
