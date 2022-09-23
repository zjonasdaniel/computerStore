import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ Item }) => {
    const [count,setCount] = useState(1);
    const {addToCart} = useContext(CartContext);
    const OnAdd = () =>{
        addToCart(Item,count);
    };
    return (
        <div className="ItemPadre">
            <div className="ItemHijo">
                <img width={"200px"} src={Item.image} alt={Item.title} />
                <h2>{Item.title}</h2>
                <h3>{Item.price}</h3>
                <h3>{Item.description}</h3>
                <ItemCount stock={Item.stock} setCount={setCount} count={count}/>
                <button onClick={OnAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail
