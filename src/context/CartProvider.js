import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.Id)){
            alert('ya esta en el carrito');
        }else{
            setCart([...cart,{...item, cantidad}]);
        }
    };
    const isInCart = (id) => {
        return cart.some((item)=>item.Id===id);
    };
    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (idDelete) => {
        setCart(cart.filter((item)=>item.Id!==idDelete));
    }
    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;