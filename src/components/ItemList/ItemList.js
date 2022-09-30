import { Item } from "../Item/Item";
export const ItemList = ({ lista }) => {
  return (
    <div className="ItemListPadre">
      {lista.map((product) => (
        <Item
          key={product.Id}
          title={product.Title}
          price={product.Price}
          image={product.Image}
          id={product.Id}
        />
      ))}
    </div>
  );
};
