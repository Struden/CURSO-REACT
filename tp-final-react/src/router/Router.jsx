import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "../context/UsuarioLogueado";
import PrivateRoute from '../pages/PrivateRoute';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Registrar = React.lazy(() => import('../pages/Registrar'));
const DetalleProducto = React.lazy(() => import('../pages/DetalleProducto'));
const AltaProducto = React.lazy(() => import('../pages/AltaProducto'));

const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={<div>Cargando página...</div>}>
                    <Routes>
                        <Route path="/" element = { <PrivateRoute><Home/></PrivateRoute> } />
                        <Route path="/login" element = { <Login/> } />
                        <Route path="/registrar-usuario" element = { <Registrar/> } />
                        <Route path="/detalle-producto/:id" element = {  <PrivateRoute><DetalleProducto/></PrivateRoute> } />
                        <Route path="/alta-producto" element = {  <PrivateRoute><AltaProducto/></PrivateRoute> } />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    );
}

export { Router }