import { Item } from "../Item/Item";
export const ItemList = ({ lista }) => {
  return (
    <div className="ItemListPadre">
      {lista.map((product) => (
        <Item
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      ))}
    </div>
  );
};
