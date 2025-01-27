import { Layout } from "../../components/Layout/Layout";
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {

    const location = useLocation();
    const producto = location.state;

    const handlerClick = () => {
        alert("Presionaste comprar!");
    }

    return(
        <Layout>
            <div className="container my-4">
                <div className="row align-items-center">                
                    <div className="col-md-4 text-center">
                    {
                        <div id={`carrousel-${producto.id}`} className="carousel slide">
                        <div className="carousel-inner">
                            { 
                                producto.images.map((imagen, index) => {
                                    return (
                                    <div
                                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        key={index}
                                    >
                                        <img src={imagen} className="d-block w-100" alt={producto.title} />
                                    </div>
                                    );
                                })                                                  
                                }
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target={`#carrousel-${producto.id}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carrousel-${producto.id}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        }
                    </div>

                    <div className="col-md-8">
                    <h2 className="fw-bold">{producto.title}</h2>
                    <p className="text-muted">
                        {producto.description}
                    </p>
                    <h4 className="text-primary">$99.99</h4>
                    <button className="btn btn-success mt-3" onClick={handlerClick}>Comprar</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetails