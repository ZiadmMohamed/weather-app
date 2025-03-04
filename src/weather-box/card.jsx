/* eslint-disable react/prop-types */
import CloudIcon from "@mui/icons-material/Cloud";
import { format } from "date-fns";
import { ar, enUS } from "date-fns/locale";
import { useEffect, useState, useCallback } from "react";
import { LANGUAGES } from "../common/common-types";
import { CardHeader } from "./components/card-header";
import { Temperature } from "./components/temerature";
import { WeatherInfo } from "./components/weather-info";


function Card({ weatherData, t, language }) {
  const formatCurrentDate = useCallback(() =>
    format(new Date(), "MMMM do yyyy, h:mm:ss a", {
      locale: language == LANGUAGES.AR ? ar : enUS,
    }), [language]);
  const [dateS, setDate] = useState(formatCurrentDate());

  const {
    city = t("city"), 
    date = dateS, 
    temp = "--",
    minTemp = "--",
    maxTemp = "--",
    cloudIcon = "01d",
  } = weatherData || {};

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(formatCurrentDate());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [language,formatCurrentDate]);

  return (
    <div className="card">
      <CardHeader city={city} date={date} />
      <div className="card-body">
        <div className="body-content">
          <Temperature temp={temp} cloudIcon={cloudIcon} />
          <p className="weather-status">{t("status")}</p>
          <WeatherInfo minTemp={minTemp} maxTemp={maxTemp} t={t} />
        </div>
        <CloudIcon className="weather-icon" style={{ fontSize: "200px" }} />
      </div>
    </div>
  );
}

export default Card;
