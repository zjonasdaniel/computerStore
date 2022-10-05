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
        <div className="ItemDetailDiv2Text">
          <div className="ItemDetailDiv2TextTitle">
            <div>{Item.Title}</div>
            <div>${Item.Price}</div>
          </div>
          <div className="ItemDetailDiv2TextDescription">
            {Item.Description}
          </div>
          <div className="ItemDetailDiv2TextBuy">
            <div>
              <ItemCount stock={Item.Stock} setCount={setCount} count={count} />
            </div>
            <div className="ItemDetailDiv2TextBuyButtonCont">
              <button className="ItemDetailDiv2TextBuyButton" onClick={OnAdd}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
