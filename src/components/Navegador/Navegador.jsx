import './Navegador.css'
export const Navegador = () => {
    const navegador = ["Inicio", "Productos", "Contacto", "Carrito"];

    return (
        <nav>
            <ul>
                {navegador.map( (nombre, index) => 
                    <li key={index}>{nombre}</li>
                )}
            </ul>
        </nav>
    );
}