const crypto = require('crypto')
const slugify = require('underscore.string/slugify')

const { createPostPages } = require('./gatsby-node/posts')
const { createIndexPage } = require('./gatsby-node/index')

exports.onCreateNode = async function ({ node, actions, createNodeId, loadNodeContent }) {
  if (node.internal.type != 'File' || node.internal.mediaType !== 'application/json') {
    return
  }

  const { createNode } = actions
  const content = await loadNodeContent(node)

  const recipes = JSON.parse(content)

  recipes.forEach(recipeContent => {
    const slug = slugify(recipeContent.name)

    const recipeNode = {
      id: createNodeId(`${recipeContent.name} >>> GoldenRecipe`),
      ...recipeContent,
      slug,
      children: [],
      parent: node.id,
      internal: {
        content: JSON.stringify(recipeContent),
        type: `GoldenRecipe`,
      },
    }

    recipeNode.internal.contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(recipeNode))
      .digest(`hex`)

    createNode(recipeNode)
  })
}

exports.createPages = ({ actions, graphql }) => {
    return Promise.resolve()
      .then(() => createIndexPage({ actions, graphql }))
      .then(() => createPostPages({ actions, graphql }))
}
