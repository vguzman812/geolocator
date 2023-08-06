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

    fl=17f454
    h=www.cloudflare.com
    ip=2601:58a:8a83:f8f0:714a:d889:586:be60
    ts=1691357792.238
    visit_scheme=https
    uag=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
    colo=MIA
    sliver=none
    http=http/3
    loc=US
    tls=TLSv1.3
    sni=plaintext
    warp=off
    gateway=off
    rbi=off
    kex=X25519

*/

// export and get user IP address
export async function fetchIpAddress() {
    // api endpoints. both the same, but both provided for comprehensiveness.
    // const ipUrl = "https://1.1.1.1/cdn-cgi/trace";

    const url = "https://www.cloudflare.com/cdn-cgi/trace";
    try {
        const response = await fetch(url);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const dataText = await response.text();
        const dataArray = dataText.trim().split("\n").map((e) => e.split("="));
        const dataJson = Object.fromEntries(dataArray);
        return dataJson.ip; // Log only the IP address
    }
    catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
        throw error
    }
}




