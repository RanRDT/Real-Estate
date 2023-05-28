import { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "../../components/PropertyOneCard/PropertyOneCard.css";
import Fav from "../Fav/Fav";
import { set } from "react-hook-form";

function Property({ item }) {
  const { AddFavorit, setAddFavorit } = useContext(Context);

console.log(AddFavorit);
  const handleAddFavorit = () => {
    setAddFavorit((prevFavorit) => {
      if (Array.isArray(prevFavorit)) {
        return [...prevFavorit, item.zpid];
      } else {
        return [item.zpid];
      }
    });
  };

  return (
    <div className="item-single-box" key={`/properties/${item.zpid}`}>
      <Link to={`${item.zpid}`} className="link-to-property">
        <img className="images" width="300px" src={item.imgSrc} alt="" />
        <div>{item.homeType}</div>
        <div>{item.city}</div>
        <div>{`Price: ${item.price}$`}</div>
        <div>{`Bedrooms: ${item.bedrooms}`}</div>
        <div>{`Bathrooms: ${item.bathrooms}`}</div>
      </Link>
      <button onClick={handleAddFavorit} className="fav-button">
        love it
      </button>
    </div>
  );
}

export default Property;
