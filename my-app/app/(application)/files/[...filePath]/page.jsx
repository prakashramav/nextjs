import React from 'react'

const File = async ({params}) => {
    const {filePath} = await params

  return (
    <div>
      <h1>File /{filePath.join('/')}</h1>
    </div>
  )
}

export default File
