import { Layout } from "../../components/layout/Layout";

const Login = () => {
    return(
        <Layout>
            <div className="d-flex justify-content-center align-items-center mt-2">
                <div className="card p-4 shadow-sm" style={{width: "100%", maxWidth: "400px"}}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="usuario@ejemplo.com" required/>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="********" required/>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                    </div>
                    <a href="#" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
                    </div>

                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                </form>
                </div>
            </div>
        </Layout>
    );
}

export default Login