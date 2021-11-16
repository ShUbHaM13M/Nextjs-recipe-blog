import Head from 'next/head'
import RecipeList from '../components/RecipeList'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const {recipes} = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Free Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="is-size-2 py-2 has-text-centered">Free Recipes</h1>

      <div className="section">
        <RecipeList recipes={recipes} />
      </div>

    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch(`http://localhost:3000/api/recipe`)
  const data = await res.json()

  if (data) 
    return {
      props: data
    }
  return { notFound: true }
}