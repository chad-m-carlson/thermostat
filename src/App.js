import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState("");

  const apiKey = "QIm9uFcnyGGhMhiOCiJrvEP8yWvJQH2f";
  const locationId = "1743280";

  const logIn = (e) => {
    axios
      .get(
        `https://api.honeywell.com/oauth2/authorize?response_type=code&client_id=${apiKey}&redirect_uri=http://localhost:3000/`
      )
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };
  const handleClick = (e) => {
    axios
      .get(
        `https://api.honeywell.com/v2/devices/apikey=${apiKey}$locationid=${locationId}`
      )
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  return (
    <>
      <h1>Thermostat</h1>
      <button onClick={() => logIn()}>oauth login</button>
      <button onClick={() => handleClick()}>click me</button>
    </>
  );
};

export default App;
