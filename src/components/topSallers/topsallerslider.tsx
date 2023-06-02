import styles from "../../styles/Home.module.scss";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@mui/material";
import { responsive } from "../../constants/carousalResponsive";
import Link from "next/link";

const TopSallersSlides = ({ loading, ProductData }: any) => {
  const [loading1, setLoading] = useState(loading);
  useEffect(() => {
    console.log("ProductData", ProductData);
    if (ProductData?.length > 0) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {ProductData?.length == 0 && loading1 == false ? (
        <div className={styles.loader}>No Data Found</div>
      ) : null}

      {loading1 == true ? (
        <CircularProgress />
      ) : (
        <Carousel
          focusOnSelect={true}
          swipeable={true}
          responsive={responsive}
          draggable={true}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {ProductData?.map((slides: any, index: number) => {
            return (
              <Link href={`/${slides?._id}`}>
                <div className="p-4" key={index}>
                  <img
                    src={slides?.media[0].images[0]}
                    alt="image"
                    className={styles.TabsliderImg}
                  />
                  <div className="mb-12">
                    <p className="text-center">{slides?.brand}</p>
                    <p className="text-center">{slides?.title}</p>
                    <p className="text-center">Rs.{slides?.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default TopSallersSlides;
