import Head from 'next/head'
import RecipeList from '../components/RecipeList'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  const {data, url} = props;
  
  return (
    <div className={styles.container}>
      {console.log(url)}
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Free Recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="is-size-2 py-2 has-text-centered">Free Recipes</h1>

      <div className="section">
        <RecipeList recipes={data.recipes} />
      </div>

    </div>
  )
}

export async function getServerSideProps () {
  let url = `${process.env.VERCEL_URL}/api/recipe`
  console.log(url)

  const res = await fetch(url)
  const data = await res.json()

  if (data) 
    return {
      props: {
        data,
        url
      },
    }
  return {
    props: {
      url
    }
  }
}
