import React from 'react'

export default function ({data}) {
  const recipe = data.goldenRecipe

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
    goldenRecipe(slug: { eq: $slug }) {
      name
      slug
      ingredients
      directions
    }
  }
`
