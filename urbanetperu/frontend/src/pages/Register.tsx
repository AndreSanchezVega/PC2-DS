import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../config/assets";
import ImageSlot from "../components/common/ImageSlot";
import { apiRequest } from "../utils/api";
import { saveSession, type SessionUser } from "../utils/authStorage";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Completa todos los campos.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    if (form.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      setLoading(true);

      const response = await apiRequest<{ user: SessionUser; token: string }>("/api/auth/register", {
        method: "POST",
        body: {
          name: form.name,
          email: form.email,
          password: form.password
        }
      });

      saveSession(response.token, response.user);
      navigate("/inicio");
    } catch (apiError) {
      const message = apiError instanceof Error ? apiError.message : "No se pudo registrar el usuario.";
      setError(message);
    } finally {
      setLoading(false);
    }
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
          <h1>Crear cuenta ciudadana</h1>
          <p>Registra tus datos para reportar incidencias urbanas.</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              name="name"
              type="text"
              placeholder="Juan Pérez"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              name="email"
              type="email"
              placeholder="ejemplo@correo.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirmar contraseña</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="button" className="auth-submit" onClick={handleSubmit}>
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>

          <button
            type="button"
            className="auth-secondary"
          >
            Continuar con Google
          </button>

          <p className="auth-footer">
            ¿Ya tienes cuenta?{" "}
            <button type="button" onClick={() => navigate("/login")}>
              Inicia sesión
            </button>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;