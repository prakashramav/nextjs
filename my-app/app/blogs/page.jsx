import React from 'react'

const page = async ({params}) => {
    console.log(await params)
  return (
    <div>
      <h1>All Blogs</h1>
      <p>Blog 1</p>
      <p>Blog 2</p>
      <p>Blog 3</p>
    </div>
  )
}

export default page
