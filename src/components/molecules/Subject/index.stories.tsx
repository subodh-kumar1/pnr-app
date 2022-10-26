import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";

import Subject from ".";
import themeLight from "../../../themes/light";

export default {
  title: "MOLECULE/Subject",
  component: Subject,
} as ComponentMeta<typeof Subject>;

const Template: ComponentStory<typeof Subject> = (args) => (
  <ThemeProvider theme={themeLight}>
    <Subject {...args} />
  </ThemeProvider>
);

export const SubjectStory = Template.bind({});
SubjectStory.args = {
  courseId: 0,
  title: "System Design",
  topics: [
    {
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
          content: [
            "hello this is <b>first</b> para",
            "hello this is second para",
          ],
        },
      ],
    },
  ],
};
