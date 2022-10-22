import React from "react";
import { ThemeProvider } from "@emotion/react";
import CoursesPage from "../pages/CoursesPage";
import themeLight from "../themes/light";

const App = () => {
  return (
    <ThemeProvider theme={themeLight}>
      <CoursesPage />
    </ThemeProvider>
  );
};

export default App;
