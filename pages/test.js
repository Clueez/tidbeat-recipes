export const getServerSideProps = async () => {

    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    const data = await res.json();

    return {
        props: {ninjas: data }
    }

}
const Test = ({ninjas}) => {
    return (
        <div>
           {ninjas.map(ninja => (
               <h1 key={ninja.idMeal}>{ninja.strMeal}</h1>
           ))
           }
        </div>
    )
}

export default Test;