import React, { useState } from 'react'

const Employee = () => {
    const [name,setName]=useState("")
    const [course,setCourse]=useState("")
    const [salary,SetSalary]=useState("")

    const [datas,setDatas]=useState([])

    const clickstudent=(e)=>{
        setName(e.target.value)
    }
    const clickcourse=(e)=>{
        setCourse(e.target.value)
    }
    const clicksalary=(e)=>{
        SetSalary(e.target.value)
    }
    const showdata=()=>{
        const detail={
           
            name:name,
            course:course,
            salary:salary
        }
        const arr =[...datas]
        arr.push(detail)
        setDatas(arr)
        setName("")
        setCourse("")
    }
    
  return (
   <>
   <input type="text" placeholder='Enter  name' value={name} onChange={clickstudent} />
   <input type="text" placeholder='Enter department' value={course} onChange={clickcourse} />
   <input type="text" placeholder='enter salary' value={salary} onChange={clicksalary} />

   <button onClick={showdata}>click</button>
   {datas.map((e,id)=>(
    <div key={id}>
        <p>Name:{e.name}</p>
        <p>Department:{e.course}</p>
        <p>Salary:{e.salary}</p>
    </div>
   ))}
   
   
   </>
  )
}


export default Employee