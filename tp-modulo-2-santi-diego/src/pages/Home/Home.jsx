import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";
import { ProductCard } from "../../components/ProductoCard/ProductCard";
import { fetchingData } from "../../services/productosApi";

const Home = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadData, setLoadData] = useState(false);

    const getData = async () => {
        try{
            setLoading(true);
            setLoadData(false);
            const productosData = await fetchingData();
            setProductos(productosData);
            setLoadData(true);
        } catch(error) {
            console.error(error);
            setLoadData(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect( () => {
        getData();
    }, []);

    return(
        <Layout>            
            {loading && <Loader titulo = 'Cardango Productos...'></Loader>}
            {loadData && productos.length > 0 && 
                <div className="container">
                    <h1 className="my-4 text-center">Productos</h1>
                    <div className="row">
                        {
                            productos.map((producto) => {
                                return (                        
                                    <ProductCard producto={producto} key={producto.id}/>
                                )
                            }
                        )}
                    </div>
                </div>
            }
        </Layout>
    );

}

export default Home