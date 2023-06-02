import React, { useMemo } from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Serach = ({ search }: any) => {
  const router = useRouter();
  let products = useSelector((state: any) => state.products.products);
  const searchResult = useMemo(() => {
    return products?.filter((item: any) => {
      return item.type.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  const handleClick = (id: any) => {
    router.push(`/${id}`);
  };

  return (
    <div>
      <h2>YOUR SEARCH FOR "{search}*" REVEALED THE FOLLOWING:</h2>
      <div className={styles.searchContainer}>
        {searchResult?.map((slides: any, index: number) => {
          console.log("slides", slides);
          return (
            <div
              key={index}
              className={styles.searchContainer1}
              onClick={()=>handleClick(slides._id)}
            >
              <img
                src={slides.media[0].images[0]}
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
