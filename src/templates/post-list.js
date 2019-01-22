import React from 'react'
import {graphql, Link} from 'gatsby'

export default function ({data}) {
  const Posts = data.allGoldenRecipe.edges
    .map(({node: recipe}) => {
      return <li key={recipe.id}>
        <Link to={recipe.slug}>{recipe.name}</Link>
      </li>
    })

  return <ul>{Posts}</ul>
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allGoldenRecipe (
      sort: { order: DESC, fields: [name] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id 
          slug
          name
        }
      }
    }
  }
`
