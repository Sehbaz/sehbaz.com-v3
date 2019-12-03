import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const AboutPage = () => (
  <Layout>
    <div style={{ fontFamily: `Helvetica`, height: `60vh` }}>
      <h1 style={{ paddingTop: `2rem` }}>About</h1>
      <p>
        I am Sehbaz Rafik a developer 🛠 who is keen and passionate about
        building Web Based applications and who has experience in a variety of
        languages and technologies.
      </p>
      <p>
        {" "}
        I am always looking to increasing my skills set, with one of my greatest
        strengths being the ability to quickly learn and become proficient in
        technologies that are new to me.
      </p>
      <p>
        {" "}
        I am an active contributor to open source projects, and I am a member of
        the LeicesterJS meetup group.
      </p>
    </div>

    <Footer></Footer>
  </Layout>
)

export default AboutPage
