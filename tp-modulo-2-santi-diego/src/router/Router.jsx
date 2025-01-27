import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"


const Home = React.lazy(() => import('../pages/Home/Home'));
const Registro = React.lazy(() => import('../pages/Register/Register'));
const Login = React.lazy(() => import('../pages/Login/Login'));
const ProductDetails = React.lazy(() => import('../pages/ProductDetails/ProductDetails'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Cargando página...</div>}>
                <Routes>
                    <Route path="/" element = { <Home/> } />
                    <Route path="/registro" element = { <Registro/> } />
                    <Route path="/detalle-producto" element = { <ProductDetails/> } />
                    <Route path="/login" element = { <Login /> } />
                </Routes>
            </Suspense>
        </BrowserRouter>

    );


}

export { Router }