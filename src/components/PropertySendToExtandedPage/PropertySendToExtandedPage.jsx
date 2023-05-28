import { useParams } from "react-router-dom";
import { PropertyOneComponent } from "../PropertyExtentedPage/PropertyExtentedPage";
import { NoMatch } from "../NoMatch/NoMatch";
import info from '../../../data.json';


function getPropertyById(id) {
    const properties = info.results.filter((property) => property.zpid === Number(id));
    return properties[0] ? properties[0] : undefined
}

const PropertySend = () => {
  const { id } = useParams();
  const property = getPropertyById(id);
  const c = property ? <PropertyOneComponent property={property} /> : <NoMatch />
  console.log(c);
  return (
    c
  );
};

export default PropertySend;
