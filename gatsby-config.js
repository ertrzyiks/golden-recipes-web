module.exports = {
  pathPrefix: `/golden-recipes-web`,
  siteMetadata: {
    title: 'Golden Recipes Web',
    description: '',
    siteUrl: 'https://ertrzyiks.github.io/golden-recipes-web/',
    author: ''
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/recipes`,
        name: 'recipes',
      },
    },
  ],
}
