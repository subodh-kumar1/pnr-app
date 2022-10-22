import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import themeLight from "../../../themes/light";

export default {
  title: "ATOM/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <ThemeProvider theme={themeLight}>
    <Typography {...args} />
  </ThemeProvider>
);

export const Text = Template.bind({});

Text.args = {
  variant: "h1",
  children: "Text",
  paragraph: false,
};
