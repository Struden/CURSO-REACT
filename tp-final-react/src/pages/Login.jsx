import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/UsuarioLogueado";

const Login = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/"); // Redirige al home después de iniciar sesión
    } catch (err) {
      setError("Error al iniciar sesión: " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/"); // Redirige después del login con Google
    } catch (err) {
      setError("Error con Google: " + err.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
          <Layout >
          <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-6">
              <div className="card shadow-sm">
                  <div className="card-header bg-primary text-white text-center">
                  <h4>Iniciar Sesión</h4>
                  </div>
                  <div className="card-body">
                  {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit}>
                      {/* Email */}
                      <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                      />
                      </div>

                      <div className="mb-3">
                      <label className="form-label">Contraseña</label>
                      <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                      />
                      </div>

                      <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                          Iniciar Sesión
                      </button>
                      </div>
                  </form>

                  <hr />

                  <div className="d-grid">
                      <button onClick={handleGoogleLogin} className="btn btn-danger">
                      <i className="bi bi-google me-2"></i> Iniciar con Google
                      </button>
                  </div>

                  <p className="mt-3 text-center">
                      ¿No tienes cuenta? <Link  to="/registrar-usuario">Registrate aquí</Link>
                  </p>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </Layout>
  );
}


export default Login