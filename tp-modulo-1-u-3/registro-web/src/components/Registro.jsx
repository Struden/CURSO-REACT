import React from "react";
import "./Registro.css";

const Registro = () => {
  return (
    <div className="registro-container">
      <h1 className="text-center text-primary">Bienvenido a mi Registro</h1>
      <form className="registro-form">
        <div className="input-group mb-3">
          <label htmlFor="nombre" className="input-group-text text-dark text-wrap">Nombre:</label>
          <input type="text" className="form-control text-secondary" id="nombre" placeholder="Ingresa tu nombre" />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="apellido" className="input-group-text text-dark text-wrap">Apellido:</label>
          <input type="text" id="apellido" className="form-control v" placeholder="Ingresa tu apellido" />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="email" className="input-group-text text-dark text-wrap">Email:</label>
          <input type="email" id="email" className="form-control text-secondary" placeholder="Ingresa tu email" />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="telefono" className="input-group-text text-dark text-wrap">Teléfono:</label>
          <input type="tel" id="telefono" className="form-control text-secondary" placeholder="Ingresa tu teléfono" />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="password" className="input-group-text text-dark text-wrap"> Contraseña:</label>
          <input type="password" id="password" className="form-control text-secondary" placeholder="Ingresa tu contraseña" />
        </div>
        <div className="input-group mb-3">
          <label htmlFor="confirmarPassword" className="input-group-text text-dark text-wrap">Confirmar Contraseña:</label>
          <input type="password" id="confirmarPassword"  className="form-control text-secondary"placeholder="Confirma tu contraseña" />
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Registro;
