"use client";

import { useRouter } from "next/navigation";

const AddButton = ({ meal }) => {
  const router = useRouter();

  const handleAddMeal = async () => {
    const res = await fetch("/api/meal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: meal.strMeal,
        image: meal.strMealThumb,
        category: meal.strCategory,
      }),
    });

    const data = await res.json();
    console.log("Added:", data);

    // Navigate to /addmeal page
    router.push("/addmeal");
  };

  return (
    <button
      onClick={handleAddMeal}
      className="mt-3 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
    >
      Add
    </button>
  );
};

export default AddButton;
