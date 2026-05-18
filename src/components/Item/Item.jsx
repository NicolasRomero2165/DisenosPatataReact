import { Link } from "react-router-dom";

export function Item({ id, nombre, imagen, precio, descripcion, children }) {

return (
    <div className="tarjetas">
        <h3>{nombre}</h3>
            <Link to={`/Productos/${id}`}><img src={imagen} alt={nombre}/></Link>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        {children}
    </div>
);
}