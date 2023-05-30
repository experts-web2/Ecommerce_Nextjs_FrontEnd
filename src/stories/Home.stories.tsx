import React, { FunctionComponent } from "react";
import Home from "../pages/index";
import { action } from "@storybook/addon-actions";
import styles from "./../../styles/Home.module.scss";
import { SpotlightData, brandsImages } from "../constants/staticData";
import Card from "../components/home/cards/card";
import Slider from "@/utils/slider";
import TopSallers from "../components/topSallers/topsaller";
import MegaDiscount from "../components/home/megaDiscount/MegaDiscount";
import Brands from "../components/home/brands/brands";
export default {
  title: "Home",
  component: Home,
};

const Template: any = (args: any) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
