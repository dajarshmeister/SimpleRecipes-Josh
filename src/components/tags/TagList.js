import React from "react"
import Tag from "./Tag"
import { useStaticQuery, graphql } from "gatsby"
import getTags from "../../utilities/getTags"

const TagList = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  const tagData = getTags(recipes)
  return (
    <div className="row">
      {tagData.map((item, index) => {
        const [title, count] = item
        return (
          <div className="col-md-4" key={index}>
            <Tag title={title} count={count} />
          </div>
        )
      })}
    </div>
  )
}
const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default TagList
