import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/HomePage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Fav from "./components/Fav/Fav.jsx";
import PropertiesMain from "./components/PropertiesMain/PropertiesMain";
import PropertySend from "./components/PropertySendToExtandedPage/PropertySendToExtandedPage";
import { useState } from "react";
import { Context } from "./Context";

function App() {
  const [AddFavorit, setAddFavorit] = useState([]);
  return (
    <div>
      <Context.Provider value={{AddFavorit, setAddFavorit}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/Fav" element={<Fav />}></Route>
            <Route path="/properties" element={<PropertiesMain />}></Route>
            <Route path="/properties/:id" element={<PropertySend />}></Route>
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
