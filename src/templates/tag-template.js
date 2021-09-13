import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipeList from "../components/recipes/RecipeList"

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const {
    allContentfulRecipe: { recipes },
  } = data
  return (
    <Layout>
      <h2 className="mb-4">{tag}</h2>
      <RecipeList recipes={recipes} />
    </Layout>
  )
}

export const query = graphql`
  query getTag($tag: String) {
    allContentfulRecipe(filter: { content: { tags: { eq: $tag } } }) {
      recipes: nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default TagTemplate
