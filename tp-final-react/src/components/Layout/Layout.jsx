import React from "react";
import './Layout.scss'
import './Layout.css'
import { AuthProvider } from "../../context/UsuarioLogueado";
import Header from '../Header'
import {Footer} from '../Footer'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = ({ children }) => {
    return (
        <>
         <AuthProvider>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1 d-flex align-items-center justify-content-center">
                    {children}
                </main>
                <Footer />
            </div>
        </AuthProvider>
        </>
    )
}

export default Layout