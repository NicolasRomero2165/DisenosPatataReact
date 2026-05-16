export function Item({ nombre, imagen, precio }) {
    
return (
    <div className="tarjetas">
        <h3>{nombre}</h3>
            <img src={imagen} alt={nombre}/>
        <p className="precio">$ {precio}</p>
        <button>COMPRAR</button>
    </div>
);
}