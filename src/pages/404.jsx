import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <h3>PAGE NOT FOUND</h3>
    <p>The page you are looking for might have been not available</p>
    <Link
      to="/work"
      style={{
        textDecoration: `none`,
        color: `#5393fe`,
        fontWeight: `bold`,
      }}
    >
      {" "}
      <button
        className="btn info"
        style={{
          textDecoration: `none`,
          fontWeight: `bold`,
          fontFamily: "Helvetica",
          fontSize: `13px`,
        }}
      >
        Homepage
      </button>
    </Link>
  </Layout>
)

export default NotFoundPage
