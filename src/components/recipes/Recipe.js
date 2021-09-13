import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"

const Recipe = ({ recipe }) => {
  const {
    title,
    prepTime,
    cookTime,
    image: { gatsbyImageData },
  } = recipe
  const image = getImage(gatsbyImageData)
  const slug = slugify(title, { lower: true })

  return (
    <Link className="recipe" to={`/${slug}`}>
      <GatsbyImage
        image={image}
        className="recipe__thumbnail img-fluid"
        alt={title}
      />
      <h3 className="recipe__title">{title}</h3>
      <div className="recipe__details">
        Prep time: {prepTime}min | Cook: {cookTime}min
      </div>
    </Link>
  )
}

export default Recipe
