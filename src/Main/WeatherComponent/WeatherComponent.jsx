import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState({});
  const [weather, setWeather] = useState();

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentCoords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          console.log(currentCoords);
          resolve(currentCoords);
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    });
  };

  useEffect(() => {
    console.log("I'm gonna fetch coords");
    const fetchCoords = async () => {
      try {
        const locationCoords = await getLocation();
        setCoords(locationCoords);
      } catch (error) {
        console.log("Error fetching coords");
        setCoords({});
      }
    };
    fetchCoords();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (coords && coords.lat && coords.lon) {
          const fetchedWeather = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${
              coords.lat
            }&lon=${coords.lon}&appid=${import.meta.env.VITE_APIKEY}`
          );
          setWeather(fetchedWeather.data);
        }
      } catch (error) {
        console.log("Error fetching weather", error);
        setWeather([]);
      }
    };

    fetchWeather();
  }, [coords]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(event.target.city.value);
  };

  return (
    <>
      <WeatherForm handleSubmit={handleSubmit} />
      {weather ? <WeatherList weather={weather} /> : null}
    </>
  );
};

export default WeatherComponent;
