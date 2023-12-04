import React, { useState } from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import { v4 as uuidv4 } from "uuid";

const WeatherList = ({ weather }) => {
  // const [weeklyWeather, setWeeklyWeather] = useState();
  //Primero quiero los datos de weather que me interesan:
  const weatherData = weather.list;
  //Tratamiento de datos de weather:
  function organizeDataByDay(weatherData) {
    // Array de arrays con objetos de datos de weather de cada día [[{}, {}, ...], [{}, {}, ...], ...]
    const weeklyData = {};
    for (let entry of weatherData) {
      // Extract date and determine the day of the week
      const dateNumber = entry.dt_txt;
      const date = new Date(dateNumber);
      const dayOfWeek = date.toLocaleDateString("en-US", {
        weekday: "long",
      });
      // Creo el subarray correspondiente al dia de la semana
      if (!weeklyData[dayOfWeek]) {
        weeklyData[dayOfWeek] = [];
      }
      // Pusheo el objeto al subarray correspondiente
      weeklyData[dayOfWeek].push(entry);
    }
    return weeklyData;
  }
  const organizedData = organizeDataByDay(weatherData);
  console.log(organizedData);
  let organizedDataArray = Object.entries(organizedData);
  console.log(organizedDataArray);

  const printWeatherCards = () => {
    return organizedDataArray.map((dailyData) => (
      <WeatherCard key={uuidv4()} dailyData={dailyData} />
    ));
  };

  return (
    <>
      <section>
        <h2>
          This week's weather in {weather.city.name}, {weather.city.country}.
        </h2>
        <section>{printWeatherCards()}</section>
      </section>
    </>
  );
};

export default WeatherList;
