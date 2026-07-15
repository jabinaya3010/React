import React, { useState } from 'react'

const Button = () => {
     const[count,setCount]=useState(0)
    function show(){
      setCount(count+1)
    }
    

  return (
    <div>
        <p>{count}</p>
        <button onClick={show}>Click Me</button>
       
        
    </div>
  )
}

export default Button