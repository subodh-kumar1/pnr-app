import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import SubjectTemplate from ".";
import themeLight from "../../../themes/light";
import MyAppBar from "../../molecules/MyAppBar";
import Footer from "../../molecules/Footer";
import SubjectBody from "../../organisms/SubjectBody";

export default {
  title: "TEMPLATE/SubjectTemplate",
  component: SubjectTemplate,
} as ComponentMeta<typeof SubjectTemplate>;

const Template: ComponentStory<typeof SubjectTemplate> = (args) => (
  <ThemeProvider theme={themeLight}>
    <SubjectTemplate {...args} />
  </ThemeProvider>
);

export const EmptySubjectTemplate = Template.bind({});
EmptySubjectTemplate.args = {
  header: <Box sx={{ bgcolor: "red", height: "50px" }} />,
  body: <Box sx={{ bgcolor: "blue", height: "500px" }} />,
  footer: <Box sx={{ bgcolor: "green", height: "50px" }} />,
};

export const FilledSubjectTemplate = Template.bind({});
FilledSubjectTemplate.args = {
  header: <MyAppBar />,
  body: <SubjectBody />,
  footer: <Footer />,
};
