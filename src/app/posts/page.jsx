import Link from "next/link";
import React from "react";

 
export const metadata = {
  title: "Posts",
  description: "All available posts",
};
// ✅ Fetch posts
export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // ensures fresh data every time (optional)
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return data;
};

const Postpage = async () => {
  const posts = await getPost();

  return (
    <div className="p-8 space-y-6">
      {posts.map((d) => (
        <div
          key={d.id}
          className="border p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <h1 className="font-bold text-2xl text-blue-600 mb-2">{d.title}</h1>
          <p className="text-gray-700 mb-4">{d.body}</p>
          <Link href={`/posts/${d.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Show More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Postpage;
