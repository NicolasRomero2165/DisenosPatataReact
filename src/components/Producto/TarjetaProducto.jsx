import './Productos.css'
import { useState } from 'react';

const Productos = [ 
    {
        nombre: 'Taza mágica', 
        descripcion: 'Taza que cambia su dibujo con la temperatura del agua.', 
        precio: '$ 16.000', 
        imagen: 'src/components/Producto/imagenes/tazas.jpg', 
        favorito: false
    },
    { 
        nombre: 'Calendario perpetuo', 
        descripcion: 'Calendario eterno imantado, perfecto para la heladera. Incluye un fibrón.', 
        precio: '$ 15.000', 
        imagen: 'src/components/Producto/imagenes/calendario.jpg', 
        favorito: false
    },
    { 
        nombre: 'Stickers', 
        descripcion: 'Stickers de todo tipo: común, aprueba de agua, vinilo y demás.', 
        precio: '1 x $ 1.000, 3 x $ 2.500, 10 x $ 8.000', 
        imagen: 'src/components/Producto/imagenes/stickers.jpg', 
        favorito: false
    }
];

export const TarjetaProducto = () => {

    const [favorito, setFavorito] = useState(false)
    const marcarComoFavorito = () => {
        setFavorito(!favorito);
    }

    return (
            Productos.map(({ nombre, descripcion, precio, imagen}, index) => (
                <div key={index} className="tarjeta">
                    <h3>{nombre}</h3>
                    <img src={imagen} alt={nombre} />
                    <p>{descripcion}</p> 
                    <p className='precio'>{precio} <br/>
                    <button className='favorito' onClick={marcarComoFavorito}>
                        {favorito ? '❤️ Quitar' : '🤍 Agregar'}
                    </button></p>
                </div>
            ))
        )
}