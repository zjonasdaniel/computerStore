import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ Item }) => {
    const [count,setCount] = useState(0);
    const handleClick = () =>{
        console.log(count);
    };
    return (
        <div className="ItemPadre">
            <div className="ItemHijo">
                <img width={"200px"} src={Item.image} alt={Item.title} />
                <h2>{Item.title}</h2>
                <h3>{Item.price}</h3>
                <h3>{Item.description}</h3>
                <ItemCount setCount={setCount} count={count}/>
                <Link to={'/cart'} onClick={handleClick} className="ItemDetailCarrito">Ir al Carrito</Link>
            </div>
        </div>
    )
}

export default ItemDetail