<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->





<h3 align="center">geolocator</h3>

  <p align="center">
    This application is a demonstration of utilizing various APIs and promises in JavaScript. It fetches the user's IP address, geolocation data (including latitude, longitude, city, country, and ISP), displays the user's location on a map, and provides weather data for the user's location.
    <br />
    <br />
    <a href="https://vguzman812.github.io/geolocator/">View Demo</a>
    ·
    <a href="https://github.com/vguzman812/geolocator/issues">Report Bug</a>
  </p>
</div>

**Live Demo:** https://vguzman812.github.io/geolocator/

![A gif of the app being used](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTE3eGJ4OWdza29tY3U0MnJwbWh0YnpyYTVzajV2dXE5YWtqZTNtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tbXC6GtKqLm5J22IBY/giphy.gif)

### Features
<ul>
    <li>Fetches the user's IP address using the Cloudflare API</li>
    <li>Fetches geolocation data based on the IP address using the IP-API</li>
    <li>Displays the user's location on a map using the Google Maps API</li>
    <li>Fetches weather data for the user's location using the Open-Meteo API</li>
</ul>


### Project Structure
<ul>
    <li>ipAddress.js: Contains the function to fetch the user's IP address</li>
    <li>geolocation.js: Contains the function to fetch geolocation data based on the IP address</li>
    <li>maps.js: Contains the function to display the user's location on a map</li>
    <li>weather.js: Contains the function to fetch weather data for the user's location</li>
</ul>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.


### Installation

1. Get a free API Key at [Google](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. Clone the repo
   ```sh
   git clone https://github.com/vguzman812/geolocator.git
   ```
3. Enter your API in `index.html` in the last line of the script near the bottom of the page 
```js
...({ key: "YourKeyHere", v: "weekly" });</script>...
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Other Projects

Check out these other projects of mine:

**Animal Facts Texter:** https://github.com/vguzman812/AnimalFactsTexter

**Tranquil Tomato:** https://github.com/vguzman812/tranquilTomato

**A Canvas of Color:** https://github.com/vguzman812/toriRodrigues






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/vguzman812/geolocator.svg?style=for-the-badge
[contributors-url]: https://github.com/vguzman812/geolocator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vguzman812/geolocator.svg?style=for-the-badge
[forks-url]: https://github.com/vguzman812/geolocator/network/members
[stars-shield]: https://img.shields.io/github/stars/vguzman812/geolocator.svg?style=for-the-badge
[stars-url]: https://github.com/vguzman812/geolocator/stargazers
[issues-shield]: https://img.shields.io/github/issues/vguzman812/geolocator.svg?style=for-the-badge
[issues-url]: https://github.com/vguzman812/geolocator/issues
[license-shield]: https://img.shields.io/github/license/vguzman812/geolocator.svg?style=for-the-badge
[license-url]: https://github.com/vguzman812/geolocator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/vincent-guzman
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
