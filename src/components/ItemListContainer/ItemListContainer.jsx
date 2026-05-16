import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'

export const ItemListContainer = () => {

const [productos, setProductos] = useState([]);
const [error, setError] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
    fetch('/data/productos.json')
    .then((respuesta) => {
    if (!respuesta.ok) {
        throw new Error('No se pudo cargar los productos.');
    }
        return respuesta.json();
    })
    .then((datos) => {
        setProductos(datos);
    })
    .catch((error) => {
        setError(error.message);
    })
    .finally(() => {
        setCargando(false);
    });
}, []);

if (cargando) {
return <p>Cargando productos, por favor espere...</p>;
console.log('')
}

if (error) {
return <p>Error: {error}</p>;
}

return (
    <div>
        <h2>PRODUCTOS</h2>
        <div  id='productos'>
            <ItemList productos={productos}/>
        </div>
    </div>
);
}