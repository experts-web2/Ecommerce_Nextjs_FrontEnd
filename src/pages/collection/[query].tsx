import FilterationSideBar from "../../components/filterationSidebar/FilterSidebar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { getAllOrdersByType } from "@/services/product.services";



const SpecificCollections = () => {
  const router = useRouter();
  const { query } = router.query;
  const [filters, setFilters] = useState<any>();
  const [products, setProducts] = useState<any>([]);
  let filterTypes: any = {};

  if (
    query == "Mens" ||
    query == "Womens" ||
    query == "kids" ||
    query == "Accessories"
  ) {
    filterTypes = {
      field: "category",
      value: query,
    };
  }
  if(query == 'all-under-rs-1000'){
    filterTypes = {
      field: "price",
      value: 1000,
    };
  }
  const getProducts = async () => {
    const data = await getAllOrdersByType(filterTypes.field, filterTypes.value);
    setProducts(data?.products);
   await setFilters(data?.filters)
  };

  useEffect(() => {
    getProducts();
    console.log("filters",filters)
  }, [ query]);

  return (
    <>
      <div className="flex">
        <div style={{ width: "25%" }}>
          <FilterationSideBar
            filters={filters}
          />
        </div>
        <div>
          <p className="uppercase ml-8 my-4 text-lg font-bold">{query}</p>
          <div className="flex row justify-evenly flex-wrap">
            {products?.map((slides: any, index: number) => {
              return (
                <Link href={`/${slides._id}`}>
                  <div key={index}>
                    <img
                      src={
                        slides?.media[0]?.images[0] ||
                        slides?.media[0]?.images[1]
                      }
                      alt="image"
                      className={styles.TabsliderImg}
                    />
                    <div className="mb-12">
                      <p className=" text-center">{slides.vendor}</p>
                      <p className=" text-center">{slides.title}</p>
                      <p className=" text-center">Rs.{slides.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificCollections;
