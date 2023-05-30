import { sideDataClone } from "@/constants/staticData";
import React, { useMemo } from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";

const Serach = ({ search }: any) => {
  const router = useRouter();
  const searchResult = useMemo(() => {
    return sideDataClone.filter((item: any) => {
      return item.type.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  const handleClick = async (e: any) => {
    e.preventDefault();
    await router.push(`/${3}`);
  };

  return (
    <div>
      <h2>YOUR SEARCH FOR "{search}*" REVEALED THE FOLLOWING:</h2>
      <div className={styles.searchContainer}>
        {searchResult?.map((slides: any, index: number) => {
          return (
            <div
              key={index}
              className={styles.searchContainer1}
              onClick={handleClick}
            >
              <img
                src={slides.featured_image}
                alt="image"
                className={styles.TabsliderImg}
                onMouseEnter={(e) => {
                  if (slides.hoverImage) {
                    e.currentTarget.src = slides.hoverImage;
                    e.currentTarget.classList.add(styles.TabsliderImg);
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = slides.featured_image;
                }}
              />
              <div className={styles.detail}>
                <p>{slides.vendor}</p>
                <p>{slides.title}</p>
                <p>Rs.{slides.price}</p>
              </div>
              <div className={styles.Sizes}>
                <ul className={styles.list}>
                  {slides?.variants?.map((size: any, idx: number) => (
                    <li key={idx}>{size?.public_title}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Serach;
