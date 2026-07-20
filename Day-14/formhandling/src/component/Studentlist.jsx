import React, { useState } from 'react'

export const Studentlist = () => {
    const[list,setList]=useState("")
    const [data,setData]=useState([])
    const handlechange =(e)=>{
      setList(e.target.value)
    }
    const handleclick=(e)=>{
        e.preventDefault()
        const store =[...data]
        store.push(list)
        setData(store)
        setList("")
    }
  return (
    <>
    <form onSubmit={handleclick} >
    <input type="text" placeholder='enter name' value={list} onChange={handlechange} />
    <input type="submit" value='Add' />
    </form>
    <ul>
    {data.map((e,i)=>(
        <div >
        <li key={i+1}>{e}</li>
        </div>
    ))}
    </ul>
    </>
  )
}
