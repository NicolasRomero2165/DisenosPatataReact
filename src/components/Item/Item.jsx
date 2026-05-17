import { useCart } from "../../context/CartContext"

export function Item({ id, nombre, imagen, precio, descripcion }) {
    
    const producto = {id, nombre, imagen, precio, descripcion };

    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(producto, 1);
        alert(`Agregaste ${nombre} al carrito.`);
    };

return (
    <div className="tarjetas">
        <h3>{nombre}</h3>
            <a href={`/Productos/${id}`}><img src={imagen} alt={nombre}/></a>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        <button onClick={handleAddToCart}>COMPRAR</button>
    </div>
);
}