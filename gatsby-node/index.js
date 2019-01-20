const path = require('path')

function createIndexPage({ actions, graphql }) {
  const { createPage } = actions

  return graphql(`
    { 
      allGoldenRecipe(
       sort: { order: ASC, fields: [name] }
      ) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allGoldenRecipe.edges
    const postsPerPage = 10
    const totalPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: totalPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/page/${i + 1}`,
        component: path.resolve('./src/templates/post-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: totalPages,
          currentPage: i + 1
        },
      })
    })
  })
}

module.exports = {
  createIndexPage
}
