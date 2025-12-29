import React from 'react'

const  Comments = async ({params}) => {
    const paramsObj = await params
    console.log(paramsObj);
    const {blogID} = paramsObj
  return (
    <div>
      <p>All Comments on <b>{blogID}</b> page </p>
    </div>
  )
}

export default  Comments
