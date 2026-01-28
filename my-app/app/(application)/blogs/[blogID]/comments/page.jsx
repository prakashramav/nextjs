import React from 'react'
// import Views from '@components/Views'
const  Comments = async ({params}) => {
    const paramsObj = await params
    console.log(paramsObj);
    const {blogID} = paramsObj
  return (
    <div>
      <p>All Comments on <b>{blogID}</b> page </p>
      {/* <Views /> */}
    </div>
  )
}

export default  Comments
