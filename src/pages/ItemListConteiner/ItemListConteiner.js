import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./ItemListConteiner.css";

const ItemListConteiner = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "Items");
    getDocs(querySnapshot).then((res) => {
      const data = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProductList(data);
    });
  };
  console.log(productList);
  return (
    <div className="ItemListConteiner">
      <ItemList lista={productList} />
    </div>
  );
};

export default ItemListConteiner;
