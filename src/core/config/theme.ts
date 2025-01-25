import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455A64",
    },
    secondary: {
      main: "#795548",
    },
    error: {
      main: "#FF5722",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h6: {
      fontWeight: 700,
    },
  },
});

export default theme;
