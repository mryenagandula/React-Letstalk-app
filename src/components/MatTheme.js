
import { createTheme, ThemeProvider } from "@mui/material";
import React, { useContext } from "react";
import AppContext from "../AppContext";

export default function MatTheme({children}) {
    const {themeMode} = useContext(AppContext);

    const mode = React.useMemo( ()=>{
      return themeMode
    },[themeMode]);
  
    const theme = createTheme({
      palette: {
        mode,
      },
    });
  
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }