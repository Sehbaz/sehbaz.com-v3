import React from "react"

import "../global/global.css"
import PortfolioImage from "../images/portfolio-v1.png"
import WeatherappImage from "../images/weather.png"

export default function projectCard() {
  return (
    <div style={{ margin: `0`, width: `100%` }}>
      <div
        className="flex-container"
        style={{
          justifyContentc: `center`,
          alignItems: `center`,
          width: `100%`,
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          marginBottom: `2rem`,
          height: `400px`,
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
          <img src={WeatherappImage} style={{ margin: `0 ` }}></img>
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
            href=""
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href=""
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default">Github</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <h5>Tools</h5>
          <button class=" toolsbtn " disabled>
            React JS
          </button>{" "}
          <button class=" toolsbtn " disabled>
            HTML
          </button>{" "}
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
          height: `400px`,
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
          <img src={PortfolioImage} style={{ margin: `0 ` }}></img>
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
          <p style={{ fontFamily: "Helvetica" }}>
            GIves weather based on location
          </p>
          <a
            href=""
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href=""
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}
