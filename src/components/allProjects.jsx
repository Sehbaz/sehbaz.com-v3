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
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
          </button>
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
            <button class="btn default ">GitHub</button>
          </a>
          <p style={{ fontFamily: "Helvetica" }}>
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
          </button>
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
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
            GIves weather based on location
          </p>
          <h5>Tools</h5>
          <div>
            <button class=" toolsbtn " disabled>
              React JS
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              HTML
            </button>{" "}
            <button class=" toolsbtn " disabled>
              CSS
            </button>
          </div>
          <button class=" toolsbtn " disabled>
            React JS
          </button>
        </div>
      </div>
    </div>
  )
}
