import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import CourseList from ".";
import themeLight from "../../../themes/light";

export default {
  title: "ORGANISM/CourseList",
  component: CourseList,
} as ComponentMeta<typeof CourseList>;

const Template: ComponentStory<typeof CourseList> = () => (
  <ThemeProvider theme={themeLight}>
    <CourseList />
  </ThemeProvider>
);

export const CourseListStory = Template.bind({});
