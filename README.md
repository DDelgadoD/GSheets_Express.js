<div id="top"></div>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![GitHub][github-shield]][github-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![ResearchGate][researchgate-shield]][researchgate-url]
[![Gmail][gmail-shield]][gmail-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://bitbucket.org/test-coda/test2_express_app">
    <img src="https://raw.githubusercontent.com/DDelgadoD/DDelgadoD/main/images/logo.jpg" alt="Logo" width="1000" height="100">
  </a>

<h3 align="center">Node.js Express App</h3>

  <p align="center">
    Containerzed Node.js Express app to Read and Modify a Google Sheet
</div>



<!-- TABLE OF CONTENTS -->
### Table of Contents
<ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ol>


<!-- ABOUT THE PROJECT -->
## About The Project

A simple server in Express to achieve data from Google Sheets running in a docker image.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Docker](https://www.docker.com/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

In order to run the project you need:

* [Node.js](https://nodejs.org/es/)
* Npm (included in Node.js)
* [Docker](https://www.docker.com/)
 

### Installation

In order to install this repository you need to clone it:   
<code>git clone https://David_test_Coda@bitbucket.org/test-coda/test2_express_app.git</code>

Inizialice Node.js inside the main directory:  
<code>npm install</code>

At this point you can use it with <code>npm run start</code> but we have a dockerized image. To build it:  
<code> docker build --pull --rm -f "Dockerfile" -t test2expressapp:latest "." </code>

Finally to run it:  
<code>docker run --rm -d  -p 4000:4000/tcp test2expressapp:latest</code>


<!-- USAGE EXAMPLES -->
## Usage

There are only two API endpoints:

* GET /google-sheets : <code>http://localhost:4000/google-sheets</code>  
  This return all the values on the google sheet: [GSheet](https://docs.google.com/spreadsheets/d/13lXhzTe6B5tzlqYEentKuw3qCiIye78_6Sae-No1vZ4/edit?usp=sharing)
* POST /bitcoin: <code>http://localhost:4000/bitcoin</code>  
  To this point you can send a JSON that modifies the value of Bitcoin price. e.g. {"Bitcoin": 65000}

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE.md`](https://raw.githubusercontent.com/DDelgadoD/DDelgadoD/main/LICENSE.md) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

David Delgado-Dueñas - david.delgado82@gmail.com

Project Link: [https://bitbucket.org/test-coda/test2_express_app](https://bitbucket.org/test-coda/test2_express_app)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[researchgate-shield]:https://img.shields.io/badge/-researchgate-white.svg?style=for-the-badge&logo=researchgate&colorB=33b864&logoColor=white
[researchgate-url]: https://www.researchgate.net/profile/David-Delgado-Duenas
[gmail-shield]: https://img.shields.io/badge/-Gmail-black.svg?style=for-the-badge&logo=gmail&colorB=red&logoColor=white
[gmail-url]:mailto:david.delgado82@gmail.com
[github-shield]: https://img.shields.io/badge/-Github-black.svg?style=for-the-badge&logo=github&colorB=black
[github-url]: https://github.com/DDelgadoD/
[license-shield]: https://img.shields.io/github/license/DDelgadoD/DDelgadoD.svg?style=for-the-badge
[license-url]: https://raw.githubusercontent.com/DDelgadoD/DDelgadoD/main/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0072B1
[linkedin-url]: https://www.linkedin.com/in/david-delgado-duenas/
[product-screenshot]: images/screenshot.png