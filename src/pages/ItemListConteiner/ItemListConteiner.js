import { useEffect, useState } from "react";
import { ItemList } from "../../components/ItemList/ItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./ItemListConteiner.css";

const ItemListConteiner = () => {
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  let filter = "Alls" ; 

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
      setFilterList(data);
    });
  };
  
  const setAlls = ()  => {
    filter = "Alls";
    setFilterList(productList);
  }
  const setMonitors = ()  => {
    filter = "Monitors";
    setFilterList(productList.filter((dato)=>dato.Category.includes(filter)));
  }
  const setMouses = ()  => {
    filter = "Mouses";
    setFilterList(productList.filter((dato)=>dato.Category.includes(filter)));
  }
  const setKeyboards = ()  => {
    filter = "Keyboards"
    setFilterList(productList.filter((dato)=>dato.Category.includes(filter)));
  }

  return (
    <div className="ItemListConteiner">
      <div className="ItemListConteinerFilterConteiner">
        <div onClick={() => setAlls()}>Alls</div>
        <div onClick={() => setMonitors()}>Monitors</div>
        <div onClick={() => setMouses()}>Mouses</div>
        <div onClick={() => setKeyboards()}>keyboards</div>
      </div>
      <ItemList lista={filterList} />
    </div>
  );
};

export default ItemListConteiner;
