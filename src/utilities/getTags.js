const getTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    const {
      content: { tags },
    } = recipe
    tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else if (!allTags[tag]) {
        allTags[tag] = 1
      }
    })
  })

  return Object.entries(allTags)
}

export default getTags
