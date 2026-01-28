import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href='/'>Home</Link> {' '} <Link href='/services'>Services</Link>
    </div>
  )
}

export default About
