import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherList from "./WeatherList";

const WeatherComponent = () => {
  const [city, setCity] = useState("madrid");
  // lat: 40.416775,
  //   lon: -3.703790
  //Le pongo unas coords por defecto porque si no está fallando
  const [coords, setCoords] = useState({
    lat: 0,
    lon: 0,
  });
  const [weather, setWeather] = useState();

  useEffect(() => {
    // Obtener geolocalización actual del usuario, al cargar la página
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  useEffect(() => {
    async function fetchCoords() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&units=metric&appid=${
              import.meta.env.VITE_APIKEY
            }`
          )
          .then((res) => {
            setCoords({
              lat: res.data[0].lat,
              lon: res.data[0].lon,
            });
            // console.log("Coords: " + res.data[0]);
          });
        // console.log(coords.lat, coords.lon);
      } catch (error) {
        console.log("Error fetching coords");
        setCoords();
      }
    }
    fetchCoords();
  }, [city]);

  useEffect(() => {
    async function fetchWeather() {
      try {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${
              coords.lat
            }&lon=${coords.lon}&appid=${import.meta.env.VITE_APIKEY}`
          )
          .then((res) => setWeather(res.data));
        // console.log(weather);
      } catch (error) {
        console.log("Error fetching weather");
        setWeather([]);
      }
    }
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
