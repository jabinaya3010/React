import React, { useState } from 'react'

const Boolean = () => {
  const[count,setCount]=useState(true)
      function show(){
        setCount(!count)
      }
      
  
    return (
      <div>
          <p>{count ?"Login successful" : "please login"}</p>
          <button onClick={show}>Click Me</button>
         
         
          
      </div>
    )
}

export default Boolean