import TopSallersSlides from "../components/topSallers/TopSallersSlides";
import { responsive } from "../constants/carousalResponsive";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgress } from "@mui/material";
import { sideDataClone } from "../constants/staticData";

export default {
  title: "TopSaller",
  component: TopSallersSlides,
};

export const withDataSlides = () => (
  <TopSallersSlides topSallerData={sideDataClone} activeTab="saller1" />
);

export const withoutDataSlides = () => (
  <TopSallersSlides topSallerData={[]} activeTab="saller1" />
);

export const withLoaderSlides = () => (
  <TopSallersSlides topSallerData={[]} activeTab="saller1" loading={true} />
);

const tworecords = sideDataClone.slice(0, 2);

export const GetTwoRecordsOnly = () => {
  return (
    <TopSallersSlides
      topSallerData={tworecords}
      activeTab="saller1"
      loading={false}
    />
  );
};

export const GetThreeRecordsOnly = () => {
  return (
    <TopSallersSlides
      topSallerData={sideDataClone.slice(0, 3)}
      activeTab="saller1"
      loading={false}
    />
  );
};
