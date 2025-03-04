// eslint-disable-next-line react/prop-types
export const Temperature = ({ temp, cloudIcon }) => (
    <div className="temp">
      <h1 className="temp-value">{temp}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${cloudIcon}@2x.png`}
        alt="weather icon"
        className="weather-cloud-icon"
        loading="lazy"
      />
    </div>
  );