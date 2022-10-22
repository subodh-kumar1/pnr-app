import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryButton from ".";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "../../../../themes/light";

export default {
  title: "ATOM/Button",
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <ThemeProvider theme={themeLight}>
    <PrimaryButton {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  label: "Primary Button",
  onClick: () => {
    /*no ops */
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  label: "Disabled Button",
  onClick: () => {
    /*no ops */
  },
};
