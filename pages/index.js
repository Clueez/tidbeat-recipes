import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getRecipes } from "../client"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Cards from "../components/cards";


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
        <script src="https://kit.fontawesome.com/23c0e963da.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <main id={styles.fullScreen} className={styles.main}>
        <h1 className={styles.title}>
          Recipes List
        </h1>

        <Container sx={{ my: 15 }} id={styles.fullScreen}>
          <Grid container spacing={2}>
            {recipes.map((recipe, index) => { return (<Grid container item justifyContent="center" xs={12} lg={4} md={6}><Cards key={index} id={recipe.idMeal} imgSrc={recipe.strMealThumb} title={recipe.strMeal} desc={recipe.strInstructions} category={recipe.strCategory} area={recipe.strArea} ></Cards></Grid>) })}
          </Grid>
        </Container>

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
