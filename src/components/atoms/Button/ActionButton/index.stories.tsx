import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ActionButton from ".";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "../../../../themes/light";

export default {
  title: "ATOM/Button",
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ThemeProvider theme={themeLight}>
    <ActionButton {...args} />
  </ThemeProvider>
);

export const Action = Template.bind({});

Action.args = {
  label: "Action Button",
  onClick: () => {
    /*no ops */
  },
};
