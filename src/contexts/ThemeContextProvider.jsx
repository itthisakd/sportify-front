import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default function ThemeVariables({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
