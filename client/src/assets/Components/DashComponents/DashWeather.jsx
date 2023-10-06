import React, { useState, useEffect } from "react";

const DashWeather = ({ userData }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDay, setFiveDay] = useState(null)
  const API_KEY = "9eac51fee00a6f085485a74395484f9a";
  const [cityName, setCityName ] = useState(userData[0].city) //note this is the city for the api fetch


  useEffect(() => {
    setCityName(userData[0].city)
  }, [])

  useEffect(() => {
    const fetchWeatherData = async (cityName, API_KEY) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`
        );

        if (response.ok) {
          const data = await response.json();
          setFiveDay(data.list.slice(0, 5));
          setWeatherData(data)
        } else {
          console.error("Error fetching weather data eeeeck");
        }
      } catch (error) {
        console.error("Error fetching weather data oh no:", error);
      }
    };

    fetchWeatherData(cityName, API_KEY);
  }, [cityName, API_KEY]);

  useEffect(() => {
    if (weatherData) {
      console.log(weatherData);
    }
  }, [weatherData]);

  return (
    <div className="weather-container">
      {fiveDay ? (
        <div className="weather-info">
          {fiveDay.map((dayData, index) => (
            <div className="forecast-card" key={dayData.dt}>
          {new Date(dayData.dt * 1000).toLocaleDateString()}<br></br>
              {dayData.main.temp}&deg; C<br></br>
              {dayData.weather[0].main}
              <br></br>
              {dayData.clouds.all}% cover<br></br>
             
            </div>
          ))}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default DashWeather;
