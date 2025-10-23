"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const AddMealPage = () => {
  const [addedMeals, setAddedMeals] = useState([]);

  const fetchAddedMeals = async () => {
    const res = await fetch("/api/meal");
    const data = await res.json();
    console.log(data);
    setAddedMeals(data);
  };

  useEffect(() => {
    fetchAddedMeals();
  }, []);

  if (addedMeals.length === 0) {
    return <p className="p-6 text-gray-600">No meals added yet.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Added Meals</h1>
      <div className="grid grid-cols-3 gap-8">
        {addedMeals.map((meal) => (
          <div
            key={meal._id} // ✅ fix here
            className="border rounded-xl p-4 shadow-md hover:shadow-lg"
          >
            <Image
              src={meal.image}
              alt={meal.name}
              width={400}
              height={400}
              className="rounded-lg"
            />
            <p className="font-semibold mt-2">{meal.name}</p>
            <p className="text-sm text-gray-500">{meal.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMealPage;
