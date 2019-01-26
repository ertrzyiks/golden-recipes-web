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
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Remote",
        fieldName: "remote",
        url: "http://golden-recipes-api.ertrzyiks.me",
      },
    },
  ],
}
