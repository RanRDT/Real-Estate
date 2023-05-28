import React from "react";
import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import "./FilterBar.css"

const FilterBar = ({setInfoForm }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setInfoForm(data);
 
  
  return (
    <form id="filters-div" onSubmit={handleSubmit(onSubmit)}>
      <div id="filter-first-row">
        <select
          {...register(`city`)}
          id="city-filter"
          className="single-filter"
          defaultValue={false}
        >
          <option value="" hidden>
            City
          </option>
          <option value="Houston">Houston</option>
          <option value="Webster">Webster</option>
          <option value="Porter">Porter</option>
          <option value="Huffman">Huffman</option>
        </select>

        <select
          {...register(`type`)}
          id="type-filter"
          className="single-filter"
        >
          <option value="" hidden>
            House Type
          </option>
          <option value="SINGLE_FAMILY">Single Family</option>
          <option value="TOWNHOUSE">Town House</option>
          <option value="CONDO">Condo House</option>
        </select>

        <select
          {...register(`price`)}
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

        <button type="input" id="sumbit-btn">
          Find My Property
        </button>
      </div>
    </form>
  );
};

export default FilterBar;
