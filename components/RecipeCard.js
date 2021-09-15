import Link from 'next/link'
import styles from '../styles/RecipeCard.module.css'

// Materi UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const useStyles = makeStyles({
    cardTitle: {
        fontSize: 80 + "important",
        color: '#e91e63'
    },
    avatar: {
        backgroundColor: '#e91e63',
    }
})


const RecipeCard = ({ recipe }) => {

    const classes = useStyles() 

    return (
        <div>
            <Card className={styles.card}>
                <Link 
                    href='/recipes/[id]' as={`/recipes/${recipe.idMeal}`} 
                    key={recipe.strMeal}
                    passHref
                >   
                    <a>
                        <CardHeader
                            className={classes.cardTitle}
                            avatar={
                                <Avatar 
                                    className={classes.avatar}
                                    aria-label="recipe"
                                >
                                { recipe.strMeal.split('')[0].toUpperCase() }
                                </Avatar>
                            }
                            title={ recipe.strMeal }
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            image={recipe.strMealThumb}
                            title=""
                            height="200px"
                        />
                    </a>
                </Link>
                <CardContent className={styles.instructions}>
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        component="p"
                    >
                        { recipe.strInstructions }
                    </Typography>
                </CardContent>
                <CardActions className={styles.cardActions} disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton className={styles.viewIcon} aria-label="share">
                       <Typography variant="overline" className={styles.views}>
                           100 <VisibilityOutlinedIcon fontSize="small" className={styles.viewsIcon} />
                        </Typography>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}
 
export default RecipeCard;
