import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { db , auth} from "../config/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../context/UsuarioLogueado";

const Registrar = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Crear usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Guarda los datos en Firestore
      await addDoc(collection(db, "usuarios"), {
        uid: user.uid,
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        createdAt: new Date()
      });

      setSuccess("Usuario registrado con éxito.");
      setFormData({ nombre: "", apellido: "", email: "", password: "" });
    } catch (err) {
      setError("Error al registrar usuario: " + err.message);
    }
  };

  return (
    <Layout >
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card shadow-sm">
                <div className="card-header bg-primary text-white text-center">
                <h4>Registro</h4>
                </div>
                <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                    </div>

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
                        Registrarse
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </Layout>
  );
}


export default Registrar