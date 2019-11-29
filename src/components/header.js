import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `sticky`,
      top: `0`,
      backgroundColor: `#fff`,
      padding: `1rem 0`,
      maxWidth: `960px`,
      fontFamily: "Overpass",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `960`,
        padding: `1rem`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {" "}
          <h3
            style={{
              color: `black`,
            }}
          >
            Sehbaz
          </h3>
        </Link>
      </h5>
      <h5 style={{ margin: 0 }}>
        <Link
          to="/work"
          style={{
            textDecoration: `none`,
            color: `black`,
          }}
        >
          <h3>Work</h3>
        </Link>
      </h5>
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
