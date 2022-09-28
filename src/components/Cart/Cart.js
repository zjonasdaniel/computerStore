import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeItem } = useContext(CartContext);
  const sumCart = () => {
    let total = 0;
    cart.map((item) => (total = total + (item.price*item.cantidad)));
    return total;
  };
  const total=sumCart();
  return (
    <>
      <h1>Carrito</h1>
      <div className="ItemListPadre">
        {cart.length === 0 ? (
          <>
            {" "}
            <h2> no hay productos en el carrito </h2>
            <Link to="/"> HOME </Link>
          </>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="ItemHijo">
              <img width={"200px"} src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <p>{item.cantidad}</p>
              <button onClick={() => removeItem(item.id)}>
                Eliminar Producto
              </button>
            </div>
          ))
        )}
      </div>
      <h2>TOTAL: ${total}</h2>
    </>
  );
};

export default Cart;
