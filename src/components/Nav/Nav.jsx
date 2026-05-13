import './Nav.css'
import { Link } from 'react-router-dom';

export const Nav = () => {
    const nav = ["Inicio", "Productos", "Contacto", "Carrito"];

    return (
        <nav>
            <div>
                <h3>Diseños personales, simples y a un excelente precio.<br/>Desde tarjetas, remeras, stickers, tazas y demás.</h3>
            </div>
            <ul>
                {nav.map( (nombre, index) => 
                    <li key={index}><Link to={nombre}>{nombre}</Link></li>
                )}
            </ul>
        </nav>
    );
}