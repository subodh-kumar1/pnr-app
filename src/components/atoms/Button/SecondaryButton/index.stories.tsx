import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SecondaryButton from ".";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "../../../../themes/light";

export default {
  title: "ATOM/Button",
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (args) => (
  <ThemeProvider theme={themeLight}>
    <SecondaryButton {...args} />
  </ThemeProvider>
);

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary Button",
  onClick: () => {
    /*no ops */
  },
};
