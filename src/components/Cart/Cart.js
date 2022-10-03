import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, removeItem } = useContext(CartContext);
  const sumCart = () => {
    let total = 0;
    cart.map((item) => (total = total + item.Price * item.cantidad));
    return total;
  };
  const total = sumCart();
  return (
    <div className="CartDiv1">
      <div className="CartDiv2">
        <div className="CartDiv3">
          {cart.length === 0 ? (
            <div className="CartDiv3_1">
              <h2> No hay productos en el carrito! </h2>
              <Link to="/" className="CartDiv3_1Link">
                {" "}
                <div className="CartDiv3_1Button">HOME </div>
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.Id} className="CartDiv3_2">
                <div className="CartDiv3_2_1">
                  <div className="CartDiv3_2_1Title"> Producto: <span>{item.Title}</span></div>
                  <div className="CartDiv3_2_1Details">
                    <p>Precio: {item.Price}</p>
                    <p>Cantidad: {item.cantidad}</p>
                  </div>
                </div>
                <div className="CartDiv3_2_2">
                  <button onClick={() => removeItem(item.Id)}>
                    Eliminar Producto
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="CartDiv4">
          <h1>Carrito</h1>
          <h2>TOTAL: ${total}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
