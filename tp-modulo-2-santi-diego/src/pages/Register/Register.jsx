import { Layout } from "../../components/Layout/Layout";

const Register = () => {
    return(
        <Layout>
            <div className="d-flex justify-content-center align-items-center vh-80 my-3">
                <div className="card p-4 shadow-sm" style={{width: "100%" , maxWidth: "500px"}}>
                <h2 className="text-center mb-4">Crear Cuenta</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre completo" required/>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="usuario@ejemplo.com" required/>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña" required/>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Repita su contraseña" required/>
                    </div>

                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                    </div>

                    <div className="text-center mt-3">
                    <p>¿Ya tienes una cuenta? <a href="#" className="text-decoration-none">Inicia sesión aquí</a></p>
                    </div>
                </form>
                </div>
            </div>
        </Layout>
    );
}

export default Register