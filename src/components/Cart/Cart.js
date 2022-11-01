import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import moment from "moment";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const sumCart = () => {
    let total = 0;
    cart.map((item) => (total = total + item.Price * item.Quantity));
    return total;
  };
  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        Name: "Jonas",
        Phone: 1515151515,
        Email: "test@test.com",
      },
      Items: cart,
      Total: total,
      Date: moment().format(),
    };
    const query = collection(db, "BuyOrder");
    addDoc(query, order)
      .then((res) => {
        console.log(res);
        alert("Thanks for your purchase! Id of Buy: " + res.id);
      })
      .catch(() =>
        alert("Your purchase could not be completed! try again later")
      );
  };
  const total = sumCart();
  return (
    <div className="CartDiv1">
      <div className="CartDiv2">
        <div className="CartDiv3">
          {cart.length === 0 ? (
            <div className="CartDiv3_1">
              <h2> There are no products in the cart! </h2>
              <Link to="/" className="CartDiv3_1Link">
                {" "}
                <div className="CartDiv3_1Button">HOME </div>
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.Id} className="CartDiv3_2">
                <div className="CartDiv3_2_1">
                  <div className="CartDiv3_2_1Title">
                    {" "}
                    Product: <span>{item.Title}</span>
                  </div>
                  <div className="CartDiv3_2_1Details">
                    <p>Price: {item.Price}</p>
                    <p>Quantity: {item.Quantity}</p>
                  </div>
                </div>
                <div className="CartDiv3_2_2">
                  <button onClick={() => removeItem(item.Id)}>
                    Delete Product
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="CartDiv4">
          <div className="CartDiv4-1">
            <h1>Cart</h1>
            <h2>TOTAL: ${total}</h2>
            <div className="CartDiv4-1-1">
              <div onClick={createOrder} className="CartDiv4-1-1button">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
