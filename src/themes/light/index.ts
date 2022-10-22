import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1C4670",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#278AB0",
    },
  },
  typography: {
    fontSize: 12,
    button: {
      textTransform: "none",
    },
    fontFamily: "sans-serif",
  },
});

const themeLight = responsiveFontSizes(baseTheme);
export default themeLight;
