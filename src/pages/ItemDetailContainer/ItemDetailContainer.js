import data from "../../components/mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const parametros = useParams();
    
    const [Item, setItem] = useState([]);

    useEffect(() => {
        getItem.then((response) => {
            setItem(response);
        })
        .catch((error) => console.log(error));
    }, []);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.find((item)=>item.id===parametros.id));
        },);
    });

    return (
        <div className="ItemListPadre">
            <ItemDetail Item={Item} />
        </div>
    )
}

export default ItemDetailContainer