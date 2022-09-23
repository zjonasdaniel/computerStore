
import { Link } from "react-router-dom"
export const Item = ({ id, title, price, image }) => {
    return (
        <div className="ItemPadre">
            <div className="ItemHijo">
                <img width={"200px"} src={image} alt={title} />
                <h2>{title}</h2>
                <h3>{price}</h3>
                <Link to={'/detail/'+ id} className='ItemButton'> Detalles </Link> 
            </div>
        </div>
    )
}