import React from "react"
import Tag from "./Tag"

const TagList = () => {
  const list = [1, 2, 3, 4, 5]
  return (
    <div className="row">
      {list.map(item => {
        return (
          <div className="col-md-4">
            <Tag />
          </div>
        )
      })}
    </div>
  )
}

export default TagList
