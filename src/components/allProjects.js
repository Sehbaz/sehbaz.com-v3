import React from "react"

import JSONData from "../content/All-Projects.json"
export default function allProjects() {
  return JSONData.content.map((data, index) => {
    return (
      <div
        style={{
          display: `flex`,
          width: `100%`,
          boxShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
          marginBottom: `2rem`,
          fontFamily: "Overpass",
        }}
      >
        <div
          style={{
            width: `40%`,
            padding: `1rem`,
          }}
        >
          <h3 key={`content_item_${index}`}>{data.title}</h3>
        </div>
        <div
          style={{
            backgroundColor: `#bdc3c7`,
            width: `60%`,
            padding: `1rem`,
          }}
        >
          {" "}
        </div>
      </div>
    )
  })
}
