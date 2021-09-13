import React from "react"
import { Link } from "gatsby"

const Tag = ({ title, count }) => {
  const recipeText = count > 1 ? "recipes" : "recipe"
  return (
    <Link to={`/tags/${title}`} className="tag">
      <h5 className="tag__title">{title}</h5>
      <div className="tag__count">
        {count} {recipeText}
      </div>
    </Link>
  )
}

export default Tag
