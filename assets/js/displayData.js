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
        // console.log(weatherData);
        userInfo["weatherData"] = weatherData

        // console.log(userInfo)
        return userInfo;

    }
    catch (error) {
        console.log(`Error in DisplayData: ${error.message}`)
        throw error
    }
}
getData()