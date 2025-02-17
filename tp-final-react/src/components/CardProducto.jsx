import React from "react";
import { Link } from "react-router-dom";

const CardProducto = ({id, nombre, sku, descripcion, precio}) => {
    return(
        <div className="col-md-6 col-lg-3 mb-4" key={id}>
            <div className="card shadow-sm h-100 d-flex flex-column">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">SKU: {sku}</h6>
                <p className="card-text flex-grow-1">{descripcion}</p>
                <p className="fw-bold">Precio: ${precio}</p>
                <Link to={`/detalle-producto/${id}`} className="btn btn-primary mt-auto w-100">
                Ver Detalle
                </Link>
            </div>
            </div>
        </div>
    );
}

export { CardProducto }