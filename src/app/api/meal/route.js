import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mealDB");          // your database
    const meals = await db.collection("meals").find().toArray();
    return NextResponse.json(meals);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch meals" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("mealDB");

    const body = await request.json();
    const newMeal = {
      name: body.name,
      image: body.image,
      category: body.category,
      createdAt: new Date(),
    };

    await db.collection("meals").insertOne(newMeal);

    return NextResponse.json({ message: "Meal added successfully", meal: newMeal });
  } catch (err) {
    return NextResponse.json({ message: "Failed to add meal" }, { status: 500 });
  }
}
