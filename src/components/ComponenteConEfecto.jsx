import { useEffect, useState } from "react";

export const ComponenteConEfecto = () => {
    const [contador, setContador] = useState(0);
    const [mostrarMensaje, setMostrarMensaje] = useState(true);

    useEffect(() => {
        console.log("Componente montado");
    }, [contador, mostrarMensaje]);

    return (
        <>
            <button onClick={() => setContador(contador + 1)}>sumar</button>
            <p>{contador}</p>
            <br />
            <br />

            <button onClick={() => setMostrarMensaje(!mostrarMensaje)}></button>
        </>
    )
}