import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
import App from "./App";

import GlobalStyles from "./theme/GlobalStyles";
import { ThemeProvider } from "@material-ui/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
