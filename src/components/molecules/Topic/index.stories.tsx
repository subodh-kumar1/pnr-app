import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";

import Topic from ".";
import themeLight from "../../../themes/light";

export default {
  title: "MOLECULE/Topic",
  component: Topic,
} as ComponentMeta<typeof Topic>;

const Template: ComponentStory<typeof Topic> = (args) => (
  <ThemeProvider theme={themeLight}>
    <Topic {...args} />
  </ThemeProvider>
);

export const TopicStory = Template.bind({});
TopicStory.args = {
  topic: "Introduction",
  subtopics: [
    {
      subtopic: "let's start",
      content: [
        `hello this is first para.sj
                    admasd
                    asdkad
                    asdkad`,
        "hello this is second para",
      ],
    },
    {
      subtopic: "let's continue",
      content: ["hello this is <b>first</b> para", "hello this is second para"],
    },
  ],
};
