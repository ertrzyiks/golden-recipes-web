module.exports = {
  siteMetadata: {
    title: 'Golden Recipes Web',
    description: '',
    siteUrl: '',
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
