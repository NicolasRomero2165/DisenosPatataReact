import { Item } from "../Item/Item"
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({item}) => {

    return (
    <div id="detalle">
        <Item {...item}>
        </Item>
    </div>
)
};