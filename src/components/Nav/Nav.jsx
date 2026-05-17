import './Nav.css'
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const Nav = () => {

    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();

    const nav = ["Inicio", "Productos", "Contacto", `Carrito`];

    return (
        <nav>
            <ul>
                {nav.map( (nombre, index) => 
                    <li key={index}><Link to={nombre}>{nombre}</Link></li>
                )}
            </ul>
        </nav>
    );
}