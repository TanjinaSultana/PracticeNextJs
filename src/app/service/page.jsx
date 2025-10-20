import Link from 'next/link';
import React from 'react';

const Servicepage = () => {
    const data=
    [
  { "id": "1", "title": "Introduction to Web Accessibility" },
  { "id": "2", "title": "Building RESTful APIs with Node.js" },
  { "id": "3", "title": "Advanced CSS Layout Techniques" }
]

    return (
        <div>
            <h1>ServicePage</h1>
            {
data.map((d,index)=>{
    return(
        <div key={index}> 

    <Link href={`/service/${d.id}`}>
    <h1>{d.title}</h1>
    </Link>
        </div>
    )
})
            }
        </div>
    );
};

export default Servicepage;