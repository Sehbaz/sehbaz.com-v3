import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Logo from "../images/logo.png"
const Header = () => (
  <header
    style={{
      position: `sticky`,
      top: `0`,
      backgroundColor: `#fff`,
      padding: `1rem 1rem`,
      maxWidth: `960px`,
      fontFamily: "Helvetica",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          color: `black`,
        }}
      >
        {" "}
        <img src={Logo} style={{ width: `80px`, margin: `0` }}></img>
      </Link>
      <div style={{ display: `flex` }}>
        <Link
          to="/work"
          style={{
            textDecoration: `none`,
            color: `black`,
          }}
        >
          <p
            style={{ margin: `0 1rem`, fontSize: `0.8em`, fontWeight: `bold` }}
          >
            Work
          </p>
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: `none`,
            color: `black`,
          }}
        >
          <p style={{ margin: `0`, fontSize: `0.8em`, fontWeight: `bold` }}>
            About
          </p>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
