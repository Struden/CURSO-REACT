import React, {useState, useEffect} from "react";
import Layout from "../components/Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { db } from "../config/Firebase";
import { doc, getDoc } from "firebase/firestore";

const DetalleProducto = () => {
    const { id } = useParams();    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const obtenerProducto = async () => {
            try{
              const docRef = doc(db, "productos", id);
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                setProducto({ id: docSnap.id, ...docSnap.data() });
              } else {
                console.error("No se encontró el producto");
              }
            }catch(error){
              console.error("Error al obtener el producto:", error);
            }finally{
              setLoading(false);
            }
          };

        obtenerProducto();
    }, [id]);

    if(loading){
        return (
            <Layout>
                <div className="container mt-5">
                    <div className="row">
                        <Link to={'/'} className="link-offset-2 link-underline link-underline-opacity-0 text-secondary"><small><i className="bi bi-arrow-bar-left"></i>Atras</small></Link>
                    </div>
                    <div className="row">
                        <h2 className="text-center text-secondary">Cargando producto...</h2>
                    </div>
                </div>
            </Layout>
        );
    }
  
    if (!producto) {
      return (
        <Layout>
            <div className="container mt-5">
                <div className="row">
                    <Link to={'/'} className="link-offset-2 link-underline link-underline-opacity-0 text-secondary"><small><i className="bi bi-arrow-bar-left"></i>Atras</small></Link>
                </div>
                <div className="row">
                    <h2 className="text-center text-danger">Producto no encontrado</h2>
                </div>
            </div>
        </Layout>
      );
    }

    return(
        <Layout >
            <div className="container mt-5">
                <div className="row">
                    <Link to={'/'} className="link-offset-2 link-underline link-underline-opacity-0 text-secondary"><small><i className="bi bi-arrow-bar-left"></i>Atras</small></Link>
                </div>

                <div className="row">
                    <div className="card shadow-sm p-4">
                    <h2>{producto.nombre}</h2>
                    <h5 className="text-muted">SKU: {producto.sku}</h5>
                    <p>{producto.descripcion}</p>
                    <h4 className="fw-bold">Precio: ${producto.precio}</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DetalleProducto