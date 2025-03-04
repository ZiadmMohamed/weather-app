import { Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./weather-box/card";
import { fetchWeatherData } from "./weather-box/weather-methods";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./common/common-types.js";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [language, setLanguage] = useState(LANGUAGES.AR);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    fetchWeatherData(setWeatherData);
  }, [i18n, language]);

  const handleLanguageChange = () => {
    setLanguage((prevLang) =>
      prevLang === LANGUAGES.AR ? LANGUAGES.EN : LANGUAGES.AR
    );
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" dir={language === LANGUAGES.EN ? "ltr" : "rtl"}>
          <Card weatherData={weatherData} t={t} language={language}  />
          <Button variant="text" color="white" onClick={handleLanguageChange}>
            {language === LANGUAGES.AR ? "english" : "arabic"}
          </Button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
