import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#758bfd",
        light: "#aeb8fe",
      },
      secondary: {
        main: "#27187e",
        dark: "#2e2c2f",
      },
      background: {
        default: "#f1f2f6",
      },
      warning: {
        main: "#ffa947",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
