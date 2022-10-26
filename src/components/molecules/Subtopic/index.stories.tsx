import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";

import Subtopic from ".";
import themeLight from "../../../themes/light";

export default {
  title: "MOLECULE/Subtopic",
  component: Subtopic,
} as ComponentMeta<typeof Subtopic>;

const Template: ComponentStory<typeof Subtopic> = (args) => (
  <ThemeProvider theme={themeLight}>
    <Subtopic {...args} />
  </ThemeProvider>
);

export const SubtopicStory = Template.bind({});
SubtopicStory.args = {
  subtopic: "let's start",
  content: [
    `hello this is first para.sj
                    admasd
                    asdkad
                    asdkad`,
    "hello this is second para",
  ],
};
