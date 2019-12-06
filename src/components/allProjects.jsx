import React from "react"
import DiceappImage from "../images/dice.png"
import DrumkitImage from "../images/drumkit.png"
import JournalappImage from "../images/journal.png"
import NewsIamge from "../images/newsletter.png"
import PortfolioImage from "../images/portfolio-v1.png"
import SimonappImage from "../images/simon.png"
import TindogImage from "../images/tindog.png"
import TodoImage from "../images/todo.png"
import WeatherappImage from "../images/weather.png"

import NewPortfolioImage from "../images/sehbaz-v3.png"
export default function allProjects() {
  return (
    <div>
      {/* Weather app */}
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
            fetch the weather of the entered location and not only it shows the
            current weather but also the top five news from an American online
            publisher TechCrunch. Openweathermap and techcrunch api are used to
            fetch the real time data. One of the projects I'm most proud of.
          </p>
          <h5>Tools</h5>
          <div>
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
      </div>
      {/* Porfolio app */}
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
          <img src={NewPortfolioImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Portfolio -v3</h3>
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
            have made my portfolio site an open source so this may inspire to
            junior developer.
          </p>
          <h5>Tools</h5>
          <div>
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
      {/* Simon app app */}
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
          <img src={SimonappImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Simon Game App</h3>
          <a
            href="https://sehbaz.github.io/Simon-Game/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/Simon-Game"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            Simple memory game using VanillaJS. This game is fun to play and
            improve your memory as well. Developing this game I have learn how
            data can be handled temporary and manage user interaction.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              JQUERY
            </button>{" "}
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
      {/* Newletter app */}
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
          <img src={NewsIamge} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>SignUp Letter</h3>
          <a
            href="https://infinite-ocean-93601.herokuapp.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/newsletter-signup"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">Github</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            A simple app made using backend mailchimp API.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              MAILCHIMP
            </button>{" "}
            <button class=" toolsbtn " disabled>
              JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
            <button class=" toolsbtn " disabled>
              BOOTSTRAP
            </button>
          </div>
        </div>
      </div>
      {/* Dice game app */}
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
          <img src={DiceappImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Dice Game</h3>
          <a
            href="https://sehbaz.github.io/dice-game/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/dice-game"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            Simple dice game made in VanillaJS. To play this game your need to
            refresh the browser, this will trigger code and it will predict the
            winner. Fun to play!
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              DOM
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HEROKU
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
            <button class=" toolsbtn " disabled>
              JS
            </button>
          </div>
        </div>
      </div>
      {/* Drum kit app */}
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
          <img src={DrumkitImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Drim Kit</h3>
          <a
            href="https://sehbaz.github.io/drum-kit-band/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/drum-kit-band"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            Play sound on key pressed and mouse clicked based on pure JS. This
            is the simple project to understand the power of JS.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              DOM
            </button>{" "}
            <button class=" toolsbtn " disabled>
              JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
        </div>
      </div>
      {/* Tindog app */}

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
          <img src={TindogImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>TinDog</h3>
          <a
            href="https://sehbaz.github.io/tindog/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/tindog"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            Simple HTML and CSS website. The power of CSS. This website is
            reponsive on any of the screen size. It was amazing doing this
            project to learn the modern app development designs.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
        </div>
      </div>
      {/* Todo app app */}
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
          <img src={TodoImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3>Todo List</h3>
          <a
            href="https://enigmatic-journey-94031.herokuapp.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/todolist-v2"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            A todo app uses mongoDB to save the data and express as an
            middleware. The app is build on EJS, it is a simple templating
            language that lets you generate HTML markup with plain JavaScript.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              EJS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
            <button class=" toolsbtn " disabled>
              MONGODB
            </button>
          </div>
        </div>
      </div>
      {/* Journal app */}
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
          <img src={JournalappImage} style={{ margin: `0 ` }}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3> Daily Journal</h3>
          <a
            href="https://intense-dawn-77855.herokuapp.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/daily-journal"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            A diary application build using JavaScript, ExpressJS, EJS and
            MongoDB. I was excited to learn all the things across the project as
            it perform CRUD operations.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              EJS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
            <button class=" toolsbtn " disabled>
              EXPRESS JS
            </button>
            <button class=" toolsbtn " disabled>
              MONGODB
            </button>
          </div>
        </div>
      </div>
      {/* portfolio v1 app */}
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
          <h3>Portfolio -v1</h3>
          <a
            href="https://glacial-harbor-99388.herokuapp.com/"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href="https://github.com/Sehbaz/sehbaz.com"
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn default ">Github</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            The portfolio version 1.0 this was my initial design for portfolio
            but later after experinting some of the other layouts I have updated
            my portfolio with that design. But this design was challenging to
            build and learned a lot as this project is one of my initial
            projects.
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              EJS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
            <button class=" toolsbtn " disabled>
              RESPONSIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
