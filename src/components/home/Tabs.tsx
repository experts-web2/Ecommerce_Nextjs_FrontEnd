import { useState } from "react";
import styles from "./../../styles/Home.module.scss";

const Tabs = ({ DetailPageTabs, product }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const productDescription = product.description
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "");
  const productDetails = productDescription.split(/\.|\n/);
  const detailsList = productDetails.map((detail: string) => {
    return <li>{detail.trim()}</li>;
  });
  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.tablabels}>
          {DetailPageTabs?.map((tab: any, index: any) => (
            <div
              key={index}
              className={activeTab === index ? styles.active : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tabcontent}>
        <ul>
          {DetailPageTabs[activeTab].id == 1
            ? detailsList
            : DetailPageTabs[activeTab]?.content?.map((item: any) => {
                return <li>{item}</li>;
              })}
        </ul>
      </div>
    </>
  );
};

export default Tabs;
