import React from 'react'

export default async function page({params}) {
    const {id} = params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const blog = await data.json();

  return (
    <div className='my-20'>
        <h1 className='text-5xl text-center font-bold'>Explore Blog Details</h1>
        <div className='my-10 w-[60%] mx-auto text-center'>
            <h3 className='text-3xl mb-5'>{blog.title}</h3>
            <p>{blog.body}</p>
        </div>
    </div>
  )
}
