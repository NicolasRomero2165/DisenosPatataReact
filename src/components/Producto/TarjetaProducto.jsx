import './Productos.css'

const Productos = [ 
    { nombre: 'Taza mágica', descripcion: 'Taza que cambia su dibujo con la temperatura del agua.', precio: '$ 16.000', imagen: 'src/components/Producto/imagenes/tazas.jpg'},
    { nombre: 'Calendario perpetuo', descripcion: 'Calendario eterno imantado, perfecto para la heladera. Incluye un fibrón.', precio: '$ 15.000', imagen: 'src/components/Producto/imagenes/calendario.jpg'},
    { nombre: 'Stickers', descripcion: 'Stickers de todo tipo: común, aprueba de agua, vinilo y demás.', precio: '1 x $ 1.000, 3 x $ 2.500, 10 x $ 8.000', imagen: 'src/components/Producto/imagenes/stickers.jpg'}
];

export const TarjetaProducto = () => {
    return (
        Productos.map(({ nombre, descripcion, precio, imagen }, index) => (
            <div key={index} className="tarjeta">
                <h4>{nombre}</h4><img src={imagen} alt="" /><p>{descripcion}</p> <p className='precio'> Precio: <br />{precio} </p>
            </div>
        ))
    )
}