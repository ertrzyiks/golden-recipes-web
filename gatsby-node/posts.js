const path = require('path')

function createPostPages({ actions, graphql }) {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/post-page.js`)

  return graphql(`
    { 
      remote {
        allRecipes {
          name
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.remote.allRecipes

    posts.forEach(node => {
      createPage({
        path: node.slug,
        component: blogPostTemplate,
        context: {
          slug: node.slug
        }
      })
    })
  })
}

module.exports = {
  createPostPages
}
