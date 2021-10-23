import { colors } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: colors.indigo[500],
    },
    secondary: {
      main: colors.indigo[500],
    },
    text: {
      primary: colors.common.black,
      secondary: colors.common.white,
    },
  },
  shadows,
  typography,
});

export default theme;
