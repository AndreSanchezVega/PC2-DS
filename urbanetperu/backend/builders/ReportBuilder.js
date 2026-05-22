class ReportBuilder {
  constructor(userId, userName, userEmail) {
    this._data = {
      userId,
      userName,
      userEmail,
      category: 'bache',
      status: 'reportado',
      priority: 'media',
      images: []
    };
  }

  setTitle(title) {
    this._data.title = title;
    return this;
  }

  setDescription(description) {
    this._data.description = description;
    return this;
  }

  setLocation(location, latitude, longitude) {
    this._data.location = location;
    if (latitude !== undefined) this._data.latitude = latitude;
    if (longitude !== undefined) this._data.longitude = longitude;
    return this;
  }

  setCategory(category) {
    this._data.category = category || 'bache';
    return this;
  }

  setPriority(priority) {
    this._data.priority = priority || 'media';
    return this;
  }

  setImages(images) {
    this._data.images = images || [];
    return this;
  }

  build() {
    if (!this._data.title || !this._data.description || !this._data.location) {
      throw new Error('Título, descripción y ubicación son obligatorios');
    }
    return { ...this._data };
  }
}

export default ReportBuilder;
