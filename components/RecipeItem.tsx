import { IRecipe } from "../types";
import Link from 'next/link'

interface Props {
  recipe: IRecipe
}

const RecipeItem = (props: Props) => {

  const {recipe} = props

  return <div
    className="card "
  >
    <div className="card-header">
      <Link href={{
        pathname: `/recipe/${recipe.slug}`,
        query: {
          recipe: JSON.stringify(recipe)
        }
      }}  >
        <p className="card-header-title">
          {recipe.title}
        </p>
      </Link>
    </div>
    <div className="card-content">
      {recipe.info.map((info, index) => (
        <div key={index} className="tag is-primary m-2 p-4 is-size-6">
          {info.header} : {info.body}
        </div>
      ))}
    </div>
  </div>

}

export default RecipeItem;