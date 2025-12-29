import React from 'react'

const Blog1 = async ({params}) => {
    const {blogID} = await params

  return (
    <div>Blog {blogID}</div>
  )
}

export default Blog1