import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutPage from "../components/about"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h5
      style={{
        padding: `7rem 0rem`,
        fontSize: `2.5rem`,
        lineHeight: `1.5`,
        fontWeight: `bold`,
      }}
    >
      Hello👋🏼, I’m{" "}
      <span
        style={{
          color: ` #5393fe`,
        }}
      >
        Sehbaz
      </span>
      , a front-end developer based in{" "}
      <span style={{ color: `#f46b3f` }}>Leicester</span>. I focus on delivering
      optimal solutions to design and code problems that enhances the user’s
      <span style={{ color: `#17b1b1` }}> experience</span>.
    </h5>

    <div>
      <ProjectCard></ProjectCard>
      <Link
        to="/work"
        style={{
          textDecoration: `none`,
          color: `#5393fe`,
          fontWeight: `bold`,
          fontFamily: "Roboto",
        }}
      >
        {" "}
        <h5>See all work</h5>
      </Link>
    </div>
    <AboutPage></AboutPage>
  </Layout>
)

export default IndexPage
