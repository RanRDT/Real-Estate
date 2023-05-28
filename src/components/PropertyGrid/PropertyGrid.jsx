import React from "react";
import { Link } from "react-router-dom";
import Property from "../PropertyOneCard/PropertyOneCard";

const PropertyGrid = ({ data }) => {
  return (
    <>
      {data &&
        data.map((value, index) => {
          return <Property item={value} key={index} />;
        })}
    </>
  );
};

export default PropertyGrid;
