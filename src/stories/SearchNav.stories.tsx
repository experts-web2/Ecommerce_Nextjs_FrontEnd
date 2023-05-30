import React, { FunctionComponent } from "react";
import SearchNav from "../components/navBar/searchbar";
import { action } from "@storybook/addon-actions";

interface SearchBarProps {
  textColor: string;
  title: string;
  fontSize: number;
  searchText?: string;
  setSearch: (value: string) => void;
  search: string;
}
export default {
  title: "SearchNav",
  component: SearchNav,
};

const Template: FunctionComponent<{ args: any }> = (args) => (
  <SearchNav {...args} />
);

export const Default: any = Template.bind({});
Default.args = {
  title: "Shoe Market",
};

export const HeadingCenter = () => (
  <SearchNav
    title="Shoe Market"
    textColor="black"
    fontSize="2rem"
    searchText="Search for shoes"
  />
);

export const SearchAndAddToCart = () => (
  <SearchNav
    title="Shoe Market"
    textColor="black"
    fontSize="1.5rem"
    searchText="Search for shoes"
  />
);

export const DifferentOptions = () => (
  <SearchNav
    title="Shoe Market"
    textColor="black"
    fontSize="1rem"
    searchText="Search for shoes"
  />
);

export const ChnagedText: any = Template.bind({});
ChnagedText.args = {
  title: "This is a new title",
  textColor: "red",
  fontSize: "20px",
  searchText: "Shoes whose price is less than 1000",
};

export const Colored: any = Template.bind({});
Colored.args = {
  textColor: "red",
  onClick: action("Navigate to home page"),
};
