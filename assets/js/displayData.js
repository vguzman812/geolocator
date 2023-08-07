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
        const { weatherData } = userInfo;
        
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


async function displayUserData(){
    try {
        const userInfo = await getData();
        const { ip, geoData } = userInfo;
        const { city, regionName, isp, org } = geoData;

        const aboutMessage = document.querySelector("#about-message")

        const message = `
            Your IP address is ${ip} and you are currently in ${city}, ${regionName}. 
            Your Internet Service Provider (ISP) is ${isp}. 
            It's fascinating, isn't it? With just a bit of internet knowledge, we can find out so much more than we think. 
            This information is freely available and can be accessed by anyone. 
            It's a reminder of how interconnected our world is and how much information we're sharing, often without even realizing it.
            This data has been found using <a href="https://github.com/fawazahmed0/cloudflare-trace-api">Cloudflare trace api</a>, and <a href="https://ip-api.com/">ip-api</a>.`;

        aboutMessage.innerHTML = message;

    } catch (error) {
        console.log(`Error in displayUserData: ${error.message}`)
        throw error;
    }
}

displayWeather()
displayUserData()