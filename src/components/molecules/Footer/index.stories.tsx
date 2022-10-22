import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import Footer from ".";
import themeLight from "../../../themes/light";

export default {
  title: "MOLECULE/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <ThemeProvider theme={themeLight}>
    <Footer />
  </ThemeProvider>
);

export const FooterStory = Template.bind({});
