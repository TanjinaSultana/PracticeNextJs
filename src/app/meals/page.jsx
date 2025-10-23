import Image from "next/image";
import MealInput from "./components/MealInput";
import { Poppins } from "next/font/google";
import AddButton from "./components/AddButton"; // Client component

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Mealpage = async ({ searchParams }) => {
  // ✅ Await the searchParams first
  const params = await searchParams;
  const query = params?.search || "";

  // Fetch meals from API
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      return data?.meals || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className={poppins.className}>
      <MealInput />
      <div className="grid grid-cols-3 gap-12 p-4">
        {meals.map((e, index) => (
          <div key={index} className="rounded-lg shadow-md p-4">
            <Image
              src={e.strMealThumb}
              width={400}
              height={400}
              alt={e.strMeal}
              className="rounded-xl"
            />
            <p className="text-lg font-semibold mt-2">{e.strMeal}</p>

            {/* ✅ Client component for interactivity */}
            <AddButton meal={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mealpage;
