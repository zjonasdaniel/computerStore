import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const { Id } = useParams();
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
    <div className="ItemDetailContainer">
      <div className="ItemDetailContainerDiv1">
        <Link className="ItemDetailLink" to={"/home"}>
          <div className="ItemDetailContainerDiv1Button">Return</div>
        </Link>
        <Link className="ItemDetailLink" to="/cart">
          <div className="ItemDetailContainerDiv1Button">Cart</div>
        </Link>
      </div>
      <ItemDetail Item={Item} />
    </div>
  );
};

export default ItemDetailContainer;
