import SeverityBadge from "./SeverityBadge";
import VisualMap from "./VisualMap";
import type { PotholeReport } from "../../utils/reportStorage";

type ReportDetailModalProps = {
  report: PotholeReport;
  onClose: () => void;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
}

function ReportDetailModal({ report, onClose }: ReportDetailModalProps) {
  return (
    <div className="report-modal-backdrop" role="dialog" aria-modal="true">
      <section className="report-modal">
        <div className="report-modal__header">
          <div>
            <span>Detalle del reporte</span>
            <h2>{report.id}</h2>
          </div>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="report-modal__body">
          <section className="report-modal__media">
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

          <section className="report-modal__info">
            <div className="detail-row">
              <span>Tipo de incidencia</span>
              <strong>{report.type}</strong>
            </div>

            <div className="detail-row">
              <span>Fecha de ingreso</span>
              <strong>{formatDate(report.createdAt)}</strong>
            </div>

            <div className="detail-row">
              <span>Dirección</span>
              <strong>{report.address}</strong>
            </div>

            <div className="detail-row">
              <span>Distrito</span>
              <strong>{report.distrito}</strong>
            </div>

            <div className="detail-row">
              <span>Nivel de gravedad</span>
              <SeverityBadge text={report.severity} />
            </div>

            <div className="detail-row">
              <span>Estado de gestión</span>
              <SeverityBadge text={report.status} />
            </div>

            <div className="detail-row">
              <span>Confianza IA</span>
              <strong>{Math.round(report.confidence * 100)}%</strong>
            </div>

            <div className="detail-description">
              <span>Descripción enviada</span>
              <p>
                {report.description ||
                  "El ciudadano no proporcionó una descripción adicional para este reporte."}
              </p>
            </div>
          </section>
        </div>

        <div className="report-modal__footer">
          <button type="button" onClick={onClose}>
            Cerrar detalle
          </button>
        </div>
      </section>
    </div>
  );
}

export default ReportDetailModal;