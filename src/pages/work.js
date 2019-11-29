import React from "react"
import Layout from "../components/layout"
import AllProjects from "../components/allProjects"

const WorkPage = () => {
  return (
    <Layout>
      <div>
        <h1 style={{ paddingTop: `2rem` }}>Work</h1>
      </div>
      <AllProjects></AllProjects>
    </Layout>
  )
}
export default WorkPage
