import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getRecipes } from "../client"


// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import RecipeCard from '../components/RecipeCard'


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
  }, [])

  return (
    <Container className={styles.container}>
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
          component="h1"
          className={styles.title} 
          gutterBottom
        >
         Recipes List
        </Typography>
        
        <Grid container className="recipe-list">
          { recipes.map((recipe, index) => 
            { 
              return (
                <Grid 
                  item
                  xs={12} 
                  md={6}
                  lg={4}
                  className="recipe-card" 
                  key={index}
                >
                  <RecipeCard recipe={ recipe } />
                </Grid>
              )
            }
          )}
        </Grid>
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
    </Container>
  )
}
