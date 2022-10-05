import "./ItemCount.css";

export const ItemCount = ({ count, setCount, stock }) => {
  const suma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="itemCountDiv1">
      <div className="itemCountStock"> Available stock: {stock} units</div>
      <div className="itemCountCount">
        <button onClick={resta}>-</button>
        <div>{count}</div>
        <button onClick={suma}>+</button>
      </div>
    </div>
  );
};
