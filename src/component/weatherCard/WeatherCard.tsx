import React from 'react';
import styles from './weatherCard.module.css';

interface IWeather {
  id: number;
  name: string;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
}

interface WeatherCardProps {
  weather: IWeather;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div className={styles.weatherCard}>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img 
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} 
        alt={weather.weather[0].description}
      />
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Min: {weather.main.temp_min}°C, Max: {weather.main.temp_max}°C</p>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s, {weather.wind.deg}°</p>
    </div>
  );
}