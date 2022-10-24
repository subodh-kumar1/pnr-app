import React from "react";
import { ThemeProvider } from "@emotion/react";
import themeLight from "../themes/light";
import RouteHandler from "./RouteHandler";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <RouteHandler />
    </ThemeProvider>
  );
};

export default App;
