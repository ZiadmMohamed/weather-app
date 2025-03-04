import axios from "axios";
export const fetchWeatherData = async (setWeatherData) => {
// Constants
const API_KEY = "f2cfb7ab0cfea2f4abce3fe762b75bb2";
const LATITUDE = "24.71";
const LONGITUDE = "46.67";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`
    );

    const { main, weather } = response.data;
    const temp = Math.round(main.temp - 272.15);
    const minTemp = Math.round(main.temp_min - 272.15);
    const maxTemp = Math.round(main.temp_max - 272.15);
    const cloudIcon = weather[0].icon;

    setWeatherData({
      temp,
      status: weather[0].description,
      minTemp,
      maxTemp,
      cloudIcon,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
