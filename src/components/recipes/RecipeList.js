import React from "react"
import Recipe from "./Recipe"

const RecipeList = () => {
  const recipes = [1, 2, 3, 4, 5]

  return (
    <div className="row">
      {recipes.map(recipe => {
        return (
          <div className="col-md-6 col-lg-4">
            <Recipe />
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
