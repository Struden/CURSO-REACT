import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Bootstrap.scss';
import '../Layout/Layout.scss';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Layout = ({children}) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" href="/">
                        TP MODULO 2
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    PRODUCTOS
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="dropdown dropstart">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="bi bi-person-circle"></i>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="dropdown-item" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/registro">
                                            Registro
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            </header>
            <main className="flex-grow-1">
                {children}
            </main>
            <footer className="">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top me-3">            
                    <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary">Santi Diego</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            </div>
    );
}

export { Layout }