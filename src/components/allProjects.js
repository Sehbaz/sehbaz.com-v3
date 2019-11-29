import React from "react"

import JSONData from "../content/All-Projects.json"
export default function allProjects() {
  return JSONData.content.map((data, index) => {
    return (
      <div
        style={{
          display: `flex`,
          justifyContentc: `center`,
          alignItems: `center`,
          width: `100%`,
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          marginBottom: `2rem`,
          fontFamily: "Overpass",
          height: `400px`,
        }}
      >
        <div
          style={{
            width: `40%`,
            padding: `1rem`,
          }}
        >
          <h3 key={`content_item_${index}`}>{data.title}</h3>
          <p style={{ fontFamily: "Roboto" }} key={`content_item_${index}`}>
            {data.desc}
          </p>
          <div>
            <a
              href={data.url}
              style={{
                textDecoration: `none`,
                color: `#5393fe`,
                fontWeight: `bold`,
                fontFamily: "Roboto",
              }}
            >
              <h4 style={{ paddingTop: `1rem` }}>visit 🚀</h4>
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
              <h4 style={{ paddingTop: `1rem` }}>code 🔥</h4>
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundColor: `#bdc3c7`,
            width: `60%`,
            height: `100%`,
            padding: `1rem`,
          }}
        >
          {" "}
        </div>
      </div>
    )
  })
}
