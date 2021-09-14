import * as React from "react";
import styles from '../styles/Home.module.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cards = ({ imgSrc, imgAlt, title, desc, category, area }) => {
    return (
        <Card id={styles.shadow} sx={{ maxWidth: 480 }}>
            <Typography variant="body2" gutterBottom className={styles.flexCont}>
                <p className={styles.imgText}>{title.charAt(0)}</p>
                <p id={styles.imageCont}><img id={styles.profile}></img></p>
                <p className={styles.name}><nobr className={styles.blueText}>{title}</nobr><br />
                    {category + ", " + area}</p>
                <p id={styles.threeDot}><i className="fas fa-ellipsis-v" /></p>
            </Typography>
            <CardMedia className={styles.image} height={700} width={700} image={imgSrc} title={imgAlt} />
            <CardContent id={styles.bottom}>
                <div className={styles.instructions}>
                    {desc}
                </div>
                <div className={styles.flexCont2}>
                    <p className={styles.like}><i className="far fa-heart" /></p>
                    <p className={styles.delete}><i className="fas fa-trash" /></p>
                </div>
            </CardContent>
        </Card>
    );
};

export default Cards;