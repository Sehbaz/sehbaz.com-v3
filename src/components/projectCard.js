import React from "react"
import JSONData from "../content/Fresh-Projects.json"
import Logo from "../images/gatsby-icon.png"

export default function projectCard() {
  return JSONData.content.map((data, index) => {
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
        }}
      >
        <div
          className="project-info"
          style={{
            minWidth: `40%`,
            padding: `1rem`,
            height: `100%`,
            backgroundColor: `#0984e3`,
            color: `white`,
          }}
        >
          <h3 key={`content_item_${index}`}>{data.title}</h3>
          <p style={{ fontFamily: "Roboto" }} key={`content_item_${index}`}>
            {data.desc}
          </p>
          <a
            href={data.url}
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
              fontFamily: "Roboto",
            }}
          >
            <h4 style={{}}>visit 🔥</h4>
          </a>
          <a
            href={data.url}
            style={{
              textDecoration: `none`,
              color: `#5393fe`,
              fontWeight: `bold`,
              fontFamily: "Roboto",
            }}
          >
            <h4 style={{}}>visit 🔥</h4>
          </a>
        </div>
        <div
          className="project-image"
          style={{
            minWidth: `60%`,
            padding: `1rem`,
            height: `100%`,
            backgroundColor: `#f1f2f6`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img src={Logo}></img>
        </div>
      </div>
    )
  })
}
