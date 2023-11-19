import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import template from "./assets/default.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import "font-awesome/css/font-awesome.min.css";
import {
  faLocationArrow,
  faSun,
  faSnowflake,
  faFan,
  faCloud,
  faTachometerAlt,
  faWind,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faLocationArrow,
  faSnowflake,
  faSun,
  faCloud,
  faFan,
  faWind,
  faThermometerHalf,
  faTachometerAlt
);
const App = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [bgImage, setBgImage] = useState(template);
  const weatherapiKey=import.meta.env.VITE_OPENWEATHER_API_KEY;
  const imageapiKey=import.meta.env.VITE_UNSPLASH_API_KEY;
  const getWeather = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapiKey}`
        )
        .then((res) => setData(res.data));
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };
  const getImages = async (desc) => {
    try {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?query=${desc}&client_id=${imageapiKey}`
        )
        .then((res) => setBgImage(res.data.results[0].urls.regular));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (data && data.weather && data.weather[0] && data.weather[0].main) {
      getImages(data.weather[0].main);
    }
  }, [data]);
  return (
    <React.Fragment>
      <div
        className={`min-h-screen flex  justify-center  p-2 text-white  `}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center ">
          <div
            className={` p-4 rounded shadow-md max-w-md  bg-opacity-60 backdrop-blur-lg   backdrop-filter`}
          >
            <h1 className="text-3xl text-black font-bold mb-4">Weather App</h1>
            <form className="flex items-center" onSubmit={getWeather}>
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full ">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 bg-transparent text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-gray-600  dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium  bg-gray-700 rounded-lg border border-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
            <div>
              {Object.keys(data).length > 0 && (
                <>
                  <section>
                    <div className="flex text-center justify-center  py-1 my-2">
                      {data.weather ? (
                        <div className="">
                          <img
                            className="w-32 h-full"
                            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                            alt={data.name}
                          />
                        </div>
                      ) : null}
                      <div className="text-2xl font-bold flex  py-1 items-center p-3 my-2">
                        <FontAwesomeIcon
                          icon="location-arrow"
                          className="text-red-700"
                        />
                        <div className="mx-2">
                          {data.name ? (
                            <h1>{data.name}</h1>
                          ) : (
                            <h1 className="text-3xl">Location</h1>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col my-2 py-1">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon="thermometer-half"
                          size="1x"
                          color="orange"
                        />
                        <h1 className="mx-2 text-2xl">Temperature</h1>
                      </div>
                      <div className="flex items-center justify-center text-xl divide-x-[3px]">
                        {data.main ? (
                          <h1 className="text-center px-3 text-lg font-bold">
                            {Math.round(data.main.temp - 273)}°C
                          </h1>
                        ) : null}
                        {data.main ? (
                          <h1 className="text-center px-3 font-bold">
                            {Math.round(data.main.temp)}°F
                          </h1>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-col my-2 py-1">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon="cloud-sun" size="1x" />
                        <h1 className="text-center text-2xl mx-2">Condition</h1>
                      </div>
                      {data.weather ? (
                        <h1 className="text-xl text-center font-bold">
                          {data.weather[0].description}
                        </h1>
                      ) : null}
                    </div>

                    <div className="flex flex-col my-2">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon="tint" size="1x" color="pink" />
                        <h1 className="text-center text-2xl mx-2">Humidity </h1>
                      </div>
                      {data.main ? (
                        <h1 className="text-lg text-center font-bold">
                          {data.main.humidity} %
                        </h1>
                      ) : null}
                    </div>

                    <div className="flex flex-col my-2 py-1">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon="tachometer-alt"
                          size="1x"
                          color="red"
                        />
                        <h1 className="text-center text-2xl mx-2">Pressure</h1>
                      </div>
                      {data.main ? (
                        <h1 className="text-lg text-center font-bold">
                          {data.main.pressure} Pa
                        </h1>
                      ) : null}
                    </div>

                    <div className="flex flex-col my-2">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faWind}
                          size="1x"
                          color="green"
                        />
                        <h1 className="text-center text-2xl py-1 mx-2">
                          Wind Speed
                        </h1>
                      </div>
                      <div className="flex items-center justify-center">
                        <FontAwesomeIcon
                          spin
                          icon={faFan}
                          size="3x"
                          color="blue"
                          className="mx-1"
                        />
                        {data.wind ? (
                          <h1 className="text-lg text-center mx-1 font-bold">
                            {data.wind.speed} knots
                          </h1>
                        ) : null}
                      </div>
                    </div>
                    {/* <div className="flex flex-row justify-evenly items-center">
                    <div className=" ">
                      <h1 className="text-2xl   text-center ">
                        Latitude
                      </h1>
                      {data.coord ? (
                        <h1 className=" text-lg text-center">
                          {data.coord.lat}
                        </h1>
                      ) : null}
                    </div>
                    <div className="">
                      <h1 className="  text-center text-2xl">
                        Longitude
                      </h1>
                      {data.coord ? (
                        <h1 className=" text-lg text-center">
                          {data.coord.lon}
                        </h1>
                      ) : null}
                    </div>
                  </div> */}
                  </section>
                </>
              ) }
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
