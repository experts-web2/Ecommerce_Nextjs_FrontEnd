import React from "react";
import Footer from "../components/footer/footer";
import { action } from "@storybook/addon-actions";

export default {
  title: "Footer",
  component: Footer,
};

const Template = (args: any) => <Footer {...args} />;

export const Default: any = Template.bind({});
Default.args = {};

export const Colored: any = Template.bind({});
Colored.args = {
  textColor: "red",
  onClick: action("Navigate to home page"),
};
