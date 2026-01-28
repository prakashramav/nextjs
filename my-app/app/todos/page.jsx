import React from 'react'

const Todos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await response.json();
    console.log(data);
  return (
    <div>
        <h1>Todos Page</h1>
        {
            data && data.map((item) => (
                <div key={item.id} style={{border:"solid 2px green", margin:"10px",padding:"10px", display:"flex"}}>
                    <input type='checkbox' checked={item.completed} readOnly/>
                    <p>{item.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Todos