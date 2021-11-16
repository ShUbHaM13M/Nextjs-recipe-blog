
import {IRecipe} from '../types'
import RecipeItem from './RecipeItem'

interface Props {
  recipes: IRecipe[]
}

const RecipeList = (props: Props) => {
  const {recipes} = props

  return <div>
    {recipes.map(recipe => <RecipeItem key={recipe._id} recipe={recipe} /> )}
  </div>
}

export default RecipeList