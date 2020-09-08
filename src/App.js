import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState("");

  const apiKey = process.env.REACT_APP_HONEYWELL;
  const locationId = "1743280";

  const logIn = (e) => {
    axios
      .get(
        `https://api.honeywell.com/oauth2/authorize?response_type=code&client_id=${process.env.REACT_APP_HONEYWELL_KEY}&redirect_uri=http://localhost:3000/`
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
      <p>you are running {process.env.NODE_ENV}</p>
      <p>what is this {process.env.REACT_APP_HONEYWELL_KEY}</p>
      <button onClick={() => logIn()}>oauth login</button>
      <button onClick={() => handleClick()}>click me</button>
    </>
  );
};

export default App;
