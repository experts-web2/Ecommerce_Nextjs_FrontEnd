import React from "react";
import { SpotlightData, brandsImages } from "../../../constants/staticData";
import styles from "../../../styles/Home.module.scss";
import Card from "../cards/card";
import { useEffect, useState } from "react";
import { getAllBrands } from "@/services/product.services";
import Link from "next/link";
const Brands = () => {
  const [brands, setBrands] = useState<any>([]);
  const getAllBrandss = async () => {
    const data = await getAllBrands();
    setBrands(data);
  };

  useEffect(() => {
    getAllBrandss();
  }, []);
  return (
    <>
      <p className={styles.eachSectionHeading}>OUR BRANDS</p>
      <div className={styles.brandsContainer}>
        {brands?.map((item: any, index: any) => {
          console.log("item", item);
          return (
            <Link href={`/collection/$item`} >
            <div key={index} data-testid={`brand-image-${index}`}>
              <h2>{item}</h2>
            </div>
            </Link>
          );
        })}
      </div>

      <p className={styles.eachSectionHeading}>#SPOTLIGHT</p>
      <h5 className={styles.eachSectionHeading}>
        We Know What Your Closet Needs!
      </h5>
      <div className={styles.cardcontainer} data-testid={"spotlight-card"}>
        {SpotlightData.map((item: any, index: number) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default Brands;
