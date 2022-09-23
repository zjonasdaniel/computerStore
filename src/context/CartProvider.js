import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
    const [cart,setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)){
            alert('ya esta en el carrito');
        }else{
            setCart([...cart,{...item, cantidad}]);
        }
    };
    const isInCart = (id) => {
        return cart.some((item)=>item.id===id);
    };
    const clearCart = () => {
        setCart([]);
    };
    const removeItem = (idDelete) => {
        setCart(cart.filter((item)=>item.id!==idDelete));
    }
    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;