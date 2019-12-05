import React from "react"
import Layout from "../components/layout"
import AllProjects from "../components/allProjects"
import Footer from "../components/footer"
import SEO from "../components/seo"

const WorkPage = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <div>
        <h1 style={{ paddingTop: `2rem` }}>Work</h1>
      </div>
      <AllProjects></AllProjects>
      <Footer></Footer>
    </Layout>
  )
}
export default WorkPage
