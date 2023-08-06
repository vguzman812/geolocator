import { fetchIpAddress } from "./ipAddress.js";
import { fetchGeoData } from "./geolocation.js";
import { fetchWeather } from "./weather.js";

async function displayData(){
    try {
        const ip = await fetchIpAddress();
        console.log(`User IP Address: ${ip}`);
        
        const geoData = await fetchGeoData(ip);
        console.log(`Geo Data: Latitude - ${geoData.latitude}, Longitude - ${geoData.longitude}`);
        
        const weatherData = await fetchWeather(geoData.latitude, geoData.longitude);
        console.log(weatherData);
    }
    catch(error){
        console.log(`Error in DisplayData: ${error.message}`)
        throw error
    }
}
displayData()