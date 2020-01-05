import React from "react"
import CoreSkills from "../images/coreskills.png"
import Interest from "../images/interest.png"
import Mordern from "../images/mordern.png"
import "./skills.css"
export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div
        className="flex-container"
        style={{
          justifyContentc: `center`,
          alignItems: `center`,
          width: `100%`,
          marginBottom: `2rem`,
          fontFamily: "Helvetica",
        }}
      >
        <div
          style={{
            minWidth: `30%`,
            padding: `1rem`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: "column",
          }}
        >
          <h5>INTEREST</h5>
          <img src={Interest} style={{ margin: `0 ` }} alt="interest"></img>
        </div>
        <div
          style={{
            minWidth: `30%`,
            padding: `1rem`,
            height: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: "column",
          }}
        >
          <h5>CORE</h5>
          <img
            src={CoreSkills}
            style={{ margin: `0 ` }}
            alt="core skills"
          ></img>
        </div>
        <div
          style={{
            minWidth: `30%`,
            padding: `1rem`,
            height: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            flexDirection: "column",
          }}
        >
          <h5>MORDERN WEB</h5>
          <img src={Mordern} style={{ margin: `0 ` }} alt="mordern web"></img>
        </div>
      </div>
    </div>
  )
}
