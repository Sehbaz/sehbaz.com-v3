import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
const Footer = () => (
  <footer
    style={{
      padding: `5rem 0 0 0`,
      maxWidth: `960px`,
      fontFamily: "Helvetica",
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      flexDirection: `column`,
    }}
  >
    {" "}
    <Link
      to="/"
      style={{
        textDecoration: `none`,
        color: `black`,
      }}
    >
      <img
        src={Logo}
        style={{ width: `60px`, margin: `0`, paddingBottom: `1rem` }}
      ></img>{" "}
    </Link>
    <p style={{ fontSize: `12px`, color: `#747d8c` }}>
      © 2019 — Designed & developed by Sehbaz Rafik
    </p>
  </footer>
)

export default Footer
