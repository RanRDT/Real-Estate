import "./propertyPage.css";
function Property({item}) {
    return (
        <div className="item-single-box" key={item.zpid}>
            <img id="img-item-single" className='images' width='300px' src={item.imgSrc} />
            <div className="homeType-item-single">{item.homeType}</div>
            <div className="city-item-single">{item.city}</div>
            <div className="price-item-single">{`Price: ${item.price}$`}</div>
            <div className="bedrooms-item-single">{`Bedrooms: ${item.bedrooms}`}</div>
            <div className="bathrooms-item-single">{`Bathrooms: ${item.bathrooms}`}</div>
            
        </div>


    )

}
export default Property