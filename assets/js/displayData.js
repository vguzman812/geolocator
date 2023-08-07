import { fetchIpAddress } from "./ipAddress.js";
import { fetchGeoData } from "./geolocation.js";
import { fetchWeather } from "./weather.js";

export async function getData() {
    try {
        const userInfo = {};

        const ip = await fetchIpAddress();
        // console.log(`User IP Address: ${ip}`);
        userInfo["ip"] = ip;

        const geoData = await fetchGeoData(ip);
        // console.log(`Geo Data: Latitude - ${geoData.latitude}, Longitude - ${geoData.longitude}`);
        userInfo["geoData"] = geoData

        const weatherData = await fetchWeather(geoData.latitude, geoData.longitude);
        console.log(weatherData);
        userInfo["weatherData"] = weatherData

        // console.log(userInfo)
        return userInfo;

    }
    catch (error) {
        console.log(`Error in getData: ${error.message}`)
        throw error
    }
}

async function displayWeather(){
    try {
        const userInfo = await getData();
        const weatherData = userInfo.weatherData;
        
        const weatherLocation = document.querySelector("#weather-location");
        const weatherReport = document.querySelector("#weather-report");

        weatherLocation.innerText = `The current weather in ${userInfo.geoData.city} is apparently ${weatherData.weathercode}.`
        weatherReport.innerHTML = `The anticipated number of hours it will rain today is ${weatherData.precipitation_hours}. The chance that it will rain today is ${weatherData.precipitation_probability_max}%. The maximum temperature is ${weatherData.temperature_2m_max} Celcius. The minimum temperature is ${weatherData.temperature_2m_min} Celcius. Weather report brought to you by <a href="https://open-meteo.com">Open-Meteo</a>`
    }
    catch (error) {
        console.log(`Error in displayWeather: ${error.message}`)
        throw error;
    }
}

displayWeather()