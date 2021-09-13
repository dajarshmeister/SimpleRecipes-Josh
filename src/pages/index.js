import React from "react"
import Hero from "../components/header/Hero"
import Layout from "../components/Layout"
import RecipeList from "../components/recipes/RecipeList"
import { graphql, Link } from "gatsby"
import getTags from "../utilities/getTags"
import SEO from "../components/SEO"

export default function Home({ data }) {
  const {
    allContentfulRecipe: { recipes },
  } = data
  const tagData = getTags(recipes)
  return (
    <Layout>
      <SEO title="Home" description="This is the home page" />
      <Hero />
      <div className="row">
        <div className="col-md-2 d-none d-md-block">
          <h3>Recipes</h3>
          {tagData.map(tag => {
            const [title, count] = tag
            return (
              <Link to={`/tags/${title}`} className="d-block mb-1">
                {title}: ({count})
              </Link>
            )
          })}
        </div>
        <div className="col-md-10">
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      recipes: nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
        content {
          tags
        }
      }
    }
  }
`
