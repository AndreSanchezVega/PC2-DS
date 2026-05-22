import { assets } from "../config/assets";
import ImageSlot from "../components/common/ImageSlot";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiRequest } from "../utils/api";
import { saveSession, type SessionUser } from "../utils/authStorage";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Ingresa tu correo y contraseña.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await apiRequest<{ user: SessionUser; token: string }>("/api/auth/login", {
        method: "POST",
        body: { email, password }
      });

      saveSession(response.token, response.user);
      navigate("/inicio");
    } catch (apiError) {
      const message = apiError instanceof Error ? apiError.message : "No se pudo iniciar sesión.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section
        className="login-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11,17,32,0.82), rgba(11,17,32,0.55)), url(${assets.heroImage})`
        }}
      >
        <div className="login-hero__content">
          <h1>UrbanetPeru</h1>
          <p>
            Conectando a los ciudadanos con su municipalidad para construir
            ciudades más inteligentes y seguras.
          </p>
        </div>
      </section>

      <section className="login-auth">
        <div className="login-card">
          <div className="login-brand">
            <ImageSlot
              src={assets.appLogo}
              alt="Logo UrbanetPeru"
              fallbackText="UP"
              className="login-brand__logo"
            />
            <strong>
              Urbanet<span>Peru</span>
            </strong>
          </div>

          <div className="login-title">
            <h2>Bienvenido</h2>
            <p>Plataforma inteligente de reporte ciudadano</p>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label>Tipo de usuario</label>
              <div className="user-type-selector">
                <button type="button" className="is-active">
                  Vecino
                </button>
                <button type="button">
                  Municipal
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button
              type="button"
              className="login-submit"
              onClick={handleLogin}
            >
              {loading ? "Ingresando..." : "Ingresar al Sistema"}
            </button>

            {error && <p className="auth-error">{error}</p>}

            <button
              type="button"
              className="login-link"
              onClick={() => navigate("/forgot-password")}
            >
              ¿Olvidaste tu contraseña?
            </button>

            <div className="login-divider">
              <span></span>
              <small>o</small>
              <span></span>
            </div>

            <p className="register-text">
              ¿No tienes cuenta?{" "}
              <button
                type="button"
                onClick={() => navigate("/registro")}
              >
                Crea una nueva aquí
              </button>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;