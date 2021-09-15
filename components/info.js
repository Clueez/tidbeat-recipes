import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Info = ({ title, instructions, imgSrc, category, area, tags, src }) => {
    const [ingri, setIngri] = useState('');
    const [source, setSource] = useState(src);

    const Ingridients = (src) => {
        try {
            var Ingridient = "";
            const ingridients = [src.strIngredient1,src.strIngredient2,,src.strIngredient3,src.strIngredient4,src.strIngredient5,
                src.strIngredient6,src.strIngredient7,src.strIngredient8,src.strIngredient9,src.strIngredient10,src.strIngredient11,src.strIngredient12,
                src.strIngredient13,src.strIngredient14,src.strIngredient15,src.strIngredient16,src.strIngredient17,src.strIngredient18,
                src.strIngredient19];
                Ingridient+=ingridients[0];
            for (var i = 1; i <= 19; i++) {
                if(ingridients[i]!=""){
                    Ingridient+=", "+ingridients[i];
                }
            }
            setIngri(Ingridient);
        }catch(e){

        }
    }

    useEffect(() => {
        setSource(src);
        Ingridients(source);
    },[src, source])

    return (
        <div className={styles.details}>
            <Image className={styles.detailImg} width={900} height={400} layout="responsive" src={imgSrc||"https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"} alt={title} name={title} />
            <div className={styles.info}>
                <p className={styles.titleText}>{title}</p>
                <p>Category : <nobr className={styles.textBold}>{category}</nobr>, Area <nobr className={styles.textBold}>{area}</nobr>, Tags: <nobr className={styles.textBold}>{tags}</nobr></p>
                <h3>Ingredients</h3>
                <p>{ingri}</p>
                <h3>Instructions</h3>
                <p>{instructions}</p>
                <div className={styles.icons}>
                    <div className={styles.save}><i className="fas fa-save"></i></div>
                    <div className={styles.heart}><i className="far fa-heart" /></div>
                    <div className={styles.share}><i className="fas fa-share-alt"></i></div>
                </div>
            </div>
        </div>
    );
}

export default Info;