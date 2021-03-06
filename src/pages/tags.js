import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TagList from "../components/tags/TagList"

const tags = () => {
  return (
    <Layout>
      <SEO title="Tags" />
      <TagList />
    </Layout>
  )
}

export default tags
