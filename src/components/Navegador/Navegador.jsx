import './Navegador.css'
import { Link } from 'react-router-dom';

export const Navegador = () => {
    const navegador = ["Inicio", "Productos", "Contacto", "Carrito"];

    return (
        <nav>
            <div>
                <h3>Diseños personales, simples y a un excelente precio.<br/>Desde tarjetas, remeras, stickers, tazas y demás.<br/>3 de Enero del 2026</h3>
            </div>
            <ul>
                {navegador.map( (nombre, index) => 
                    <li key={index} className='enlace'><Link to={nombre}>{nombre}</Link></li>
                )}
            </ul>
        </nav>
    );
}