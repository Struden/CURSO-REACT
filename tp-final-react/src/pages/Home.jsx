import React, { useState, useEffect} from "react";
import Layout from "../components/Layout/Layout";
import { CardProducto } from "../components/CardProducto";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [productos, setProductos] = useState();
    const [loading, setLoading] = useState(true);   

    useEffect(() => {  
        const obtenerProductos = async () => {
            try{
                const queryFirebase = await getDocs(collection(db, "productos"));
                const productosLista = queryFirebase.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data(),
                }));
                setProductos(productosLista);
            }catch(error){
                console.error("Error al obtener productos:", error);
            }finally{
                setLoading(false);
            }
        };

        obtenerProductos();
      }, []);

    return(
        <Layout>
            <div className="container mt-5">
            <h2 className="text-center mb-4">Listado de Productos</h2>
                <div className="row">
                {loading?(
                    <div className="text-center mt-5">Cargando productos...</div>
                ):(
                    productos.length === 0 ?(
                        <p className="text-center text-warning">No se encontraron productos!</p>
                        ):(
                            productos.map((producto) => (
                                <CardProducto
                                    key={producto.id} 
                                    id={producto.id} 
                                    nombre={producto.nombre} 
                                    sku={producto.sku} 
                                    precio={producto.precio} 
                                    descripcion={producto.descripcion}
                                />
                            ))
                        )
                )}
                </div>
            </div>
        </Layout>
    )
}

export default Home