import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#08313A",
    },
    secondary: {
      main: "#1A5653",
    },
    background: {
      default: "#00000",
      paper: "#c6dad9",
    },
    // background: {
    //     default: '#769c7a',
    //     paper: '#a6c9c9',
    // },
  },
  typography: {
    fontSize: 12,
    button: {
      textTransform: "none",
    },
  },
});

const themeLight = responsiveFontSizes(baseTheme);
export default themeLight;
