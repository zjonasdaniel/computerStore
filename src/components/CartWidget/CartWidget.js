import './CartWidget.css';
import carritoCompras from './carritoCompras.png';
const CartWidget = () => {
    return ( 
        <div>
            <img src={carritoCompras} className='cartWidgetPadre' alt='' />
        </div>
    )
};
export default CartWidget;