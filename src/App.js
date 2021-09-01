import logo from "./logo.svg";
import "./App.css";
import { useTheme, useMediaQuery } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./Layout/Layout";

const customTheme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito-Regular", "sans-serif"].join(","),
    fontSize: 12,
  },
  overrides: {
    MuiButton: {
      root: {
        height: 40,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
