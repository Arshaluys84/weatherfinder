import { useState } from "react";
import "./App.css";
import { base, key, dateHandler } from "./config";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${base}weather?q=${city}&units=metric&appid=${key}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Please enter correct PlaceName");
          }
        })
        .then((data) => {
          setCity("");
          setWeather(data);
          setIsError(false);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
          setErrorMessage(error.message);
          setCity("");
        });
    }
  };

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 14)
     ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter your City...."
            className="search-bar"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyPress={search}
          />
        </div>
        {isError ? (
          <div>{errorMessage}</div>
        ) : (
          <div>
            {typeof weather.main != "undefined" ? (
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{dateHandler(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">{Math.round(weather.main.temp)}&#8451;
                  <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon" /></div>
                  <div className="weather">{weather.weather[0].main}
                  </div>
                 
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
    
      </main>

    </div>
  );
}

export default App;
