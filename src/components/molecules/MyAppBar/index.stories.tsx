import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import MyAppBar from ".";
import themeLight from "../../../themes/light";

export default {
  title: "MOLECULE/MyAppBar",
  component: MyAppBar,
} as ComponentMeta<typeof MyAppBar>;

const Template: ComponentStory<typeof MyAppBar> = () => (
  <ThemeProvider theme={themeLight}>
    <MyAppBar />
  </ThemeProvider>
);

export const AppBarStory = Template.bind({});
