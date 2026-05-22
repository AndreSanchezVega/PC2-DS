import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../config/assets";
import ImageSlot from "../components/common/ImageSlot";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Ingresa tu correo electrónico.");
      return;
    }

    if (!email.includes("@")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    navigate("/forgot-password/sent");
  };

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
          <h1>Recuperar contraseña</h1>
          <p>
            Ingresa tu correo electrónico y te enviaremos instrucciones para
            restablecer tu contraseña.
          </p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="button" className="auth-submit" onClick={handleSubmit}>
            Enviar instrucciones
          </button>

          <button
            type="button"
            className="auth-secondary"
            onClick={() => navigate("/login")}
          >
            Volver al inicio de sesión
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgotPassword;