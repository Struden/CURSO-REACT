import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { db } from "../config/Firebase";
import { collection, addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

const AltaProducto = () =>{
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        sku: "",
        descripcion: "",
      });
      const [productos, setProductos] = useState([]);
      const [mensaje, setMensaje] = useState("");
      const [error, setError] = useState("");

    //Cargar productos al montar el componente
    useEffect(() => {
        obtenerProductos();
    }, []);

    //Función para obtener los productos
    const obtenerProductos = async () => {
        try{
          const queryFirebase = await getDocs(collection(db, "productos"));
          const productosLista = queryFirebase.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data(),
          }));
          setProductos(productosLista);
        }catch(error){
          setError("Error al obtener productos: " + error.message);
        }
      };

    //Función para eliminar un producto
    const handleEliminar = async (id) => {
        try{
            await deleteDoc(doc(db, "productos", id));
            setMensaje("Producto eliminado correctamente.");
            obtenerProductos();
        }catch(error){
            setError("Error al eliminar producto: " + error.message);
        }
    };
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");

    if(!formData.nombre || !formData.precio || !formData.sku || !formData.descripcion){
        setError("Todos los campos son obligatorios.");
        return;
    }

    try{
        await addDoc(collection(db, "productos"), {
        nombre: formData.nombre,
        precio: parseFloat(formData.precio),
        sku: formData.sku,
        descripcion: formData.descripcion,
        });

        setMensaje("Producto agregado con éxito.");
        setFormData({ nombre: "", precio: "", sku: "", descripcion: "" });
        obtenerProductos();
    }catch(err) {
        setError("Error al agregar producto: " + err.message);
    }
    };

    return(
        <Layout>
            <div className="container mt-5">
            <h2 className="text-center mb-4">Cargar Producto</h2>
            <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm">
                <div className="card-body">
                    {mensaje && <div className="alert alert-success">{mensaje}</div>}
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" name="precio" value={formData.precio} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">SKU</label>
                        <input type="text" className="form-control" name="sku" value={formData.sku} onChange={handleChange} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descripción</label>
                        <textarea className="form-control" name="descripcion" value={formData.descripcion} onChange={handleChange} required />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Guardar Producto</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>

            <h3 className="text-center mt-5">Lista de Productos</h3>
            <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                <tr>
                    <th>Nombre</th>
                    <th>SKU</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {productos.length === 0 ? (
                    <tr>
                    <td colSpan="5" className="text-center">No hay productos disponibles.</td>
                    </tr>
                ) : (
                    productos.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.sku}</td>
                        <td>${producto.precio}</td>
                        <td>{producto.descripcion}</td>
                        <td>
                        <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(producto.id)}>
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
            </div>
        </div>
      </Layout>
    );
}

export default AltaProducto