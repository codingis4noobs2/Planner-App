import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyCustomWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'c48cbd659dfad8519995077d85893bea';

    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching weather data');
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          setError('Error retrieving location');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
    }

    // Fetch data every 10 minutes (adjust as needed)
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            setError('Error retrieving location');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by your browser');
        setLoading(false);
      }
    }, 600000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return <p>Unable to fetch weather data</p>;
  }

  const { main, description, icon } = weatherData.weather[0];
  const { temp, feels_like, humidity } = weatherData.main;

  return (
    <div>
      <p>Current Weather:</p>
      <p className="weather">{description}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
      <p className="temperature">{temp}°C</p>
      <p className="feels-like">Feels like: {feels_like}°C</p>
      <p className="humidity">Humidity: {humidity}%</p>
    </div>
  );
}
