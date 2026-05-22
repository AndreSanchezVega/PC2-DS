import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlot from "../components/common/ImageSlot";
import ReportDetailModal from "../components/common/ReportDetailModal";
import SeverityBadge from "../components/common/SeverityBadge";
import { assets } from "../config/assets";
import {
  getStoredReports,
  type PotholeReport
} from "../utils/reportStorage";
import { clearSession, getSessionUser } from "../utils/authStorage";

function formatShortDate(date: string) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date(date));
}

function MyReports() {
  const navigate = useNavigate();
  const sessionUser = getSessionUser();
  const userName = sessionUser?.name || "Usuario";

  const [reports, setReports] = useState<PotholeReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<PotholeReport | null>(null);

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  useEffect(() => {
    const storedReports = getStoredReports();
    setReports(storedReports);
  }, []);

  return (
    <main className="my-reports-page">
      <header className="my-reports-header">
        <div className="my-reports-header__brand">
          <ImageSlot
            src={assets.appLogo}
            alt="UrbanetPeru"
            fallbackText="UP"
            className="my-reports-header__logo"
          />

          <strong>
            Urbanet<span>Peru</span>
          </strong>
        </div>

        <div className="my-reports-header__actions">
          <span>{userName}</span>

          <button type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="my-reports-content">
        <button
          type="button"
          className="back-to-home"
          onClick={() => navigate("/inicio")}
        >
          ← Volver al menú principal
        </button>

        <section className="my-reports-title">
          <div>
            <p>Portal ciudadano</p>
            <h1>Mis reportes</h1>
            <span>Historial de incidencias enviadas a UrbanetPeru.</span>
          </div>

          <button
            type="button"
            className="go-home-button"
            onClick={() => navigate("/inicio")}
          >
            Ir al menú principal
          </button>
        </section>

        {reports.length === 0 ? (
          <section className="empty-reports">
            <div className="empty-reports__icon">UP</div>

            <h2>No tienes reportes registrados aún</h2>

            <p>
              Cuando envíes un reporte de bache, aparecerá aquí con su estado,
              gravedad y fecha de ingreso.
            </p>

            <button type="button" onClick={() => navigate("/inicio")}>
              Crear mi primer reporte
            </button>
          </section>
        ) : (
          <section className="reports-list-panel">
            <div className="reports-list-panel__summary">
              <div>
                <span>Total de reportes</span>
                <strong>{reports.length}</strong>
              </div>

              <div>
                <span>Recibidos</span>
                <strong>
                  {reports.filter((report) => report.status === "Recibido").length}
                </strong>
              </div>

              <div>
                <span>Críticos</span>
                <strong>
                  {reports.filter((report) => report.severity === "Crítico").length}
                </strong>
              </div>
            </div>

            <div className="reports-list">
              {reports.map((report) => (
                <article key={report.id} className="citizen-report-card">
                  <img src={report.imageUrl} alt="Reporte ciudadano" />

                  <div className="citizen-report-card__main">
                    <h2>{report.id}</h2>

                    <p>{report.address}</p>

                    <span>{formatShortDate(report.createdAt)}</span>
                  </div>

                  <div className="citizen-report-card__badges">
                    <SeverityBadge text={report.severity} />
                    <SeverityBadge text={report.status} />
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedReport(report)}
                  >
                    Ver detalle
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}
      </section>

      {selectedReport && (
        <ReportDetailModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </main>
  );
}

export default MyReports;