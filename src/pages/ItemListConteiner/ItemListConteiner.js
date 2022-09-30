import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListConteiner = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'Items');
    getDocs(querySnapshot).then(res => {
      const data = res.docs.map((doc)=>{
        return doc.data();
      })
      setProductList(data)
    });
  };

  return (
    <div className="divPadreItemListConteiner">
      <h1> {greeting} </h1>
      <Link to="/cart">carrito</Link>
      <ItemList lista={productList} />
    </div>
  )
}

export default ItemListConteiner