import './Nav.css'
import { Link } from 'react-router-dom';

export const Nav = () => {
    const nav = ["Inicio", "Productos", "Contacto", "Carrito"];

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