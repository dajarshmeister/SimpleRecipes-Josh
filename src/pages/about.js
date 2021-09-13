import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipeList from "../components/recipes/RecipeList"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const about = ({ data }) => {
  const {
    allContentfulRecipe: { recipes },
  } = data
  return (
    <Layout>
      <SEO title="About" />
      <div className="row mb-5">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start order-last order-md-first">
          <h1>Learn about our story</h1>
          <p>
            When I was a young boy I grew up eating food. It was a tasty kind of
            food but not too tasty.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <StaticImage
            className="rounded mb-3"
            src="../assets/images/about.jpeg"
            alt="food"
            layout="fullWidth"
            aspectRatio={16 / 9}
          />
        </div>
      </div>
      <h4 className="mb-5">Featured recipes</h4>
      <RecipeList recipes={recipes} />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      recipes: nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
            height: 250
          )
        }
      }
    }
  }
`

export default about
