import { useCart } from "../../context/CartContext"

export function Item({ id, nombre, imagen, precio, descripcion, children }) {

return (
    <div className="tarjetas">
        <h3>{nombre}</h3>
            <a href={`/Productos/${id}`}><img src={imagen} alt={nombre}/></a>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        {children}
    </div>
);
}