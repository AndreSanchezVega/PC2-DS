import { useNavigate } from "react-router-dom";
import { assets } from "../config/assets";
import ImageSlot from "../components/common/ImageSlot";

function ResetPasswordSuccess() {
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
          <h1>Contraseña actualizada</h1>
          <p>
            Tu contraseña ha sido actualizada correctamente. Ahora puedes iniciar
            sesión con tus nuevas credenciales.
          </p>
        </div>

        <button
          type="button"
          className="auth-submit"
          onClick={() => navigate("/login")}
        >
          Ir al inicio de sesión
        </button>
      </section>
    </main>
  );
}

export default ResetPasswordSuccess;