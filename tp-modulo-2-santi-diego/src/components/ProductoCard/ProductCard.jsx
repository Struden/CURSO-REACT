import { Link } from 'react-router-dom';

const ProductCard = ({producto}) => {
    return (
        <div className="col-sm-3 mb-3">
            <div className="card" style={{width: "18 rem" }}>
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

                <div className="card-body">
                    <p className="card-text">{producto.title}</p>
                    <p className="card-text"> <span className="badge text-bg-danger">Precio: ${producto.price}</span></p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-primary m-3" to="/detalle-producto" state={producto}>
                            Ver detalles del producto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductCard }