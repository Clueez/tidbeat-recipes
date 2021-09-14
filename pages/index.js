import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getRecipes } from "../client"

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


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
        {/* Roboto Font for Material UI */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

      </Head>

      <main className={styles.main}>
        <Typography 
          variant="h1" 
          className={styles.title} 
          gutterBottom
        >
         Recipes List
        </Typography>
        
        <Grid container>
          <Grid item xs={12} md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>1</Paper>
          </Grid>
        </Grid>
        <div className="recipe-list">
          { recipes.map((recipe, index) => 
            { 
              return (
                <div className="recipe-card" key={index}>
                  <li>{recipe.strMeal}</li>
                </div>
              )
            }
          )}
        </div>

        

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
