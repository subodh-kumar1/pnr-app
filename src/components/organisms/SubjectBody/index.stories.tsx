import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";

import SubjectBody from ".";
import themeLight from "../../../themes/light";

export default {
  title: "ORGANISM/SubjectBody",
  component: SubjectBody,
} as ComponentMeta<typeof SubjectBody>;

const Template: ComponentStory<typeof SubjectBody> = () => (
  <ThemeProvider theme={themeLight}>
    <SubjectBody />
  </ThemeProvider>
);

export const SubjectBodyStory = Template.bind({});
