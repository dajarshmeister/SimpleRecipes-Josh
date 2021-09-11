import React from "react"
import Hero from "../components/header/Hero"
import Layout from "../components/Layout"
import RecipeList from "../components/recipes/RecipeList"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="row">
        <div className="col-md-2">
          <h3>Recipes</h3>
        </div>
        <div className="col-md-10">
          <RecipeList />
        </div>
      </div>
    </Layout>
  )
}
