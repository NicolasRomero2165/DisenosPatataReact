import { Item } from "../Item/Item";

export function ItemList({ productos }) {
    return (
        <div>
            {productos.map(prod => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
}