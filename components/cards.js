import * as React from "react";
import styles from '../styles/Home.module.css';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Link from 'next/link';
import Image from 'next/image';

const Cards = ({ imgSrc, imgAlt, title, desc, category, area, id }) => {
    return (
        <Link href={"/detail/"+id} passHref>
        <Card id={styles.shadow} sx={{ maxWidth: 480 }}>
        <a className={styles.link}>
            <div className={styles.flexCont}>
                <p className={styles.imgText}>{title.charAt(0)}</p>
                <p id={styles.imageCont}><img id={styles.profile} alt="profile"></img></p>
                <p className={styles.name}><nobr className={styles.blueText}>{title}</nobr><br />
                    {category + ", " + area}</p>
                <p id={styles.threeDot}><i className="fas fa-ellipsis-v" /></p>
            </div>
            <Image className={styles.image} height={400} width={700} layout="responsive" src={imgSrc} title={imgAlt}  alt="receipe"/>
            <CardContent id={styles.bottom}>
                <div className={styles.instructions}>
                    {desc}
                </div>
                <div className={styles.flexCont2}>
                    <p className={styles.like}><i className="far fa-heart" /></p>
                    <p className={styles.delete}><i className="fas fa-trash" /></p>
                </div>
            </CardContent>
            </a>
        </Card>
    </Link>
    );
};

export default Cards;