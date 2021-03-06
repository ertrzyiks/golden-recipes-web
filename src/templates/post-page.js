import React from 'react'
import {graphql} from 'gatsby'

export default function ({data}) {
  const recipe = data.remote.recipe

  const Ingredients = recipe.ingredients.map(ingredient => {
    return <li>{ingredient}</li>
  })


  const Directions = recipe.directions.map(direction => {
    return <li>{direction}</li>
  })

  return <div>
    <h1>{recipe.name}</h1>

    <h3>Ingredients</h3>
    <ul>{Ingredients}</ul>

    <h3>Directions</h3>
    <ul>{Directions}</ul>
  </div>
}

export const pageQuery = graphql`
  query($slug: String!) {
    remote {
      recipe(slug: $slug) {
        name
        slug
        ingredients
        directions
      }
    }
  }
`
