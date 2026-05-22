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

La clase `DatabaseManager` almacena su única instancia en `DatabaseManager._instance`. Cualquier llamada a `getInstance()` devuelve siempre el mismo objeto. La conexión a MongoDB solo se abre una vez: si `_connected` ya es `true`, el método `connect()` retorna sin hacer nada.

```js
class DatabaseManager {
  constructor() {
    this._connected = false;
  }

  static getInstance() {
    if (!DatabaseManager._instance) {
      DatabaseManager._instance = new DatabaseManager();
    }
    return DatabaseManager._instance;
  }

  async connect() {
    if (this._connected) {
      console.log('MongoDB: reusing existing connection');
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    this._connected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }
}
```

**Uso en el proyecto** ([`index.js`](urbanetperu/backend/index.js)):
```js
DatabaseManager.getInstance().connect();
```

---

### Builder — `ReportBuilder`

**Archivo:** [`urbanetperu/backend/builders/ReportBuilder.js`](urbanetperu/backend/builders/ReportBuilder.js)

`ReportBuilder` construye el objeto de datos de un reporte paso a paso. Los campos opcionales (category, priority, images) tienen valores por defecto en el constructor. El método `build()` valida que los campos obligatorios estén presentes antes de devolver el objeto.

```js
class ReportBuilder {
  constructor(userId, userName, userEmail) {
    this._data = {
      userId, userName, userEmail,
      category: 'bache',
      status: 'reportado',
      priority: 'media',
      images: []
    };
  }

  setTitle(title)       { this._data.title = title; return this; }
  setDescription(desc)  { this._data.description = desc; return this; }
  setLocation(loc, lat, lng) {
    this._data.location = loc;
    if (lat !== undefined) this._data.latitude = lat;
    if (lng !== undefined) this._data.longitude = lng;
    return this;
  }
  setCategory(cat)  { this._data.category = cat || 'bache'; return this; }
  setPriority(pri)  { this._data.priority = pri || 'media'; return this; }
  setImages(imgs)   { this._data.images = imgs || []; return this; }

  build() {
    if (!this._data.title || !this._data.description || !this._data.location) {
      throw new Error('Título, descripción y ubicación son obligatorios');
    }
    return { ...this._data };
  }
}
```

**Uso en el proyecto** ([`routes/reports.js`](urbanetperu/backend/routes/reports.js)):
```js
const reportData = new ReportBuilder(req.user.userId, req.body.userName, req.body.userEmail)
  .setTitle(title)
  .setDescription(description)
  .setLocation(location, latitude, longitude)
  .setCategory(category)
  .setPriority(priority)
  .setImages(images)
  .build();

const report = await Report.create(reportData);
```

La validación de campos obligatorios se traslada del handler al Builder, y la ruta queda limpia de lógica de construcción.
