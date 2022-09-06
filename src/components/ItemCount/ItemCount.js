import { useState } from "react";
import "./ItemCount.css";
export const ItemCount = () => {
    const [count1, setcount1] = useState(0);
    const suma = () => {
        if (count1 < 10) { setcount1(count1 + 1) }
    }
    const resta = () => {
        if (count1 > 0) { setcount1(count1 - 1) }
    }
    return (
        <div className="itemCountPadre">
            <div className="itemCountStock"> Stock Disponible: 10unidades</div>
            <div className="itemCountCount">
                <button onClick={resta}>
                    -
                </button>
                <div>
                    {count1}
                </div>
                <button onClick={suma}>
                    +
                </button>
            </div>
        </div>
    )
}
