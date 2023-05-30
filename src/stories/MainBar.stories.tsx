import React from "react";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MainBar from "../components/navBar/mainbar";
import styles from "../styles/navBar.module.scss";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default {
  title: "MainBar",
  component: MainBar,
  decorators: [
    (Story) => (
      <div
        style={{ margin: "3em", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<any> = (args:any) => <MainBar {...args} />;

export const OnlyIcons = Template.bind({});
OnlyIcons.args = {
  icons: (
    <>
      <Link href="#">
        <FaFacebook />
      </Link>
      <Link href="#">
        <FaInstagram />
      </Link>
    </>
  ),
};

export const NoLoginOrRegister = Template.bind({});
NoLoginOrRegister.args = {
  contact: <div className={styles.contact}></div>,
  auth: <div></div>,
};

export const Empty = Template.bind({});
Empty.args = {};
