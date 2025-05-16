import React from 'react'

const Blogs = (props) => {
  return (
    <div>
      <div className='con'>
        <h1>{props.Blogtitle}</h1>
        <p>{props.BlogDesc}</p>
      </div>
    </div>
  )
}

export default Blogs
