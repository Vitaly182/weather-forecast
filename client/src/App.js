import { useState } from "react";
import Common from "./components/Common";



function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = process.env.REACT_APP_URL;
  const ICON_URL = process.env.REACT_APP_ICON_URL;

  const [noData, setNoData] = useState("No Data Yet");
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("Unknown location");
  const [weatherIcon, setWeatherIcon] = useState(`${URL}10n@2x.png`);

  const handleChange = (input) => {
    const { value } = input.target;
    setSearchTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
    e.target.reset();
  };

  const getWeather = async (location) => {
    setWeatherData([]);
    let how_to_search =
      typeof location === "string"
        ? `q=${location}`
        : `lat=${location[0]}&lon=${location[1]}`;
    try {
      let res = await fetch(
        `${URL + how_to_search}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      if (data.cod !== "200") {
        setNoData("Location Not Found");
        return;
      }
      setWeatherData(data);
      setCity(`${data.city.name}, ${data.city.country}`);
      setWeatherIcon(`${ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`);
    } catch (error) {
      console.log(error);
    }
  };

  const myIP = (location) => {
    const { latitude, longitude } = location.coords;
    getWeather([latitude, longitude]);
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center w-screen h-screen py-10">
      <div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto bg-gray-100">
        <div className="form-container">
          <div className="flex items-center justify-center">
            <div className="flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg">
              <i className="fa fa-map my-auto" aria-hidden="true"></i>
              <div className="text-right">
                <p className="font-semibold text-sm ml-2">{city}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-2xl">Weather Forecast</h1>
            <hr className="h-1 bg-white w-1/4 rounded-full my-5" />
            <form
              noValidate
              onSubmit={handleSubmit}
              className="flex justify-center w-full"
            >
              <input
                type="text"
                placeholder="Enter location"
                className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200"
                onChange={handleChange}
                required
              />
              <button type="submit" className="z-10">
                <i
                  className="fa fa-search text-white -ml-10 border-l my-auto z-10 cursor-pointer p-3"
                  aria-hidden="true"
                  type="submit"
                ></i>
              </button>
              <i
                className="fa fa-map-marker-alt my-auto cursor-pointer p-3 text-white"
                aria-hidden="true"
                onClick={() => {
                  navigator.geolocation.getCurrentPosition(myIP);
                }}
              ></i>
            </form>
          </div>
        </div>
        <Common
          weatherData={weatherData}
          noData={noData}
          weatherIcon={weatherIcon}
          city={city}
        />
      </div>
    </div>
  );
}

export default App;
