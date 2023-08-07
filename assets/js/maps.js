import { getData } from "./displayData.js";

let map;

async function initMap() {
    const userData = await getData();
    const latitude = userData.geoData.latitude
    const longitude = userData.geoData.longitude
    const { Map } = await google.maps.importLibrary("maps");

    let map = new Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 8,
    });

    let marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'Hello World!'
    });
}

initMap();