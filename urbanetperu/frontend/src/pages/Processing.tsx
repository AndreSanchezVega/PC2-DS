import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPendingReport,
  saveReport
} from "../utils/reportStorage";

function Processing() {
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : `${prev}.`));
    }, 450);

    const timer = window.setTimeout(() => {
      const pendingReport = getPendingReport();

      if (!pendingReport) {
        navigate("/inicio");
        return;
      }

      saveReport(pendingReport);
      navigate("/confirmacion");
    }, 3200);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <main className="processing-page">
      <section className="processing-card">
        <div className="processing-loader" />

        <h1>Analizando reporte{dots}</h1>

        <p>
          Estamos analizando la imagen y registrando tu reporte en el sistema.
        </p>

        <div className="processing-note">
          La clasificación de gravedad será estimada automáticamente de forma
          simulada para este prototipo.
        </div>
      </section>
    </main>
  );
}

export default Processing;