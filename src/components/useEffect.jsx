import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const {id} = useParams();

    const [ItemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/productos.json")
        .then((res) => res.json())
    })
}