import React from 'react'

const Section = (props) => {
  return (
    <div className='section'>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
        <hr />
    </div>
  )
}

export default Section