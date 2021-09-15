import { getRecipes } from "../../client"
import { useState, useEffect } from 'react'

import { useRouter } from "next/router";


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
        <div>
            {recipes.map((recipe, index) => {
                return(
                    <div key={index}>
                        <h1>{ recipe.strMeal }</h1>
                        <p>{ recipe.strInstructions }</p>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Details;