import React, { useEffect, useState } from 'react'

const Increment = () => {
    const[increment,SetIncrement]=useState(0)
    const handleclick=()=>{
        SetIncrement(increment+1)
    }
    useEffect(()=>{handleclick()},[])
  return (
    <>
  <p>{increment}</p>
    <button onClick={handleclick}>Increment</button>
    </>
  )
}

export default Increment