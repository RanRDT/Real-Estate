import React from "react";
import { useState, useEffect } from "react";
import info from "./../../data.json";
import { Link } from "react-router-dom";
import Property from "./PropertyPage";

const Grid = () => {
    
  const [data, setData] = useState();
  useEffect(() => setData(info.results), [info]);
  {data &&
    data.map((value, index) => {
      return (
        <Link
          className="link-to-property"
          key={index}
          to={`${value.zpid}`}
        >
          <Property item={value} />
        </Link>
      );
    })}
  
  
};

export default Grid;
