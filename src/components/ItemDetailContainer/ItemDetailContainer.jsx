import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import '../ItemListContainer/ItemListContainer.css'

export const ItemDetailContainer = () => {

const { id } = useParams();

const [itemDetail, setItemDetail] = useState(null);
const [error, setError] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
    fetch('/data/productos.json')
    .then((respuesta) => {
    if (!respuesta.ok) {
        throw new Error('No se pudo cargar el productos.');
    }
        return respuesta.json();
    })
    .then((datos) => {
        const item = datos.find((element) => String(element.id) === id);
        if (item) {
            setItemDetail(item);
            return;
        }
        throw new Error('No se pudo cargar el producto.');
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
}

if (error) {
return <p>Error: {error}</p>;
}

if (!itemDetail) {
    return <p>Error: Producto no encontrado.</p>
}

return (
    <div>
        <h2>DETALLE DEL PRODUCTO</h2>
        <div  id='productos'>
            <ItemDetail item={itemDetail}/>
        </div>
    </div>
);
}