import React from "react";

const WeatherForm = ({handleSubmit}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" id="city" placeholder="City to search..."/>
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default WeatherForm;
