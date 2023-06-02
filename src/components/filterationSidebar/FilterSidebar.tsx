import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterationSideBar = ({ filters }: any) => {
  const [brandsExpanded, setBrandsExpanded] = useState(true);
  const [sizesExpanded, setSizesExpanded] = useState(true);
  const [genderExpanded, setGenderExpanded] = useState(true);
  const [checkedFilters, setCheckedFilters] = useState<any>([]);

  const handleFilters = (category: any, value: any) => {
    if (checkedFilters.includes(value)) {
      setCheckedFilters(checkedFilters.filter((item: any) => item !== value));
    } else {
      setCheckedFilters([...checkedFilters, value]);
    }
  };

  return (
    <div>
      <div className="border-r border-gray-200 w-full p-4">
        <div className="mb-6">
          <div
            className="flex items-center cursor-pointer mb-2"
            onClick={() => setBrandsExpanded(!brandsExpanded)}
          >
            <p>{brandsExpanded ? <FaChevronDown /> : <FaChevronUp />}</p>
            <h3 className="text-lg font-bold">Brands</h3>
          </div>
        </div>
        {brandsExpanded &&
          filters?.brands.map((brand: any) => (
            <div key={brand} className="flex items-center">
              <input
                id={`brand-${brand}`}
                type="checkbox"
                className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mr-3"
                value={brand}
                checked={checkedFilters.includes(brand)}
                onChange={() => handleFilters("brands", brand)}
              />
              <label htmlFor={`brand-${brand}`} className="block text-sm">
                {brand}
              </label>
            </div>
          ))}
      </div>

      <div className="border-r border-gray-200 w-full p-4">
        <div className="mb-6">
          <div
            className="flex items-center cursor-pointer mb-2"
            onClick={() => setSizesExpanded(!sizesExpanded)}
          >
            <p>{sizesExpanded ? <FaChevronDown /> : <FaChevronUp />}</p>
            <h3 className="text-lg font-bold">Sizes</h3>
          </div>

          {sizesExpanded &&
            filters?.sizes.map((size: any) => (
              <div key={size} className="flex items-center">
                <input
                  id={`size-${size}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mr-3"
                  value={size}
                  checked={checkedFilters.includes(size)}
                  onChange={() => handleFilters("sizes", size)}
                />
                <label htmlFor={`size-${size}`} className="block text-sm">
                  {size}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className="border-r border-gray-200 w-full p-4">
        <div className="mb-6">
          <div
            className="flex items-center cursor-pointer mb-2"
            onClick={() => setGenderExpanded(!genderExpanded)}
          >
            <p>{sizesExpanded ? <FaChevronDown /> : <FaChevronUp />}</p>
            <h3 className="text-lg font-bold">Gender</h3>
          </div>

          {genderExpanded &&
            filters?.types.map((gender: any) => (
              <div key={gender} className="flex items-center">
                <input
                  id={`size-${gender}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mr-3"
                  value={gender}
                  checked={checkedFilters.includes(gender)}
                  onChange={() => handleFilters("sizes", gender)}
                />
                <label htmlFor={`size-${gender}`} className="block text-sm">
                  {gender}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterationSideBar;
