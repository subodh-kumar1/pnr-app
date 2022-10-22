import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import CoursesTemplate from ".";
import themeLight from "../../../themes/light";
import { Box, Container } from "@mui/material";
import MyAppBar from "../../molecules/MyAppBar";
import CourseList from "../../organisms/CourseList";
import Footer from "../../molecules/Footer";

export default {
  title: "TEMPLATE/CoursesTemplate",
  component: CoursesTemplate,
} as ComponentMeta<typeof CoursesTemplate>;

const Template: ComponentStory<typeof CoursesTemplate> = (args) => (
  <ThemeProvider theme={themeLight}>
    <CoursesTemplate {...args} />
  </ThemeProvider>
);

export const EmptyCoursesTemplate = Template.bind({});
EmptyCoursesTemplate.args = {
  header: <Box sx={{ bgcolor: "red", height: "50px" }} />,
  body: <Box sx={{ bgcolor: "blue", height: "500px" }} />,
  footer: <Box sx={{ bgcolor: "green", height: "50px" }} />,
};

export const FilledCoursesTemplate = Template.bind({});
FilledCoursesTemplate.args = {
  header: <MyAppBar />,
  body: <CourseList />,
  footer: <Footer />,
};
