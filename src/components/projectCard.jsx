import React from "react"
import "../global/global.css"
import PortfolioImage from "../images/sehbaz-v3.png"
import WeatherappImage from "../images/weather.png"

export default function projectCard() {
  return (
    <div style={{ margin: `0`, width: `100%` }}>
      <h2>Work</h2>
      <div
        className="flex-container"
        style={{
          justifyContentc: `center`,
          alignItems: `center`,
          width: `100%`,
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          marginBottom: `2rem`,
          fontFamily: "Helvetica",
        }}
      >
        <div
          className="project-image"
          style={{
            minWidth: `60%`,
            padding: `2rem`,
            backgroundColor: `#f1f2f2`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img
            src={WeatherappImage}
            style={{ margin: `0 ` }}
            alt="Weather App"
          ></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Weather App</h3>
          <a
            href="https://weather-app-s1101.netlify.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/weather-app"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default">Github</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            I wanted to play around ReactJS, so I made this simple project which
            fetches the weather of the entered location and not only shows the
            current weather but also the top five news from an American online
            publisher TechCrunch. Openweathermap and TechCrunch API are used to
            fetch real-time data. One of the projects I'm most proud of.
          </p>
          <h5>Tools</h5>
          <button class=" toolsbtn " disabled>
            REACTJS
          </button>{" "}
          <button class=" toolsbtn " disabled>
            OPERNWEATHERMAP
          </button>
          <button class=" toolsbtn " disabled>
            GATSBY
          </button>
          <button class=" toolsbtn " disabled>
            NETLIFY
          </button>
          <button class=" toolsbtn " disabled>
            API
          </button>
          <button class=" toolsbtn " disabled>
            TECHCRUNCH
          </button>
          <button class=" toolsbtn " disabled>
            HTML
          </button>{" "}
          <button class=" toolsbtn " disabled>
            JS
          </button>{" "}
          <button class=" toolsbtn " disabled>
            CSS
          </button>
        </div>
      </div>
      <div
        className="flex-container"
        style={{
          justifyContentc: `center`,
          alignItems: `center`,
          width: `100%`,
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          marginBottom: `2rem`,
          fontFamily: "Helvetica",
        }}
      >
        <div
          className="project-image"
          style={{
            minWidth: `60%`,
            padding: `2rem`,
            height: `100%`,
            backgroundColor: `#f1f2f2`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img
            src={PortfolioImage}
            style={{ margin: `0 ` }}
            alt="Portfolio v-3 App"
          ></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Portfolio - this site</h3>
          <a
            href="https://www.sehbaz.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/sehbaz.com-v3"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default">Github</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            I wanted something fast and with good SEO for my portfolio, so a
            static website generator like Gatsby seemed like the best fit. I
            have made my portfolio site an open-source so this may inspire a
            junior developer.
          </p>
          <h5>Tools</h5>
          <button class=" toolsbtn " disabled>
            REACTJS
          </button>{" "}
          <button class=" toolsbtn " disabled>
            GATSBY
          </button>
          <button class=" toolsbtn " disabled>
            NETLIFY
          </button>
          <button class=" toolsbtn " disabled>
            ADOBEXD
          </button>
          <button class=" toolsbtn " disabled>
            HTML
          </button>{" "}
          <button class=" toolsbtn " disabled>
            JS
          </button>{" "}
          <button class=" toolsbtn " disabled>
            CSS
          </button>
        </div>
      </div>
    </div>
  )
}
