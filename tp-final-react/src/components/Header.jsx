import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/UsuarioLogueado";

const Header = () => {
    const { user, logout } = useAuth();

    return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-ligth">
        <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="fs-5 fw-bold">TP Final React</span>
            </Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                {!user ? (
                <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/registrar-usuario">Registrar</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </>
                ) : (
                <>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/alta-producto">Nuevo Producto</Link>
                    </li>
                    <li className="nav-item">
                    <button className="btn btn-danger" onClick={logout}>Cerrar Sesión</button>
                    </li>
                </>
                )}            
            </ul>
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Header