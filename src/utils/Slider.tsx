import "keen-slider/keen-slider.min.css";
import styles from "../styles/Slider.module.scss";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HomeSliderImageInterface } from "../interface/Interfaces";
import Link from "next/link";

const Slider = ({ SliderImages }: HomeSliderImageInterface) => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    created: () => setLoaded(true),
    mode: "free-snap",
    loop: true,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 15,
    },
  });

  const handlePrevClick = () => {
    if (slider.current) {
      slider.current.prev();
    }
  };

  const handleNextClick = () => {
    if (slider.current) {
      slider.current.next();
    }
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ position: "relative", margin: "10px 0px" }}
      >
        {SliderImages.map((image: string, index: number) => (
          <Link href={`/collection/summer-collection-2023`}>
            <div
              key={index}
              className="keen-slider__slide number-slide1 myclass"
            >
              <img src={image} alt="image" className={styles.sliderImg} />
            </div>
          </Link>
        ))}
      </div>

      {loaded && (
        <div className={styles.sliderControls}>
          <button
            onClick={handlePrevClick}
            className={styles.sliderControlsPrevious}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className={styles.sliderControlsNext}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Slider;
