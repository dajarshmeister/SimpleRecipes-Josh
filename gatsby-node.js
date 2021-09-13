exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      actions.createPage({
        path: `/tags/${tag}`,
        component: require.resolve(`./src/templates/tag-template.js`),
        context: { tag: tag },
      })
    })
  })
}
