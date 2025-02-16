import { createTheme } from "@mui/material";
import "./App.css";
import { ThemeProvider } from "@emotion/react";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["IBM"],
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>hello</h1> 
      </ThemeProvider>
    </>
  );
}

export default App;
