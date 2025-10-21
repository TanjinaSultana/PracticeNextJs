import MealInput from "./components/MealInput";

const Mealpage = async({searchParams}) => {
    const query = await searchParams
    
    
    const fetchMeals = async ()=>{
        try{

            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
            const data = await res.json();
            return data?.meals;
        }
        catch(error){
            console.log(error);
        }
    }
   const meals = await fetchMeals();

    return (
        <div>
       <MealInput></MealInput>
        <div className='grid grid-cols-3 gap-12 '>
            {meals?.map((e,index)=>{
             return   <p key={index}>{e.strMeal}</p>
            })}
        </div>
        </div>
    );
};

export default Mealpage;