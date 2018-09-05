const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
//const WEATHER_API_KEY = "9925fbccea8c952f1adea3733c1e09fb";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function latLonUrl(lat, lon) {
  return `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    /* I comment this out, so I don't get error when openwethermap.org is too busy 
    .catch(error => {
      alert("openwethermap.org is too busy. Please try again later.")
      //console.error("kieu: openweathermap.org is busy. Please try again later." + error);
    });
    */
}

function fetchZipForecast(zip) {
  return fetchForecast(zipUrl(zip));
}

function fetchLatLonForecast(lat, lon) {
  return fetchForecast(latLonUrl(lat, lon));
}

export default {
  fetchZipForecast: fetchZipForecast,
  fetchLatLonForecast: fetchLatLonForecast
};
