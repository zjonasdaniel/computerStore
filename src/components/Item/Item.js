import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id,Id, Title, Price, Image }) => {
  return (
    <div className="ItemConteiner">
      <div className="ItemHeader">
        <div className="ItemHeaderTitle">
          <div className="ItemHeaderTitleA">{Title}</div>
          <div className="ItemHeaderTitleB">inStock</div>
        </div>
        <div className="ItemHeaderPrice">${Price}</div>
      </div>
      <div className="ItemImage">
        <img height={"150px"} src={Image} alt={Title} />
      </div>
      <div className="ItemFooter">
        <div className="ItemFooterDetails">
          <Link to={"/detail/" + id} className="ItemFooterDetailsLink">
            <div> Details </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
