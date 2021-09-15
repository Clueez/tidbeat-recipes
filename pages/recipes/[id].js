import { getRecipes } from "../../client"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '../../styles/RecipeDetail.module.css'


// Material UI imports
import Container from '@material-ui/core/Container'
import { Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const Details = () => {
    
    const { query } = useRouter();
    const id = query.id


    const [recipes, setRecipes] = useState([]);
    const [isFetchingData, setIsFetchingData] = useState(true);

    const getRecipesList = async () => {
        try {
        const { meals } = await getRecipes(id);
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
        <Container className={styles.container} maxWidth="md">
            {recipes.map((recipe, index) => {
                return(
                    <div key={index}>
                        <Typography
                            variant="h3"
                            component="h1"
                            align="center"
                            className={styles.title}
                            gutterBottom
                        >
                            { recipe.strMeal }
                        </Typography>
                        <Image 
                            src={ recipe.strMealThumb }
                            alt={ recipe.strMeal }
                            height={400}
                            width={900}
                        />
                        <br />
                        <Typography variant="h3" component="p" align="center">
                            . . .
                        </Typography>

                        <h3>Ingrediants: </h3>
                        <Typography
                            variant="body1"
                            component="p"
                        >
                            { recipe.strIngredient1 + ", " + recipe.strIngredient2 + ", " + recipe.strIngredient3 + ", " + recipe.strIngredient4 + ", " + recipe.strIngredient5}
                        </Typography>
                        
                        <h3>Instructions: </h3>
                        <Typography
                            variant="body1"
                            component="p"
                        >
                            { recipe.strInstructions }
                        </Typography>
                        <br />
                        <hr />
                        <div>
                            <Typography 
                                variant="caption"
                                component="p"
                            >
                                <p className={styles.likes}>
                                    <span className={styles.likeCount}>50</span>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon className={styles.likeIcon} fontSize="small" />
                                    </IconButton>
                                    <span className={styles.viewCount}>100 views</span>
                                    <IconButton aria-label="save">
                                        <BookmarkBorderIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <Typography 
                                        variant="caption" 
                                        component="span"
                                        className={styles.recipeArea}
                                    >
                                        { recipe.strArea}
                                    </Typography>
                                </p>
                            </Typography>
                            
                        </div>
                        <hr />

                        <Typography 
                            variant="body1" 
                            component="p"
                            gutterBottom
                        >   Tags: 
                            <Typography
                                variant="overline"
                                component="span"
                                className={styles.tags}
                            >
                                { recipe.strTags }
                            </Typography>
                        </Typography>
                    </div>
                )
            })}
        </Container>
    );
}
 
export default Details;