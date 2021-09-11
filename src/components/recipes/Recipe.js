import React from "react"

const Recipe = () => {
  return (
    <div className="recipe">
      <img
        src="https://via.placeholder.com/300x150"
        alt="Sample title"
        className="recipe__thumbnail img-fluid"
      />
      <h3 className="recipe__title">Sample title</h3>
      <div className="recipe__details">Prep time: 15min | Cook: 5 min</div>
    </div>
  )
}

export default Recipe
