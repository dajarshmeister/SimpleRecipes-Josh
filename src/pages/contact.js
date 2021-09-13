import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipeList from "../components/recipes/RecipeList"
import ContactForm from "../components/ContactForm"

const contact = ({ data }) => {
  const {
    allContentfulRecipe: { recipes },
  } = data
  return (
    <Layout>
      <div className="row mb-5">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start order-last order-md-first">
          <h1>Want To Get In Touch?</h1>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
          <p>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <ContactForm />
        </div>
      </div>
      <h4 className="mb-5">Look at this awesomeness</h4>
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

export default contact
