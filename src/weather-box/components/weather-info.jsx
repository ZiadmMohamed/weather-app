// eslint-disable-next-line react/prop-types
export const WeatherInfo = ({ minTemp, maxTemp , t }) => (
  <div className="weather-info">
    <p className="info-text">
      {t("min")}: <span>{minTemp}</span>
    </p>
    <p className="info-text">
      {t("max")}: <span>{maxTemp}</span>
    </p>
  </div>
);