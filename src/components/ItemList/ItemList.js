import { Item } from "../Item/Item";
import { Link } from 'react-router-dom'
export const ItemList = ({ lista }) => {

    return (
        <div className="ItemListPadre">
            {lista.map((product) => (
                <Link 
                    key={product.id} 
                    to={'/detail/'+ product.id}
                    className='LinkItemList'>  
                    <Item
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image} />
                </Link> 
            ))}
        </div>
    )
}
