import { useCart } from "../../context/CartContext";
import '../Carrito/Carrito.css'

export const Carrito = () => {

    const { cart, clearCart, getCartTotal } = useCart();

if (cart.length === 0) {
    return (
        <div>
            <h3>El carrito está vacío</h3>
            <p>Agrega productos para continuar la compra.</p>
        </div>
    );
}

    return (
        <div>
            <h3>Carrito de Compras</h3>
                {cart.map(item => (
                <div key={item.id} className="carrito">
                    <h4>{item.nombre}</h4>
                    <img src={item.imagen} alt={item.nombre}/>
                    <p>Precio: ${item.precio}</p>
                </div>
        ))}
        <hr />
            <h3>Total a pagar: ${getCartTotal()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
);
};