// https://open-meteo.com/en/docs
/* Sample Response

{
  "latitude": 52.52,
  "longitude": 13.419998,
  "generationtime_ms": 0.577092170715332,
  "utc_offset_seconds": 7200,
  "timezone": "Europe/Berlin",
  "timezone_abbreviation": "CEST",
  "elevation": 38.0,
  "daily_units": {
    "time": "iso8601",
    "weathercode": "wmo code",
    "temperature_2m_max": "°C",
    "temperature_2m_min": "°C",
    "precipitation_hours": "h",
    "precipitation_probability_max": "%"
  },
  "daily": {
    "time": [
      "2023-08-07"
    ],
    "weathercode": [
      80
    ],
    "temperature_2m_max": [
      18.9
    ],
    "temperature_2m_min": [
      13.8
    ],
    "precipitation_hours": [
      0.0
    ],
    "precipitation_probability_max": [
      94
    ]
  }
}

*/

// export and get various weather data
export async function fetchWeather(lat, lon) {
    // WMO weather codes
    const weatherCodes = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Drizzle: Light intensity',
        53: 'Drizzle: Moderate intensity',
        55: 'Drizzle: Dense intensity',
        56: 'Freezing Drizzle: Light intensity',
        57: 'Freezing Drizzle: Dense intensity',
        61: 'Rain: Slight intensity',
        63: 'Rain: Moderate intensity',
        65: 'Rain: Heavy intensity',
        66: 'Freezing Rain: Light intensity',
        67: 'Freezing Rain: Heavy intensity',
        71: 'Snow fall: Slight intensity',
        73: 'Snow fall: Moderate intensity',
        75: 'Snow fall: Heavy intensity',
        77: 'Snow grains',
        80: 'Rain showers: Slight intensity',
        81: 'Rain showers: Moderate intensity',
        82: 'Rain showers: Violent intensity',
        85: 'Snow showers slight',
        86: 'Snow showers heavy',
        95: 'Thunderstorm: Slight or moderate',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_hours,precipitation_probability_max&timezone=auto&forecast_days=1`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch weather response. Status: ${response.statusText}`)
        }
        const data = await response.json();
        return data.daily;
    }
    catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
}