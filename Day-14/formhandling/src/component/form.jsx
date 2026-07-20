import React from 'react'

const form = () => {
  const [data,setData]=useState({username:"",userage:""})
  const [save,setSave]=useState([])
  const handlechange =(e)=>{
    
   setData({...data,[e.target.name]:e.target.value})

    
  }
  const handleClick=(e)=>{
  e.preventDefault()
  const newData = [...save]
  const detail ={
    id:Date.now(),
    data
  }
  newData.push(data)
  setSave(newData)
  console.log(save);
  
  setData({username:"",userage:""})

  }
  return (
    <>
    <form onSubmit={handleClick}>
      <input type="text" placeholder='enter name' name='username' onChange={handlechange} value={data.username} />
      <input type="text"placeholder='enter age' name='userage'    onChange={handlechange} value={data.userage} />
     <input type="submit" value='register'/>
    
    </form>

     <div>
      {save.map((e,i)=>(
      <div key={e.id}>
        <p>{i+1}-Name:{e.username},Age:{e.userage}</p> 
      </div>
    ))}
     </div>
    
    </>
  )
}

export default form