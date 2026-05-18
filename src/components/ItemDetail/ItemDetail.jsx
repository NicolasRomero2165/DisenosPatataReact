import { Item } from "../Item/Item"
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({item}) => {

    const { nombre } = item;

    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(item, 1);
        alert(`Agregaste ${nombre} al carrito.`);
    };

    return (
    <div id="detalle">
        <Item {...item}>
            <button onClick={handleAddToCart}>COMPRAR</button>
        </Item>
    </div>
)
};