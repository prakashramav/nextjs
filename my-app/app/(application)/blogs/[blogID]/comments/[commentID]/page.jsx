import React from 'react'

const Comment = async ({params}) => {
    const paramsObj = await params
    console.log(paramsObj);
    const {blogID, commentID} = paramsObj
  return (
    <div>
      <p>Comment No.<i>{commentID} on <b>{blogID}</b></i></p>
    </div>
  )
}

export default Comment