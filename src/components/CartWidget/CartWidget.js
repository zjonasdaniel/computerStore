import "./CartWidget.css";
import carritoCompras from "./carritoCompras.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="CartWidget">
      <Link to="/cart">
        <img src={carritoCompras} className="CartWidgetImg" alt="" />
      </Link>
      {cart.length === 0 ? (
        ""
      ) : (
        <p className="CartWidgetLength">{cart.length}</p>
      )}
    </div>
  );
};
export default CartWidget;
