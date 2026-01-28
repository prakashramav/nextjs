import React from 'react'
import Link from 'next/link'
// import Views from '../../../components/Views'
import Views from '@/components/Views'
const page = async ({params}) => {
    console.log(await params)
  return (
    <div>
      <h1>All Blogs</h1>
      <p>
        <Link href='/blogs/1'>Blog 1</Link>
      </p>
      <p>
        <Link href='/blogs/2'>Blog 2</Link>
      </p>
      <p>
        <Link href='/blogs/3'>Blog 3</Link>
      </p>
      <div>
        <Views />
      </div>
    </div>
  )
}

export default page
