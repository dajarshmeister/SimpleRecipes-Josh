import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipeList from "../components/recipes/RecipeList"

const about = () => {
  return (
    <Layout>
      <div className="row mb-5">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start order-last order-md-first">
          <h1>I'm baby coloring book poke taxidermy</h1>
          <p>
            Taxidermy forage glossier letterpress heirloom before they sold out
            you probably haven't heard of them banh mi biodiesel chia.
          </p>
          <p>
            Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
            retro.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact
          </Link>
        </div>
        <div className="col-md-6 order-first order-md-last">
          <img
            src="https://via.placeholder.com/600x350"
            alt=""
            className="img-fluid mb-3"
          />
        </div>
      </div>
      <h4 className="mb-5">Look at this awesomeness</h4>
      <RecipeList />
    </Layout>
  )
}

export default about
