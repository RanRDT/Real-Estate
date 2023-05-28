import "../../components/Fav/Fav.css";
import { Context } from "../../Context";
import { useContext, useEffect, useState } from "react";
import info from "../../../data.json";

function Fav() {
  const { AddFavorit, setAddFavorit } = useContext(Context);
  const [favlist, setFavList] = useState([]);

  useEffect(() => {
    const filteredList = info.results.filter((obj) => AddFavorit.includes(obj.zpid));
    setFavList(filteredList);
  }, [AddFavorit]);


  return (
    <div id="">
      {favlist.map((item) => (
        <div className="info-single-box" key={`/properties/${item.zpid}`}>
          <img className="images" width="300px" src={item.imgSrc} alt="" />
          <div>{item.homeType}</div>
          <div>{item.city}</div>
          <div>{`Price: ${item.price}$`}</div>
          <div>{`Bedrooms: ${item.bedrooms}`}</div>
          <div>{`Bathrooms: ${item.bathrooms}`}</div>
        </div>
      ))}
    </div>
  );
}

export default Fav;
