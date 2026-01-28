'use client'

import { useEffect, useState } from "react"

const Post = () => {
    const [pdata, setData] =useState()
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    },[])
    console.log(pdata);
  return (
    <div>
        <h1>Posts</h1>
        {
            pdata && pdata.map((item) => (
                <div key={item.id} style={{border:"solid 2px green", margin:"10px",padding:"10px"}}>{item.title}{item.body}</div>
            ))
        }
    </div>
  )
}

export default Post