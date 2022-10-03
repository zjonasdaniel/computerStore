import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const {Id}  = useParams();
  const [Item, setItem] = useState([]);
  const db = getFirestore();
  
  useEffect(() => {
    getItem();
  }, [Id]);

  const getItem = () => {
    const queryDoc = doc(db, "Items", Id);
    getDoc(queryDoc).then((res) => {
      setItem(res.data());
    });
  };

  return (
    <div className="ItemListPadre">
      <ItemDetail Item={Item} />
    </div>
  );
};

export default ItemDetailContainer;
