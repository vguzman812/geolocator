/* Sample Request and Response

https://ip-api.com/docs/api:json

Request: http://ip-api.com/json/24.48.0.1

Response:

{
    "query": "IP used for the query"
    "status": "success or fail",
    "message": "included only when status is fail. Can be one of the following: private range, reserved range, invalid query.",
    "continent": "Continent name",
    "continentCode": "Two-letter continent code",
    "country": "Country name",
    "countryCode": "Two-letter country code ISO 3166-1 alpha-2",
    "region": "Region/state short code (FIPS or ISO)",
    "regionName": "Region/state",
    "city": "City",
    "district": "District (subdivision of city)",
    "zip": "Zip code",
    "lat": "Latitude",
    "lon": "Longitude",
    "timezone": "Timezone (tz)",
    "offset": "Timezone UTC DST offset in seconds",
    "currency": "National currency",
    "isp": "ISP name",
    "org": "Organization name",
    "as": "AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables.",
    "asname": "AS name (RIR). Empty for IP blocks not being announced in BGP tables.",
    "reverse": "Reverse DNS of the IP (can delay response)",
    "mobile": "Mobile (cellular) connection",
    "proxy": "Proxy, VPN or Tor exit address",
    "hosting": "Hosting, colocated or data center",
}

{
  "query": "24.48.0.1",
  "status": "success",
  "country": "Canada",
  "countryCode": "CA",
  "region": "QC",
  "regionName": "Quebec",
  "city": "Montreal",
  "zip": "H2Y",
  "lat": 45.504,
  "lon": -73.552,
  "timezone": "America/Toronto",
  "isp": "Le Groupe Videotron Ltee",
  "org": "Videotron Ltee",
  "as": "AS5769 Videotron Telecom Ltee"
}

*/



// export and get relevant geo data from api
export async function fetchGeoData(ip) {
    const url = "https://ip-api.com/json/"
    try {
        const response = await fetch(url + ip);
        // if bad response, throw error
        if (!response.ok) {
            throw new Error(`Failed to fetch geoData. Status: ${response.statusText}`)
        }
        const data = await response.json()
        return {
            latitude: data.lat,
            longitude: data.lon,
            city: data.city,
            regionName: data.regionName,
            isp: data.isp,
            org: data.org
        }
    }
    catch(error) {
        console.error('Error: ', error)
        throw error;
    }
}
