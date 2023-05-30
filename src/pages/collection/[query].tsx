import FilterationSideBar from "../../components/filterationSidebar/FilterSidebar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { getAllOrdersByType } from "@/services/product.services";

const initialFilters: any = {
  brands: [],
  gender: [],
  sizes: [],
};

const SpecificCollections = () => {
  const router = useRouter();
  const { query } = router.query;
  const [filters, setFilters] = useState(initialFilters);
  const [products, setProducts] = useState<any>([]);
  const getProducts = async () => {
    const data = await getAllOrdersByType(query);
    setProducts(data);
  };

  // ) &&
  // filters.sizes.every(
  //   (size: string) => size === "" || item.options[0].values.includes(size)
  // )

  // useEffect(() => {
  // }, [query]);
  
  useEffect(() => {
    getProducts();
    products?.forEach((item: any) => {
      console.log("item", item);
      if (
        filters.brands.every(
          (brand: string) => brand == "" || brand == item.brand
        )
      ) {
        setProducts((prevProducts: any) => [...prevProducts, item]);
      }
    });
  }, [filters,query]);

  return (
    <>
      <div className="flex">
        <div style={{ width: "25%" }}>
          <FilterationSideBar
            products={products}
            setFilters={setFilters}
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
