import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import CourseCard from ".";
import themeLight from "../../../themes/light";
import { Box } from "@mui/material";

export default {
  title: "MOLECULE/CourseCard",
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => (
  <ThemeProvider theme={themeLight}>
    <Box padding={2}>
      <CourseCard {...args} />
    </Box>
  </ThemeProvider>
);

export const MyCourseCard = Template.bind({});

MyCourseCard.args = {
  courseId: 3,
  title: "System Design",
  noOfChapters: 20,
  description: "Very useful for Senior Software Engineers.",
};
