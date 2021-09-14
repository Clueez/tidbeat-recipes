import * as React from "react";
import styles from '../styles/Home.module.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cards = ({ imgSrc, imgAlt, title, desc, pagePath, ctaText }) => {
    return (
        <Card sx={{ maxWidth: 480 }}>
            <Typography variant="body2" gutterBottom>
                {title}
            </Typography>
            <CardMedia className={styles.image} height={700} width={700} image={imgSrc} title={imgAlt} />
            <CardContent>
                <Typography noWrap variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cards;