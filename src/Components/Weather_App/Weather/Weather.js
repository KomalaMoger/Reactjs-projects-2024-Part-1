import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./Weather.css";
import { TiWeatherCloudy } from "react-icons/ti";
import { RiCloudWindyLine } from "react-icons/ri";

export default function Weather() {
  const [search, setSearch] = useState("");
  // when we click search until the api loading we will keep one loading
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      // for api -go to https://openweathermap.org/
      // 1-sign in-apikey is generated
      // 2-go to api(tab)
      // 3-go to Current Weather Data---->go to api doc
      // 4-copy the link and below
      // 5-remove lat and lon
      // 6-write query parameter-which is search value
      // 7-api key will be our ow generated api key
      // 8-copy and paste below(which is after appid=)
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c1c1c92802c833e235fe241bf80b78f2`
      );
      const data = await response.json();
      // once we get data we make update the below code
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
      // console.log(data, "data");
    } catch (err) {
      // if something error then we make setloading has false
      setLoading(false);
      console.log(err);
    }
  }
  async function handleSearch() {
    // every time we load page or refresh the page the data will be fetch from this city(default city)
    fetchWeatherData(search);
    // in api inside lat and long we will pass city name
  }
  const getCurrentDate = () => {
    //en-us----> US English uses month-day-year order
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  // on page load we need display some data(default data)-for that we use below code
  useEffect(() => {
    fetchWeatherData("bangalore");
  }, []);
  console.log(weatherData);
  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="weather-container">loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="weather-container">
            <div className="city-name">
              <h2>
                {/* <TiWeatherCloudy className="weather-icon" /> */}
                {weatherData?.name},<span>{weatherData?.sys?.country}</span>
              </h2>
            </div>
            <div className="date">
              {/* we are going create utlity function */}
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">{weatherData?.main?.temp}</div>
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="weather-info">
              <div>
                <div>
                  <p className="wind">
                    Wind Speed: {weatherData?.wind?.speed} <RiCloudWindyLine />
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="humiditiy">
                    Humidity: {weatherData?.main?.humidity}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
