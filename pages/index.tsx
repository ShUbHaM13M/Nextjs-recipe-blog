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

export async function getServerSideProps () {
  let url = process.env.SERVER_URL  
  if (process.env.VERCEL_URL) {
    url = process.env.VERCEL_URL === 'https://something-else.now.sh'? 'https://exmaple.com': process.env.VERCEL_URL
  }

  const res = await fetch(`${url}/api/recipe`)
  const data = await res.json()

  if (data) 
    return {
      props: data
    }
  return { notFound: true }
}
