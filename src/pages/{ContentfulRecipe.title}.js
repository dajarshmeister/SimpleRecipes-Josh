import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { BsClockFill, BsClock, BsFillPeopleFill } from "react-icons/bs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipeTemplate = ({ data }) => {
  const {
    contentfulRecipe: {
      title,
      prepTime,
      servings,
      cookTime,
      description: { description },
      content: { instructions, tags, tools, ingredients },
      image,
    },
  } = data

  const imgPath = getImage(image)
  return (
    <Layout>
      <div className="row align-items-center mb-5 gx-5 row-cols-1 row-cols-md-2">
        <div className="col">
          <GatsbyImage
            alt={title}
            imgClassName="img-fluid mb-3 rounded"
            image={imgPath}
          />
        </div>
        <div className="col">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="row row-cols-3 text-center">
            <div className="col">
              <BsClockFill className="text-primary fs-4 mb-1" />
              <div>Prep Time</div>
              <div>{prepTime} min</div>
            </div>
            <div className="col">
              <BsClock className="text-primary fs-4 mb-1" />
              <div>Cook Time</div>
              <div>{cookTime} min</div>
            </div>
            <div className="col">
              <BsFillPeopleFill className="text-primary fs-4 mb-1" />
              <div>Servings</div>
              <div>{servings} servings</div>
            </div>
          </div>
          <div className="mt-3">
            {tags.map(tag => (
              <Link
                to={`/tags/${tag}`}
                class="badge bg-primary me-1 d-inline-block"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <h3 className="mb-4">Instructions</h3>
          {instructions.map((step, index) => (
            <div className="instruction" key={index}>
              <div className="instruction__title">Step {index + 1}</div>
              <div className="instruction__description">{step}</div>
            </div>
          ))}
        </div>
        <div className="col-md-4 offset-md-1">
          <h4>Ingredients</h4>
          {ingredients.map(item => (
            <div className="py-2">{item}</div>
          ))}
          <h4 className="mt-4">Tools</h4>
          {tools.map(item => (
            <div className="py-2">{item}</div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      id
      title
      prepTime
      servings
      cookTime
      description {
        description
      }
      content {
        instructions
        tags
        tools
        ingredients
      }
      image {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          aspectRatio: 1.77
        )
      }
    }
  }
`

export default RecipeTemplate
