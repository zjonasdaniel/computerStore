import data from "../../components/mockData";
import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { Link } from 'react-router-dom';

const ItemListConteiner = ({ greeting }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    })
    .catch((error) => console.log(error));
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

  return (
    <div className="divPadreItemListConteiner">
      <h1> {greeting} </h1>
      <Link to="/cart">carrito</Link>
      <ItemList lista={productList}/>
    </div>
  )
}

export default ItemListConteiner