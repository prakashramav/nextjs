'use client'

import { useState } from "react"

const Views = () => {
    const [cout, setCount]=useState(0)
  return (
    <div onClick={() => setCount((prev) => prev + 1)}> {cout}views</div>
  )
}

export default Views