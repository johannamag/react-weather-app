import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatedDate from "./FormatedDate";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });

  function handleResponse(response) {
    setData({
      temperature: response.data.main.temp,
      ready: true,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Wednesday 07:00",
    });
  }

  if (data.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{data.city}</h1>
        <ul>
          <li>
            <FormatedDate date={data.date} />
          </li>
          <li className="text-capitalize">{data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={data.icon}
                alt={data.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(data.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {data.humidity}%</li>
              <li>Wind: {Math.round(data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "775303597615dd496a6656b7e9300086";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
