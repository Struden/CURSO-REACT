import { createRoot } from 'react-dom/client'
import React, { StrictMode } from 'react';
import './index.css'
import MenuHeader from './MenuHeader.jsx'
import ProductoPage from './ProductoPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const producto = {
  nombre: "Primer Producto",
  descripcion: "Primer producto creado en el curso REACT de la UTN",
  sku: "PRIM_PROD",
  stock: 10,
  precio: 15000
}

// Un solo punto de entrada para toda la aplicación, no multiples
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <MenuHeader />
      <ProductoPage producto={producto} />
    </div>
  </StrictMode>
);