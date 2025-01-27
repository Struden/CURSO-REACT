import React from "react";
import './TarjetaInfo.css'

const TarjetaInfo = ({titulo, descripcion, url_imagen, url_link}) =>{
    return(
        <div className="tarjeta-info">
            <img src={url_imagen} alt={titulo} className="tarjeta-imagen" />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            {url_link && (
                <a href={url_link} target="_blank"  className="boton">
                Leer más
                </a>
            )}
        </div>
    )
}

export {TarjetaInfo}