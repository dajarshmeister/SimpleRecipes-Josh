import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import RecipeList from "../components/recipes/RecipeList"
import ContactForm from "../components/ContactForm"

const contact = () => {
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
      <RecipeList />
    </Layout>
  )
}

export default contact
