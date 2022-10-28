import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      // main: "#1C4670",
      // main:"#272727",
      main: "#03314b",
      contrastText: "#FFFFFF",
    },
    secondary: {
      // main: "#278AB0",
      main: "#2ce080"
    },
    background:{
      default:"#272727",
      // paper:"#142D4B",
      // paper: "#2ce080",
      paper: "#f1f6f4"
      // paper:"rgba(44, 66, 93, 0.8)"
    }
  },
  typography: {
    fontSize: 12,
    button: {
      textTransform: "none",
    },
    h5:{
      color:"#03314b"
    },
    fontFamily: "sans-serif",
  },
});

const themeLight = responsiveFontSizes(baseTheme);
export default themeLight;
