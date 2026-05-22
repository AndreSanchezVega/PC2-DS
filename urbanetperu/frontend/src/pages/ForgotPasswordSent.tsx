import { useNavigate } from "react-router-dom";
import { assets } from "../config/assets";
import ImageSlot from "../components/common/ImageSlot";

function ForgotPasswordSent() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-brand">
          <ImageSlot
            src={assets.appLogo}
            alt="Logo UrbanetPeru"
            fallbackText="UP"
            className="auth-brand__logo"
          />
          <strong>
            Urbanet<span>Peru</span>
          </strong>
        </div>

        <div className="auth-title">
          <h1>Revisa tu correo</h1>
          <p>
            Si el correo ingresado está registrado, recibirás instrucciones para
            restablecer tu contraseña.
          </p>
          <p className="auth-note">
            Por seguridad, este proceso puede tardar unos minutos.
          </p>
        </div>

        <div className="auth-actions">
          <button
            type="button"
            className="auth-submit"
            onClick={() => navigate("/login")}
          >
            Volver al inicio de sesión
          </button>

          <button
            type="button"
            className="auth-secondary"
            onClick={() => navigate("/forgot-password")}
          >
            Ingresar otro correo
          </button>
        </div>
      </section>
    </main>
  );
}

export default ForgotPasswordSent;