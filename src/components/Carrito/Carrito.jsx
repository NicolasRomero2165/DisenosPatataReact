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
            <h2>CARRITO DE COMPRAS</h2>
                {cart.map(item => (
                <div key={item.id} className="carrito">
                    <div className="carritoImagen">
                        <img src={item.imagen} alt={item.nombre}/>
                    </div>
                    <div className="carritoTexto">
                        <h3>{item.nombre}</h3>
                        <p>{item.descripcion}</p>
                    </div>
                    <div className="carritoPrecio">
                        <p>Precio</p>
                        <p>${item.precio}</p>
                    </div>
                </div>
        ))}
        <hr />
            <button id="vaciarCarrito" onClick={clearCart}>VACIAR CARRITO</button>
            <h3 id="total">
                Total a pagar: ${getCartTotal()}
            </h3>
        </div>
);
};