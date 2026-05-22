import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlot from "../components/common/ImageSlot";
import VisualMap from "../components/common/VisualMap";
import { assets } from "../config/assets";
import {
  generateReportId,
  getRandomSeverity,
  setPendingReport,
  type PotholeReport,
  type ReportCoords
} from "../utils/reportStorage";
import { apiRequest } from "../utils/api";
import { getSessionUser, getToken } from "../utils/authStorage";

type FormErrors = {
  image?: string;
  location?: string;
};

function ReportPothole() {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPoint, setSelectedPoint] = useState<{ x: number; y: number } | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];

    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        image: "Solo se permiten imágenes JPG o PNG."
      }));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(String(reader.result));
      setErrors((prev) => ({
        ...prev,
        image: undefined
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleLocationSelect = (point: { x: number; y: number }) => {
    setSelectedPoint(point);
    setErrors((prev) => ({
      ...prev,
      location: undefined
    }));
  };

  const handleUseCurrentLocation = () => {
    setSelectedPoint({
      x: 45,
      y: 52
    });

    setErrors((prev) => ({
      ...prev,
      location: undefined
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {};

    if (!imagePreview) {
      newErrors.image = "La foto del bache es obligatoria.";
    }

    if (!selectedPoint) {
      newErrors.location = "Debes seleccionar la ubicación del bache.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const token = getToken();
    const user = getSessionUser();

    if (!token || !user) {
      setErrors((prev) => ({
        ...prev,
        image: "Tu sesión expiró. Inicia sesión nuevamente para registrar el reporte."
      }));
      return;
    }

    const aiResult = getRandomSeverity();

    const coords: ReportCoords = {
      x: selectedPoint!.x,
      y: selectedPoint!.y,
      lat: -12.1644 + selectedPoint!.y / 10000,
      lng: -76.9631 + selectedPoint!.x / 10000
    };

    const report: PotholeReport = {
      id: generateReportId(),
      type: "Bache",
      description,
      imageUrl: imagePreview,
      address: "Av. Próceres 450, San Juan de Miraflores, Lima",
      distrito: "San Juan de Miraflores",
      coords,
      severity: aiResult.severity,
      confidence: aiResult.confidence,
      status: "Recibido",
      createdAt: new Date().toISOString()
    };

    try {
      setSubmitting(true);

      await apiRequest("/api/reports", {
        method: "POST",
        token,
        body: {
          title: "Bache reportado por ciudadano",
          description: description || "Sin descripción",
          location: report.address,
          latitude: report.coords.lat,
          longitude: report.coords.lng,
          category: "bache",
          priority: aiResult.severity === "Crítico" ? "alta" : "media",
          images: [report.imageUrl],
          userName: user.name,
          userEmail: user.email
        }
      });

      setPendingReport(report);
      navigate("/procesando");
    } catch (apiError) {
      setErrors((prev) => ({
        ...prev,
        image: apiError instanceof Error ? apiError.message : "No se pudo registrar el reporte."
      }));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="report-page">
      <header className="report-header">
        <div className="report-header__content">
          <button
            type="button"
            className="report-back"
            onClick={() => navigate("/inicio")}
          >
            ← Volver al menú principal
          </button>

          <div className="report-header__brand">
            <ImageSlot
              src={assets.appLogo}
              alt="UrbanetPeru"
              fallbackText="UP"
              className="report-header__logo"
            />
            <strong>
              Urbanet<span>Peru</span>
            </strong>
          </div>
        </div>
      </header>

      <section className="report-content">
        <div className="report-title">
          <p className="report-eyebrow">Reporte ciudadano</p>
          <h1>Reportar bache</h1>
          <p>
            Adjunta una foto clara del problema y selecciona su ubicación para
            que la municipalidad pueda evaluarlo.
          </p>
        </div>

        <form className="report-form" onSubmit={handleSubmit}>
          <section className="report-panel">
            <div className="report-panel__heading">
              <h2>Evidencia del problema</h2>
              <p>La imagen será usada para simular la clasificación automática.</p>
            </div>

            <label className={`photo-uploader ${errors.image ? "has-error" : ""}`}>
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
              />

              {imagePreview ? (
                <img src={imagePreview} alt="Vista previa del bache" />
              ) : (
                <div className="photo-uploader__empty">
                  <span>Subir foto</span>
                  <strong>Tomar foto o subir imagen</strong>
                  <small>Formatos permitidos: JPG, JPEG o PNG</small>
                </div>
              )}
            </label>

            {errors.image && <p className="report-error">{errors.image}</p>}

            <div className="form-group">
              <label htmlFor="description">Descripción opcional</label>
              <textarea
                id="description"
                maxLength={500}
                rows={5}
                placeholder="Ejemplo: El bache está frente a una zona escolar y dificulta el tránsito."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
              <small className="character-counter">
                {description.length}/500 caracteres
              </small>
            </div>
          </section>

          <section className="report-panel">
            <div className="report-panel__heading">
              <h2>Ubicación del bache</h2>
              <p>Selecciona un punto en el mapa o usa una ubicación simulada.</p>
            </div>

            <button
              type="button"
              className="location-button"
              onClick={handleUseCurrentLocation}
            >
              Usar mi ubicación actual
            </button>

            <VisualMap
              selectedPoint={selectedPoint}
              onSelectPoint={handleLocationSelect}
              height="370px"
            />

            {errors.location && <p className="report-error">{errors.location}</p>}

            {selectedPoint && (
              <div className="detected-address">
                <span>Dirección aproximada detectada</span>
                <strong>Av. Próceres 450, San Juan de Miraflores, Lima</strong>
              </div>
            )}

            <button type="submit" className="report-submit">
              {submitting ? "Enviando..." : "Enviar reporte"}
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}

export default ReportPothole;