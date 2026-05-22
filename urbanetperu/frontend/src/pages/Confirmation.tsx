import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SeverityBadge from "../components/common/SeverityBadge";
import VisualMap from "../components/common/VisualMap";
import {
  getLastReport,
  type PotholeReport
} from "../utils/reportStorage";

function getSeverityMessage(severity: string) {
  if (severity === "Crítico") {
    return "Este reporte será priorizado por su nivel de gravedad.";
  }

  if (severity === "Moderado") {
    return "Este reporte será revisado para programación de atención.";
  }

  if (severity === "Leve") {
    return "El reporte fue registrado para seguimiento municipal.";
  }

  return "El reporte fue recibido y podrá ser revisado manualmente.";
}

function Confirmation() {
  const navigate = useNavigate();
  const [report, setReport] = useState<PotholeReport | null>(null);

  useEffect(() => {
    const lastReport = getLastReport();

    if (!lastReport) {
      navigate("/inicio");
      return;
    }

    setReport(lastReport);
  }, [navigate]);

  if (!report) {
    return null;
  }

  return (
    <main className="confirmation-page">
      <section className="confirmation-card">
        <div className="confirmation-header">
          <div className="confirmation-icon">✓</div>

          <h1>Reporte enviado correctamente</h1>

          <p>
            ID del reporte: <strong>{report.id}</strong>
          </p>
        </div>

        <div className="confirmation-body">
          <section className="confirmation-info">
            <div className="info-block">
              <span>Gravedad detectada por IA</span>
              <SeverityBadge text={report.severity} />
            </div>

            <div className="info-block">
              <span>Nivel de confianza</span>
              <strong>{Math.round(report.confidence * 100)}%</strong>
            </div>

            <div className="info-block">
              <span>Estado inicial</span>
              <SeverityBadge text={report.status} />
            </div>

            <div className="info-block">
              <span>Dirección aproximada</span>
              <strong>{report.address}</strong>
            </div>

            <div className="confirmation-message">
              {getSeverityMessage(report.severity)}
            </div>
          </section>

          <section className="confirmation-media">
            <img src={report.imageUrl} alt="Evidencia del reporte" />

            <VisualMap
              readonly
              selectedPoint={{
                x: report.coords.x,
                y: report.coords.y
              }}
              height="220px"
            />
          </section>
        </div>

        <div className="confirmation-actions">
          <button
            type="button"
            className="secondary-action"
            onClick={() => navigate("/inicio")}
          >
            Volver al menú principal
          </button>

          <button
            type="button"
            className="secondary-action"
            onClick={() => navigate("/mis-reportes")}
          >
            Ver historial
          </button>

          <button
            type="button"
            className="primary-action"
            onClick={() => navigate("/reportar-baches")}
          >
            Realizar otro reporte
          </button>
        </div>
      </section>
    </main>
  );
}

export default Confirmation;