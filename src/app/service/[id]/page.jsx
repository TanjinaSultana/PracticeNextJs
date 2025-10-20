import React from 'react';

const ServiceDatapage = ({params}) => {
     const data=
    [
  { "id": "1", "title": "Introduction to Web Accessibility" },
  { "id": "2", "title": "Building RESTful APIs with Node.js" },
  { "id": "3", "title": "Advanced CSS Layout Techniques" }
]
    const id = params.id;
    const singledata = data.find(d=> d.id== id)
    return (
        <div>
            <h1>hello from {singledata.title}</h1>
            <h2>Id from: {singledata.id}</h2>
        </div>
    );
};

export default ServiceDatapage;