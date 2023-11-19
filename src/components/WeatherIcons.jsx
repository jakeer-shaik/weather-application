import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "font-awesome/css/font-awesome.min.css";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudMoon,
  faSnowflake,
  faTornado,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faWater,
  faSmog
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faCloud,
  faCloudSun,
  faSmog,
  faCloudMoon,
  faSnowflake,
  faTornado,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
  faWater
);
const weatherData = [
  {
    description: 'Clear Sky',
    icon: <FontAwesomeIcon icon="sun" />,
  },
  {
    description: 'Few Clouds',
    icon: <FontAwesomeIcon icon="cloud" />,
  },
  {
    description: 'Scattered Clouds',
    icon: <FontAwesomeIcon icon="cloud-sun" />,
  },
  {
    description: 'Broken Clouds',
    icon: <FontAwesomeIcon icon="cloud-moon" />,
  },
  {
    description: 'Shower Rain',
    icon: <FontAwesomeIcon icon="cloud-showers-heavy" />,
  },
  {
    description: 'Rain',
    icon: <FontAwesomeIcon icon="cloud-rain" />,
  },
  {
    description: 'Thunderstorm',
    icon: <FontAwesomeIcon icon="bolt" />,
  },
  {
    description: 'Snow',
    icon: <FontAwesomeIcon icon="snowflake" />,
  },
  {
    description: 'Mist',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Drizzle',
    icon: <FontAwesomeIcon icon="water" />,
  },
  {
    description: 'Smoke',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Haze',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Dust',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Fog',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Sand',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Ash',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Squall',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Tornado',
    icon: <FontAwesomeIcon icon="smog" />,
  },
  {
    description: 'Cloudy',
    icon: <FontAwesomeIcon icon="cloud" />,
  },
];


  
const WeatherIcons = ({data}) => {

  const findIconByDescription=(description)=> {
    const weatherItem = weatherData.find((item) =>
      item.description.toLowerCase() === description
    );
  
    return weatherItem ? weatherItem.icon : null;
  }
  const weatherDescription = data.weather && data.weather[0].main.toLowerCase() ;
  const icon = findIconByDescription(weatherDescription);
  return (
    <div>{icon}</div>
  )
}

export default WeatherIcons



/*

<div className="font-bold flex flex-row justify-evenly items-center">
                  <FontAwesomeIcon icon="location-arrow" />
                    <div className="text-2xl">
                      {data.name ? (
                        <h1>{data.name}</h1>
                      ) : (
                        <h1 className="font-bold">Location</h1>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-row justify-evenly items-center">
                    <div className="w-32 h-20 m-0.5 opacity-30shadow rounded hover:opacity-75">
                      <h1 className="  text-center text-lg">
                        Temperature <FontAwesomeIcon icon="thermometer-half" />
                      </h1>
                      {data.main ? (
                        <h1 className=" text-2xl text-center">
                          {Math.round(data.main.temp - 273)}°C
                        </h1>
                      ) : null}
                    </div>
                    <div className="w-32 h-20 m-0.5 opacity-30shadow rounded hover:opacity-75">
                      <h1 className="  text-center text-lg">
                        Temperature <FontAwesomeIcon icon="thermometer-half" />
                      </h1>
                      {data.main ? (
                        <h1 className=" text-2xl text-center">
                          {Math.round(data.main.temp)}°F
                        </h1>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-row justify-evenly items-center">
                    <div className="w-32 h-28 m-0.5 opacity-30shadow rounded hover:opacity-75">
                      <h1 className="  text-center text-lg">
                        Latitude
                      </h1>
                      {data.coord ? (
                        <h1 className=" text-2xl text-center">
                          {data.coord.lat}
                        </h1>
                      ) : null}
                    </div>
                    <div className="w-32 h-28 m-0.5 opacity-30shadow rounded hover:opacity-75">
                      <h1 className="  text-center text-lg">
                        Longitude
                      </h1>
                      {data.coord ? (
                        <h1 className=" text-2xl text-center">
                          {data.coord.lon}
                        </h1>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-64 h-24 m-0.5 opacity-30shadow rounded text-center hover:opacity-75">
                    <FontAwesomeIcon icon="cloud-sun" />
                      <h1 className="  text-center text-lg">
                        Weather Condition
                      </h1>
                      {data.weather ? (
                        <h1 className=" text-2xl text-center">
                          {data.weather[0].description}
                        </h1>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly items-center">
                    <div className="w-32 h-20 m-0.5 opacity-30shadow rounded hover:opacity-75">
                      <h1 className="  text-center text-lg">
                        Humidity 
                      </h1> <FontAwesomeIcon icon="tint" />
                      {data.main ? (
                        <h1 className=" text-2xl text-center">
                          {data.main.humidity}%
                        </h1>
                      ) : null}
                    </div>
                    <div className="w-32 h-20 m-0.5 opacity-30shadow rounded hover:opacity-75">
                    <FontAwesomeIcon icon="tachometer-alt" />
                      <h1 className="  text-center text-lg">
                        Pressure
                      </h1>
                      {data.main ? (
                        <h1 className=" text-2xl text-center">
                          {data.main.pressure}Pa
                        </h1>
                      ) : null}
                    </div>
                  </div>

*/