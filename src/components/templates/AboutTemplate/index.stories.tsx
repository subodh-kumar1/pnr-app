import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import AboutTemplate from ".";
import themeLight from "../../../themes/light";
import { Box } from "@mui/material";
import MyAppBar from "../../molecules/MyAppBar";
import Footer from "../../molecules/Footer";
import AboutBody from "../../molecules/AboutBody";

export default {
  title: "TEMPLATE/AboutTemplate",
  component: AboutTemplate,
} as ComponentMeta<typeof AboutTemplate>;

const Template: ComponentStory<typeof AboutTemplate> = (args) => (
  <ThemeProvider theme={themeLight}>
    <AboutTemplate {...args} />
  </ThemeProvider>
);

export const EmptyAboutTemplate = Template.bind({});
EmptyAboutTemplate.args = {
  header: <Box sx={{ bgcolor: "red", height: "50px" }} />,
  body: <Box sx={{ bgcolor: "blue", height: "500px" }} />,
  footer: <Box sx={{ bgcolor: "green", height: "50px" }} />,
};

export const FilledAboutTemplate = Template.bind({});
FilledAboutTemplate.args = {
  header: <MyAppBar />,
  body: <AboutBody />,
  footer: <Footer />,
};
