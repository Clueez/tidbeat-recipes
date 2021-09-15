import { useRouter } from 'next/router';
import Info from '../../components/info';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

export default function Detail() {
    const [details, setDetails] = useState({});
    const [isFetchingData, setIsFetchingData] = useState(true);

    const router = useRouter();
    const { id } = router.query;

    const [pageId, setPageId] = useState(id);

    useEffect(() => {
        const { id } = router.query;
        setPageId(id);
        try{
            axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + pageId)
            .then(response => {
                const itemDetails = response.data;
                setIsFetchingData(false);
                if(pageId!=undefined){
                    const src = itemDetails.meals[0];
                setDetails({ imgSrc: src.strMealThumb, src: src, title: src.strMeal, area: src.strArea, category: src.strCategory, tags: src.strTags, instructions: src.strInstructions });
                }
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
        }catch(e){

        }
    },[router.query, pageId]);

    return (
        <>
            <Head>
                <title>Details</title>
                <meta name="description" content="Details for recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Info imgSrc={details.imgSrc} src={details.src} title={details.title} area={details.area} category={details.category} tags={details.tags} instructions={details.instructions} />
            </main>
        </>
    );
}