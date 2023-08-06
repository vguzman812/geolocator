// Define the API endpoint
const ipUrl = "https://1.1.1.1/cdn-cgi/trace"

const url = 'https://www.cloudflare.com/cdn-cgi/trace';

/*
Initial Return Format

  fl=Cloudflare WebServer Instance
  h=WebServer Hostname
  ip=IP Address of client
  ts=Epoch Time in seconds.millis (Similar to `date +%s.%3N` in bash)
  visit_scheme=https or http
  uag=User Agent
  colo=IATA location identifier
  sliver=Whether the request is splitted
  http=HTTP Version
  loc=Country Code
  tls=TLS or SSL Version
  sni=Whether SNI encrypted or plaintext
  warp=Whether client over Cloudflares Wireguard VPN
  gateway=Whether client over Cloudflare Gateway
  rbi=Whether client over Cloudflares Remote Browser Isolation
  kex=Key exchange method for TLS

*/

// Use the fetch method to get data from the API
fetch(url)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response}`);
    }
    // Parse the data from the response. Initially not in JSON format.
    return response.text();
  })
  .then(data => {
    // Handle the parsed data
    // data to array.
    data = data.trim().split('\n').map(e=>e.split('='))
    // data from array to object
    jsonified = Object.fromEntries(data)
    console.log(jsonified.ip)
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error.message);
  });