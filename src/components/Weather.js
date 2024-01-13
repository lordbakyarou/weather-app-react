import React, { useEffect, useState } from "react";

// import clearClouds from "../emotes/Frame-248.png";

import clearCloud from "../emotes/icon.png";
import fewCloud from "../emotes/clearClouds.png";
import mist from "../emotes/icon (2).png";
import rain from "../emotes/icon (3).png";
import snow from "../emotes/icon (4).png";
import thunderstorm from "../emotes/icon (5).png";

import nightClearCloud from "../emotes/icon (6).png";
import nightFewCloud from "../emotes/icon (7).png";
import nightMist from "../emotes/icon (8).png";
import nightRain from "../emotes/icon (9).png";
import nightSnow from "../emotes/icon (10).png";
import nightThunderstorm from "../emotes/icon (11).png";

const Weather = ({ data }) => {
  console.log(data);

  const [dayOrNight, setDayOrNight] = useState("");

  const [weatherIcon, setWeatherIcon] = useState("");

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (data && data.data) {
      const timezoneOffsetSeconds = data.data.timezone;
      console.log(data.data.timezone, "timezone");

      const currentUTC = new Date();

      const localTime = new Date(
        currentUTC.getTime() + timezoneOffsetSeconds * 1000
      );

      const currentHour = localTime.getUTCHours();

      const daylightStartHour = 6; // 6 AM
      const daylightEndHour = 18; // 6 PM

      const isDaytime =
        currentHour >= daylightStartHour && currentHour < daylightEndHour;

      if (isDaytime) {
        setDayOrNight("day");
      } else {
        setDayOrNight("night");
      }
    }

    // if (data && data.data) {
    //   findIcon(data.data);
    // }

    // console.log(data.data);
  }, [data]);

  console.log(currentTime);
  function findIcon(data) {
    if (data.weather[0].description === "clear sky" && dayOrNight === "day") {
      return clearCloud;
    } else if (
      data.weather[0].description === "few clouds" &&
      dayOrNight === "day"
    ) {
      return fewCloud;
    } else if (data.weather[0].description === "mist" && dayOrNight === "day") {
      return mist;
    } else if (data.weather[0].description === "rain" && dayOrNight === "day") {
      return rain;
    } else if (data.weather[0].description === "snow" && dayOrNight === "day") {
      return snow;
    } else if (
      data.weather[0].description === "thunderstorm" &&
      dayOrNight === "day"
    ) {
      return thunderstorm;
    } else if (
      data.weather[0].description === "clear sky" &&
      dayOrNight === "night"
    ) {
      return nightClearCloud;
    } else if (
      data.weather[0].description === "few clouds" &&
      dayOrNight === "night"
    ) {
      return nightFewCloud;
    } else if (
      data.weather[0].description === "mist" &&
      dayOrNight === "night"
    ) {
      return nightMist;
    } else if (
      data.weather[0].description === "rain" &&
      dayOrNight === "night"
    ) {
      return nightRain;
    } else if (
      data.weather[0].description === "snow" &&
      dayOrNight === "night"
    ) {
      return nightSnow;
    } else if (
      data.weather[0].description === "thunderstorm" &&
      dayOrNight === "night"
    ) {
      return nightThunderstorm;
    } else if (dayOrNight === "day") {
      return clearCloud;
    } else if (dayOrNight === "night") {
      return nightClearCloud;
    }
  }

  return (
    <div className="internal-weather">
      {data.data && (
        <div className="weather-actual-data">
          <h1 className="cityname">{data.data.name}</h1>

          <h1 className="temp">
            {Math.floor((data.data.main.temp - 273.15) * (9 / 5) + 32)}°F{" "}
          </h1>
          {/* <h1 className="status">{data.data.weather[0].description}</h1> */}

          <img className="image" src={findIcon(data.data)} alt="clear-cloud" />
        </div>
      )}
    </div>
  );
};

export default Weather;
