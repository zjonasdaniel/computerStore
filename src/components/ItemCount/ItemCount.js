import { useState } from "react";
import "./ItemCount.css";
export const ItemCount = ({count,setCount}) => {
    const suma = () => {
        if (count < 10) { setCount(count + 1) }
    }
    const resta = () => {
        if (count > 0) { setCount(count - 1) }
    }
    return (
        <div className="itemCountPadre">
            <div className="itemCountStock"> Stock Disponible: 10unidades</div>
            <div className="itemCountCount">
                <button onClick={resta}>
                    -
                </button>
                <div>
                    {count}
                </div>
                <button onClick={suma}>
                    +
                </button>
            </div>
        </div>
    )
}
