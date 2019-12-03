import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import "../global/global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Sehbaz Rafik" />

    <h2
      style={{
        padding: `5rem 1.5rem`,
        lineHeight: `1.2`,
        fontWeight: `bold`,
        margin: `2rem 0rem`,
        fontSize: `2.2rem`,
      }}
    >
      Hello, I’m{" "}
      <span
        style={{
          color: ` #5393fe`,
        }}
      >
        Sehbaz
      </span>
      , a front-end developer based in Leicester. I focus on{" "}
      <span style={{ color: `#f46b3f` }}>delivering </span>
      optimal solutions to design and code problems that enhances the user’s
      <span style={{ color: `#17b1b1` }}> experience</span>.
    </h2>

    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <ProjectCard></ProjectCard>
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
          See more work 🛠
        </button>
      </Link>
    </div>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
