import React from 'react'
import {graphql, Link} from 'gatsby'

export default function ({data}) {
  const Posts = data.remote.allRecipes
    .map(recipe => {
      return <li key={recipe.slug}>
        <Link to={recipe.slug}>{recipe.name}</Link>
      </li>
    })

  return <ul>{Posts}</ul>
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    remote {
      allRecipes (
        limit: $limit
        skip: $skip
      ) {
        slug
        name
      }
    }
  }
`
