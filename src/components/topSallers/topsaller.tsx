import React, { useEffect, useState } from "react";
import TopSallersSlides from "./topsallerslider";
import { CircularProgress } from "@mui/material";
import { menuData, topSallerData } from "../../constants/staticData";
import styles from "./../../styles/Home.module.scss";
import { getAllOrdersByType } from "@/services/product.services";

const TopSallers = () => {
  const [activeTab, setActiveTab] = useState<any>(menuData[0].title);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);

  const filterData = async () => {
    const filterObject = {
      field: "category",
      value: activeTab,
    };
    const data = await getAllOrdersByType(filterObject.field, filterObject.value);
    setProducts(data?.products);
  };

  useEffect(() => {
    filterData();
  }, [activeTab]);

  return (
    <>
      {loading && (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      )}
      <div className={styles.tabContainer}>
        <p className={styles.eachSectionHeading}>TopSallers</p>
        <div className={styles.tablabels}>
          {menuData?.map((tab, index) => (
            <div
              key={index}
              className={activeTab === tab.title ? styles.active : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      {topSallerData?.length > 0 && (
        <TopSallersSlides ProductData={products} activeTab={activeTab} />
      )}
    </>
  );
};

export default TopSallers;
