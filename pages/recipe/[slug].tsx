import { IRecipe } from "../../types"
import Head from 'next/head'

interface Props {
  recipe: IRecipe
}

const Recipe = (props) => {
  const {recipe}: {recipe: IRecipe} = props;

  return <div className="container p-4">

    <Head>
      <title>{recipe.title}</title>
    </Head>

    <h2 className="title has-text-centered">
      {recipe.title}
    </h2>
    <div className="is-flex is-justify-content-center">
      {recipe.info.map((info, index) => {
        return <div key={index} className="tag m-2 is-dark p-4 is-size-6">
          {info.header} : {info.body}
        </div>
      })}
    </div>
    
    <div className="mx-4">
      <h4 className="is-size-4 has-text-primary">Ingredients: </h4>
      <div className="box my-4" style={{
        border: '1px solid hsl(171, 100%, 41%)'
      }}>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="is-bordered">{ingredient}</div>
        ))}
      </div>
    </div>

  <div className="mx-4">
      <h4 className="is-size-4 has-text-primary">Directions: </h4>
      <div className="box my-4" style={{
        border: '1px solid hsl(171, 100%, 41%)'
      }}>
        {recipe.directions.map((directions, index) => (
          <div className="is-bordered" key={index}>
            {index + 1} : {directions}
            {index + 1< recipe.directions.length ? 
              <>
                <br />
                <p className="has-text-primary is-size-4">-----------</p> 
              </>: ''
            }
            </div>
        ))}
      </div>
    </div>

  </div>
}

export async function getServerSideProps(context) {

  return {
    props: {
      recipe: JSON.parse(context.query.recipe)
    }
  }
}

export default Recipe