# Práctica 2 - Patrones Creacionales

## Los 5 Patrones Creacionales

### 1. Singleton
Garantiza que una clase tenga **una única instancia** y proporciona un punto de acceso global a ella.

**En el proyecto:** La conexión a MongoDB debe ser única en toda la aplicación. Si se crearan múltiples conexiones se desperdiciarían recursos del pool de la base de datos.

---

### 2. Factory Method
Define una interfaz para crear un objeto, pero deja que las **subclases decidan qué clase instanciar**. El método de creación se delega a subclases.

**En el proyecto:** Podría usarse para crear distintos tipos de `Reporte` (BacheReport, LuminariaReport, BasuraReport), donde cada subclase Factory sabe cómo construir su tipo y asignarle valores por defecto adecuados.

---

### 3. Abstract Factory
Proporciona una interfaz para crear **familias de objetos relacionados** sin especificar sus clases concretas.

**En el proyecto:** Podría existir una `NotificationFactory` que crea familias de notificaciones (EmailNotification + PushNotification + SMSNotification) según el rol del usuario (vecino vs. municipal), garantizando consistencia dentro de cada familia.

---

### 4. Builder
Separa la **construcción de un objeto complejo** de su representación, permitiendo crear distintas representaciones con el mismo proceso de construcción.

**En el proyecto:** Un `Reporte` tiene múltiples campos opcionales (location, latitude, longitude, category, priority, images). El Builder permite construirlo paso a paso con valores por defecto seguros, validando al final.

---

### 5. Prototype
Crea nuevos objetos **clonando una instancia existente**, en lugar de construirla desde cero.

**En el proyecto:** Al crear un segundo reporte similar al anterior (mismo vecino, misma zona), podría clonarse el último reporte del usuario y modificar solo los campos que cambian (descripción, imágenes), evitando rellenar el formulario completo.

---

## Patrones Implementados

### Singleton — `DatabaseManager`

**Archivo:** [`urbanetperu/backend/config/db.js`](urbanetperu/backend/config/db.js)

#### ¿Por qué aquí?

El servidor Express arranca una sola vez y necesita exactamente una conexión a MongoDB Atlas. Sin Singleton, cada módulo que importara `db.js` podría disparar su propia llamada a `mongoose.connect()`, agotando el pool de conexiones. Con el patrón, no importa cuántas veces se llame a `getInstance()` desde distintos archivos: siempre se recibe el mismo objeto `DatabaseManager` y la conexión solo se negocia una vez.

#### Estructura

| Elemento | Rol |
|---|---|
| `DatabaseManager._instance` | Almacena la única instancia (estática, vive en la clase) |
| `constructor()` | Solo inicializa `_connected = false`; no abre ninguna conexión |
| `getInstance()` | Crea la instancia si no existe; si ya existe, la devuelve directamente |
| `connect()` | Abre la conexión real a MongoDB; si `_connected` es `true`, sale sin hacer nada |
| `isConnected()` | Permite consultar el estado desde cualquier parte del backend |

#### Código

```js
class DatabaseManager {
  constructor() {
    this._connected = false;
  }

  static getInstance() {
    if (!DatabaseManager._instance) {
      DatabaseManager._instance = new DatabaseManager();
    }
    return DatabaseManager._instance;          // siempre el mismo objeto
  }

  async connect() {
    if (this._connected) {
      console.log('MongoDB: reusing existing connection');
      return;                                  // segunda llamada → no hace nada
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    this._connected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }

  isConnected() {
    return this._connected;
  }
}
```

#### Uso en el proyecto

En [`index.js`](urbanetperu/backend/index.js), el servidor obtiene la instancia y conecta:

```js
// Obtiene (o crea) el único DatabaseManager y abre la conexión
DatabaseManager.getInstance().connect();
```

Si en el futuro cualquier otro módulo necesita saber si la DB está activa, basta con:

```js
const db = DatabaseManager.getInstance();
if (db.isConnected()) { /* ... */ }
```

