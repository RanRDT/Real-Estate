import { useState, useEffect } from "react";
import FilterBar from "./../FilterBar/FilterBar";
import "../../components/PropertiesMain/PropertiesMain.css";
import info from "../../../data.json";
import PropertyGrid from "../PropertyGrid/PropertyGrid";

function PropertiesMain() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  useEffect(() => {
    setData(info.results);
    setData1(info.results);
  }, []);

  const [infoForm, setInfoForm] = useState({});
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    let filteredData = data1;
    if (infoForm.city) {
      filteredData = filteredData.filter((item) => item.city === infoForm.city);
    }
    if (infoForm.type) {
      filteredData = filteredData.filter((item) => item.homeType === infoForm.type);
    }
    if (infoForm.bedrooms) {
      filteredData = filteredData.filter((item) => item.bedrooms === Number(infoForm.bedrooms));
    }
    if (infoForm.bathrooms) {
      filteredData = filteredData.filter((item) => item.bathrooms === Number(infoForm.bathrooms));
    }
    
    if (infoForm.price === "High to Low") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (infoForm.price === "Low to High") {
      filteredData.sort((a, b) => a.price - b.price);
    }

    setSortedData(filteredData);
  }, [infoForm, data1]);

  return (
    <div id="properties-container">
      <FilterBar setInfoForm={setInfoForm} />
      <div id="all-items">
        <PropertyGrid data={sortedData} />
      </div>
    </div>
  );
}

export default PropertiesMain;
