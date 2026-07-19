import React, { useState } from 'react'

const Name = () => {
  const [userName,setUsername]=useState("")
  const [save,setSave]=useState([])
  
  const clickHandle =(e)=>{
     setUsername(e.target.value)
  }
  const handlechange =()=>{
    const data = [...save]

    data.push(userName)
    setSave(data)

    setUsername("")

  }

  return (
    <>
    
    <input type="text" placeholder='Enter ur Name' value={userName} onChange={clickHandle} />
    <button onClick={handlechange}> click</button>

    {save.map((e,i)=>(
      <div key={i+1}>
        <p>{e}</p>
      </div>
    ))}
    
    
    
    </>
  )
}

export default Name