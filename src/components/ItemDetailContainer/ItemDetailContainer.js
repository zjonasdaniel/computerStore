import data from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [Item, setItem] = useState([]);

    useEffect(() => {
        getItem.then((response) => {
            setItem(response);
        })
        .catch((error) => console.log(error));
    }, []);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find((item)=>item.id==="1"));
        }, 2000);
    });

    return (
        <div>
            <ItemDetail Item={Item} />
        </div>
    )
}

export default ItemDetailContainer