import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterationSideBar = ({ products, setFilters, filters }: any) => {
  console.log("sideData", products);
  const [filterData, setFilterData] = useState<any>(products);
  const [brands, setBrands] = useState<any>([]);
  const [sizes, setSizes] = useState<any>([]);
  const [brandsExpanded, setBrandsExpanded] = useState<boolean>(true);
  const [genderExpanded, setGenderExpanded] = useState<boolean>(true);
  const [sizesExpanded, setSizesExpanded] = useState<boolean>(true);

  const handleFilters = (category: string, option: string) => {
    const newFilters = { ...filters };
    const index = newFilters[category].indexOf(option);
    if (index === -1) {
      newFilters[category].push(option);
    } else {
      newFilters[category].splice(index, 1);
    }
    setFilters(newFilters);
  };

  useEffect(() => {
    console.log("sideDataClone", products);
    setFilterData(products);
    const uniqueSizes: any = new Set<any>();
    products.forEach((item: any) => {
      console.log("item of products", item);
      // item.values.forEach((value: any) => {
      //   uniqueSizes.add(value);
      // });
    });
    setSizes([...uniqueSizes].map((value) => ({ name: value, value })));
    const uniqueBrands: any = new Set<any>();
    filterData?.forEach((item: any) => {
      uniqueBrands.add(item.brand);
    });
    setBrands([...uniqueBrands].map((value) => ({ name: value, value })));
  }, [products]);

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
          {brandsExpanded &&
            brands.map((brand: any) => (
              <div key={brand.value} className="flex items-center">
                <input
                  id={`brand-${brand.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4 transition duration-150 ease-in-out mr-3"
                  value={brand.value}
                  checked={filters.brands.includes(brand.value)}
                  onChange={() => handleFilters("brands", brand.value)}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor={`brand-${brand.value}`}
                  className="block text-sm"
                >
                  {brand.name}
                </label>
              </div>
            ))}
        </div>
        <div className="mb-6">
          <div
            className="flex items-center mb-2"
            onClick={() => setGenderExpanded(!genderExpanded)}
          >
            {genderExpanded ? <FaChevronDown /> : <FaChevronUp />}
            <h3 className="text-lg font-bold">Gender</h3>
          </div>
          {genderExpanded && (
            <>
              <div className="flex items-center mb-2">
                <input
                  id="gender-male"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="male"
                  checked={filters.gender.includes("male")}
                  onChange={() => handleFilters("gender", "male")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor="gender-male"
                  className="block text-sm "
                >
                  Male
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-female"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="female"
                  checked={filters.gender.includes("female")}
                  onChange={() => handleFilters("gender", "female")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor="gender-female"
                  className="block text-sm "
                >
                  Female
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="gender-unisex"
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value="unisex"
                  checked={filters.gender.includes("unisex")}
                  onChange={() => handleFilters("gender", "unisex")}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  htmlFor="gender-unisex"
                  className="block text-sm "
                  style={{
                    width: "50px",
                  }}
                >
                  Unisex
                </label>
              </div>
            </>
          )}
        </div>
        <div>
          <div
            className="flex items-center mb-2"
            onClick={() => setSizesExpanded(!sizesExpanded)}
          >
            {sizesExpanded ? <FaChevronDown /> : <FaChevronUp />}
            <h3 className="text-lg font-bold">Sizes</h3>
          </div>
          {sizesExpanded &&
            sizes.map((size: any) => (
              <div key={size.value} className="flex items-center mb-2">
                <input
                  id={`size-${size.value}`}
                  type="checkbox"
                  className="form-checkbox h-4 w-4  transition duration-150 ease-in-out"
                  value={size.value}
                  checked={filters.sizes.includes(size.value)}
                  onChange={() => handleFilters("sizes", size.value)}
                  style={{
                    width: "50px",
                  }}
                />
                <label
                  style={{
                    width: "50px",
                  }}
                  htmlFor={`size-${size.value}`}
                  className="block text-sm "
                >
                  {size.name}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterationSideBar;
