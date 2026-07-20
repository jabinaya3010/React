import React, { useState } from 'react'

const StudentDetails = () => {
    const [detail,setDetail]=useState({username:"",usercourse:""})
    const [data,setData]=useState([])
    const handleclick =(e)=>{
        setDetail({...detail,[e.target.name]:e.target.value})
    }
    const handlechange =(e)=>{
        e.preventDefault()
        const store =[...data]
        const name={
            id:Date.now(),
            detail
        }
        store.push(detail)
        setData(store)
        setDetail({username:"",usercourse:""})
    }
  return (
   <>
   <form onSubmit={handlechange}>
    <input type="text" placeholder='enter name'  name='username' value={detail.username}  onChange={handleclick} />
    <input type="text" placeholder='enter course' name='usercourse' value={detail.usercourse}  onChange={handleclick} />
    <input type="submit" value='register' />
   </form>
   
   {data.map((e,i)=>(
    <div key={e.id}>
        <p>{i+1}-{e.username}-{e.usercourse}</p>
    </div>
   ))}
   
   
   </>
  )
}

export default StudentDetails