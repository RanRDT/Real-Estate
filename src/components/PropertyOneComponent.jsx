import React from "react";

export const PropertyOneComponent = ({property}) => {
  return (
    <div id="root-property">
      <span className="property-page">
        <img
          src={property?.imgSrc}
          id="property-img"
        />
        <span className="left-side">
          <h2>{property?.homeType}</h2>
          <ul className="list-item">
            <li>{property?.location}</li>
            <li>{property?.price}</li>
            <li>{property?.homeType}</li>
          </ul>
        </span>
      </span>
      <div className="Recomend for you"></div>
      <h2>Recomend for you</h2>
    </div>
  );
};
