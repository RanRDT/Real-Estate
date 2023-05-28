import React from "react";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import '../../components/PropertyExtentedPage/PropertyExtentedPage.css'


export const PropertyOneComponent = ({ property }) => {
  return (
    <div id="container-property">

      <div id="card-img-info">

        <div id="property-img-div"> <img id="img-itself" src={property?.imgSrc} /></div>

        <div id="property-info">
          <div id="info-title"><h1>Property Details</h1></div>
          <div className="info-list-item" ><span className="info-list-item-icon"><LocationOnOutlinedIcon /></span>{`Location: ${property.city}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><LocalAtmOutlinedIcon /></span>{`Price: ${property.price}$`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><SingleBedIcon /></span>{`Bedrooms: ${property.bedrooms}`}</div>
          <div className="info-list-item"><span className="info-list-item-icon"><BathtubIcon /></span>{`Bathrooms: ${property.bathrooms}`}</div>
        </div>
      </div>

      <div id="recomanded"><h2>Recomanded For You</h2></div>




    </div>
  );
};
