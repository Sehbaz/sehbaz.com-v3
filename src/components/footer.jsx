import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo.png"
import FooterLogo from "../images/footer-logo.png"
const Footer = () => (
  <footer
    style={{
      paddingTop: `7rem`,
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
        alt="Footer title logo"
      ></img>{" "}
    </Link>
    <p style={{ fontSize: `12px`, color: `#747d8c` }}>
      © 2019 — Designed & developed by Sehbaz Rafik
    </p>
    <img
      src={FooterLogo}
      style={{ width: `30px`, margin: `0` }}
      alt="Pet"
    ></img>{" "}
  </footer>
)

export default Footer
