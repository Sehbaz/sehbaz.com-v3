import React from "react"
import JSONData from "../content/Fresh-Projects.json"
import Logo from "../images/gatsby-icon.png"
import GitLogo from "../images/github-logo.png"
import "../global/global.css"

export default function projectCard() {
  return JSONData.content.map((data, index) => {
    console.log(data.path)
    return (
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
            padding: `1rem`,
            height: `100%`,
            backgroundColor: `#f1f2f2`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img src={data.path}></img>
        </div>
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
          }}
        >
          <h3 key={`content_item_${index}`}>{data.title}</h3>
          <p style={{ fontFamily: "Helvetica" }} key={`content_item_${index}`}>
            {data.desc}
          </p>
          <a
            href={data.url}
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
            }}
          >
            <button class="btn info">Demo</button>
          </a>
          <a
            href={data.url}
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
    )
  })
}
