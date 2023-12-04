import React from "react";
import { v4 as uuidv4 } from "uuid";

const WeatherCard = ({ dailyData }) => {
  return (
    <>
      <article className="weather-card">
        <h1>{dailyData[0]}</h1>
        {/* <h3>{dailyData[1]}</h3> */}
        <section key={uuidv4()} className="weather-info">
          {dailyData[1].map((hourlyData) => (
            <>
              <section key={uuidv4()} className="weather-info-hourly">
                <img
                  className="weather-icon"
                  src={`https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}.png`}
                  alt=""
                />
                <section className="weather-info-text">
                  <h3>{Math.round(hourlyData.main.temp - 273)}ºC</h3>
                  <h3>
                    {hourlyData.weather[0].description.charAt(0).toUpperCase() +
                      hourlyData.weather[0].description.slice(1)}
                  </h3>
                  <h3 className="weather-info-text-hour">
                    {hourlyData.dt_txt.split(" ")[1].slice(0, 5)}
                  </h3>
                </section>
              </section>
            </>
          ))}
        </section>
      </article>
    </>
  );
};

export default WeatherCard;
