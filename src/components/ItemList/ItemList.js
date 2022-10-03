import { Item } from "../Item/Item";
import'./ItemList.css'

export const ItemList = ({ lista }) => {
  return (
    <div className="Div1">
      {lista.map((product) => (
        <Item
          Key={product.Id}
          Title={product.Title}
          Price={product.Price}
          Image={product.Image}
          Id={product.Id}
          id={product.id}
        />
      ))}
    </div>
  );
};