Llamar `getInstance()` varias veces **no crea objetos nuevos**: `DatabaseManager._instance` ya tiene valor desde la primera llamada en `index.js`, por lo que todas las referencias apuntan al mismo objeto en memoria.

---

### Builder — `ReportBuilder`

**Archivo:** [`urbanetperu/backend/builders/ReportBuilder.js`](urbanetperu/backend/builders/ReportBuilder.js)

#### ¿Por qué aquí?

El modelo `Report` tiene 11 campos: 3 obligatorios (title, description, location), 3 opcionales simples (category, priority, images) y 4 de identidad que vienen del token JWT y del body (userId, userName, userEmail, latitude/longitude). Antes del Builder, `routes/reports.js` armaba el objeto a mano mezclando validación, valores por defecto y asignación en el mismo bloque. Eso viola el principio de responsabilidad única y hace la ruta difícil de leer. El Builder separa esas tres responsabilidades.

#### Estructura

| Elemento | Rol |
|---|---|
| `constructor(userId, userName, userEmail)` | Inicializa `_data` con los campos de identidad y los valores por defecto de los opcionales |
| `setTitle / setDescription / setLocation` | Asignan los campos obligatorios; devuelven `this` para encadenar |
| `setCategory / setPriority / setImages` | Asignan los opcionales; si llegan `undefined` aplican el default |
| `build()` | Valida que los 3 obligatorios estén presentes y devuelve una copia plana (`{...this._data}`) lista para `Report.create()` |

Cada setter devuelve `this`, lo que habilita la **fluent interface** (llamadas encadenadas).

#### Código

```js
class ReportBuilder {
  constructor(userId, userName, userEmail) {
    // Campos de identidad + defaults para los opcionales
    this._data = {
      userId, userName, userEmail,
      category: 'bache',      // default del enum del modelo
      status: 'reportado',    // estado inicial siempre igual
      priority: 'media',      // default del enum del modelo
      images: []
    };
  }

  setTitle(title)      { this._data.title = title; return this; }
  setDescription(desc) { this._data.description = desc; return this; }

  setLocation(loc, lat, lng) {
    this._data.location = loc;
    if (lat !== undefined) this._data.latitude = lat;   // GPS es opcional
    if (lng !== undefined) this._data.longitude = lng;
    return this;
  }

  setCategory(cat)  { this._data.category = cat || 'bache'; return this; }
  setPriority(pri)  { this._data.priority = pri || 'media'; return this; }
  setImages(imgs)   { this._data.images   = imgs || [];     return this; }

  build() {
    // Validación centralizada: si falla lanza Error → el handler devuelve 400
    if (!this._data.title || !this._data.description || !this._data.location) {
      throw new Error('Título, descripción y ubicación son obligatorios');
    }
    return { ...this._data };   // copia plana, no expone _data internamente
  }
}
```

#### Uso en el proyecto

En [`routes/reports.js`](urbanetperu/backend/routes/reports.js), el endpoint `POST /api/reports` reemplazó el objeto literal por la cadena de Builder:

```js
// Antes: objeto literal con lógica de validación y defaults mezclada en la ruta
// Ahora: construcción delegada al Builder, la ruta solo orquesta

const reportData = new ReportBuilder(req.user.userId, req.body.userName, req.body.userEmail)
  .setTitle(title)
  .setDescription(description)
  .setLocation(location, latitude, longitude)  // lat/lng opcionales
  .setCategory(category)                       // si viene undefined → 'bache'
  .setPriority(priority)                       // si viene undefined → 'media'
  .setImages(images)                           // si viene undefined → []
  .build();                                    // lanza Error si falta obligatorio

const report = await Report.create(reportData);
```

Si `build()` lanza un error de validación, el `catch` del handler lo detecta por el mensaje y responde con HTTP 400 en lugar de 500:

```js
} catch (error) {
  if (error.message.includes('obligatorios')) {
    return res.status(400).json({ message: error.message });
  }
  res.status(500).json({ message: 'Error al crear el reporte' });
}
```

De este modo la ruta queda limpia de lógica de construcción y la lógica de validación vive en un solo lugar: el Builder.
