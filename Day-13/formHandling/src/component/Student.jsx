import React, { useState } from 'react'

const Student = () => {
    const [name,setName]=useState("")
    const [course,setCourse]=useState("")
    const [datas,setDatas]=useState([])

    const clickstudent=(e)=>{
        setName(e.target.value)
    }
    const clickcourse=(e)=>{
        setCourse(e.target.value)
    }
    const showdata=()=>{
        const detail={
           
            name:name,
            course:course,
        }
        const arr =[...datas]
        arr.push(detail)
        setDatas(arr)
        setName("")
        setCourse("")
    }
    
  return (
   <>
   <input type="text" placeholder='Enter student name' value={name} onChange={clickstudent} />
   <input type="text" placeholder='Enter course' value={course} onChange={clickcourse} />
   <button onClick={showdata}>click</button>
   {datas.map((e,id)=>(
    <div key={id}>
        <p>Name:{e.name}</p>
        <p>course:{e.course}</p>
    </div>
   ))}
   
   
   </>
  )
}

export default Student