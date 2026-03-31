export const Navegador = () => {
    const navegador = ["Inicio", "Tazas", "Remeras", "Calendarios", "Set de Jardín"];

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