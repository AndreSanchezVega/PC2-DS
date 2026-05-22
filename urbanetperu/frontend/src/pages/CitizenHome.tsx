import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../config/assets";
import { REPORT_TYPES, type ReportType } from "../data/reportTypes";
import ImageSlot from "../components/common/ImageSlot";
import { clearSession, getSessionUser } from "../utils/authStorage";

function CitizenHome() {
  const navigate = useNavigate();
  const [toast, setToast] = useState("");
  const sessionUser = getSessionUser();
  const userName = sessionUser?.name || "Usuario";

  const showMessage = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  const handleReportClick = (type: ReportType) => {
    if (type.active) {
      navigate("/reportar-baches");
      return;
    }

    showMessage("Próximamente disponible. Esta funcionalidad estará activa en una siguiente versión.");
  };

  return (
    <main className="citizen-page">
      <header className="citizen-header">
        <div className="citizen-header__brand">
          <ImageSlot
            src={assets.appLogo}
            alt="Logo UrbanetPeru"
            fallbackText="UP"
            className="citizen-header__logo"
          />

          <strong>
            Urbanet<span>Peru</span>
          </strong>
        </div>

        <div className="citizen-header__actions">
          <span className="citizen-user">{userName}</span>

          <button
            type="button"
            className="citizen-logout"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <section className="citizen-content">
        <section className="citizen-hero">
          <div className="citizen-hero__text">
            <p className="citizen-eyebrow">Portal ciudadano</p>

            <h1>
              Hola, <span>{userName}</span>
            </h1>

            <p>
              Tu aporte geolocalizado ayuda a que las cuadrillas municipales
              actúen con mayor eficacia. ¿Qué problema deseas reportar hoy?
            </p>
          </div>

          <div className="citizen-hero__panel">
            <span>Reporte ciudadano</span>
            <strong>MVP Baches</strong>
            <small>Versión inicial de UrbanetPeru</small>
          </div>
        </section>

        <section className="report-section">
          <div className="section-heading">
            <div>
              <h2>Selecciona el tipo de reporte</h2>
              <p>
                Por ahora, solo el reporte de baches está disponible para el MVP.
              </p>
            </div>
          </div>

          <div className="report-grid">
            {REPORT_TYPES.map((type) => {
              const assetInfo = assets.reportTypes[type.iconKey];

              return (
                <article
                  key={type.id}
                  className={`report-card ${type.active ? "is-active" : "is-disabled"}`}
                  onClick={() => handleReportClick(type)}
                >
                  <div className="report-card__background">
                    <ImageSlot
                      src={assetInfo?.background}
                      alt=""
                      fallbackText=""
                      className="report-card__bg-image"
                    />
                    <div className="report-card__overlay" />
                  </div>

                  <div className="report-card__content">
                    <div className="report-card__top">
                      <ImageSlot
                        src={assetInfo?.icon}
                        alt={type.title}
                        fallbackText={assetInfo?.fallback}
                        className="report-card__icon"
                      />

                      {!type.active && (
                        <span className="report-card__badge">
                          Próximamente
                        </span>
                      )}
                    </div>

                    <div className="report-card__body">
                      <h3>{type.title}</h3>
                      <p>{type.description}</p>
                    </div>

                    {type.active && (
                      <button type="button" className="report-card__button">
                        Iniciar reporte
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="citizen-history-link">
          <button
            type="button"
            onClick={() => navigate("/mis-reportes")}
          >
            Revisar historial de mis reportes
          </button>
        </div>
      </section>

      {toast && (
        <div className="citizen-toast">
          {toast}
        </div>
      )}
    </main>
  );
}

export default CitizenHome;