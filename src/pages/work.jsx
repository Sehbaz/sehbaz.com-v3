import React from "react"
import Layout from "../components/layout"
import AllProjects from "../components/allProjects"
import Footer from "../components/footer"

const WorkPage = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ paddingTop: `2rem` }}>Work</h1>
      </div>
      <AllProjects></AllProjects>
      <Footer></Footer>
    </Layout>
  )
}
export default WorkPage
