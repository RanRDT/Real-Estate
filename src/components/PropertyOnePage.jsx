import { useParams } from "react-router-dom";
import info from './../../data.json';
import { PropertyOneComponent } from "./PropertyOneComponent";
import { NoMatch } from "./NoMatch"

function getPropertyById(id) {
    const properties = info.results.filter((property) => property.zpid === Number(id));
    return properties[0] ? properties[0] : undefined
}

const PropertyOnePage = () => {
  const { id } = useParams();
  const property = getPropertyById(id);
  const c = property ? <PropertyOneComponent property={property} /> : <NoMatch />
  return (
    c
  );
};

export default PropertyOnePage;
