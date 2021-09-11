import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getRecipes } from "../client"

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(true);

  const getRecipesList = async () => {
    try {
      const { meals } = await getRecipes('');
      setIsFetchingData(false);
      setRecipes(meals ?? []);
    } catch (e) {
      setIsFetchingData(false);
      console.error(e);
    }
  }

  useEffect(() => {
    getRecipesList();
  }, [recipes])

  return (
    <div className={styles.container}>
      <Head>
        <title>Tidbeat Recipes App</title>
        <meta name="description" content="Sample app for recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Recipes List
        </h1>

        {recipes.map((recipe, index) => {return(<div key={index}> <li>{recipe.strMeal}</li></div>)})}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
