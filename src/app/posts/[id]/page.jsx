import Link from "next/link";
import React from "react";

// ✅ Fetch posts
export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    

  const data = await res.json();
  return data;
  
};

const Postpage = async ({params}) => {
  const p = await params;
  const posts = await getSinglePost(p.id);

  return (
    <div className="p-8 space-y-6">
        {JSON.stringify(posts)}
        <h1>{posts.title}</h1>
    </div>
    
  );
};

export default Postpage;
