import React from "react"
import Recipe from "./Recipe"

const RecipeList = ({ recipes = [] }) => {
  return (
    <div className="row">
      {recipes.map((recipe, index) => {
        return (
          <div className="col-md-6 col-lg-4">
            <Recipe key={index} recipe={recipe} />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
