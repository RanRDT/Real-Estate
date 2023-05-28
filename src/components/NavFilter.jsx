import { useForm } from "react-hook-form";
import React from "react";

const NavFilter = () => {
  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="filters-div">
      <div id="filter-first-row">
        <select
          {...register(`city-filter`)}
          id="city-filter"
          className="single-filter"
        >
          <option value="" hidden>
            City
          </option>
          <option value="Houston">Houston</option>
          <option value="Webster">Webster</option>
          <option value="Humble">Humble</option>
          <option value="Porter">Porter</option>
          <option value="Huffman">Huffman</option>
        </select>

        <select
          {...register(`type-filter`)}
          id="type-filter"
          className="single-filter"
        >
          <option value="" hidden>
            House Type
          </option>
          <option value="MULTI_FAMILY">Multi Family</option>
          <option value="SINGLE_FAMILY">Single Family</option>
          <option value="TOWNHOUSE">Town House</option>
          <option value="CONDO">Condo House</option>
          <option value="LOT">Lot</option>
        </select>

        <select
          {...register(`price-filter`)}
          id="price-filter"
          className="single-filter"
        >
          <option value="" hidden>
            Price
          </option>
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
        </select>
      </div>

      <div id="filter-second-row">
        <select
          {...register(`bedrooms`)}
          id="bedrooms"
          className="single-filter"
        >
          <option value="" hidden>
            Bedrooms
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <select
          {...register(`bathrooms`)}
          id="bathrooms"
          className="single-filter"
        >
          <option value="" hidden>
            Bathrooms
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="submit" value="submite" />
      </div>
    </form>
  );
};

export default NavFilter;
