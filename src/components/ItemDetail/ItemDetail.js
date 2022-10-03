import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ Item }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const OnAdd = () => {
    addToCart(Item, count);
  };
  return (
    <div className="ItemDetailDiv1">
      <div className="ItemDetailDiv2">
        <div className="ItemDetailDiv2Image">
          <img width={"300px"} src={Item.Image} alt={Item.Title} />
        </div>
        <div className="ItemDetailDiv2Texto">
          <div className="ItemDetailDiv2TextoTitle">
            <div>{Item.Title}</div>
            <div>${Item.Price}</div>
          </div>
          <div className="ItemDetailDiv2TextoDescription">{Item.Description}</div>
          <div className="ItemDetailDiv2TextoBuy">
            <div>
              <ItemCount stock={Item.Stock} setCount={setCount} count={count} />
            </div>
            <div className="ItemDetailDiv2TextoBuyButtonCont">
              <button className="ItemDetailDiv2TextoBuyButton" onClick={OnAdd}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
