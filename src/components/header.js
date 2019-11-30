import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header
    style={{
      position: `sticky`,
      top: `0`,
      backgroundColor: `#fff`,
      padding: `1rem 0`,
      maxWidth: `960px`,
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
        <p
          style={{
            fontFamily: `Roboto`,
          }}
        >
          Sehbaz
        </p>
      </Link>

      <Link
        to="/work"
        style={{
          textDecoration: `none`,
          color: `black`,
        }}
      >
        <p
          style={{
            fontFamily: `Roboto`,
          }}
        >
          Work
        </p>
      </Link>
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
