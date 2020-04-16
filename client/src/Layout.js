import React from "react";
import Header from "./components/header";
import { SnackbarProvider } from "notistack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const Layout = props => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="app-layout">
        <Header />
          <div className="content">
            <SnackbarProvider maxSnack={3}>{props.children}</SnackbarProvider>
          </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;