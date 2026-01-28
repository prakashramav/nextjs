import React from 'react'

export const dynamicParams = false;

export const generatestaticparams = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json();
  return data.map((id) => ({blogID: `${id}`}))
  // return [
  //   {blogID: '1'},
  //   {blogID: '2'},
  //   {blogID: '3'}
  // ]
}
const Blog1 = async ({params}) => {
    const {blogID} = await params

  return (
    <div>
      <h1>Wecome to Our Blog {blogID} </h1>
      <p>This is blog {blogID} Page </p>
    </div>
  )
}

export default Blog1