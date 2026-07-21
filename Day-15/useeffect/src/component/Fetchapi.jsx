import React, { useEffect, useState } from 'react'

const Fetchapi = () => {
  

// console.log('Compoennt running');

const [datas,setDatas] = useState([])



 const TakeData = async()=>{
      console.log('Fetch FUnction RUnning');
       const getData = await fetch("https://jsonplaceholder.typicode.com/users")
     const changeData = await getData.json()
     
console.log(changeData);
    setDatas(changeData)
   
 }

useEffect(()=>{
  
  TakeData()
},[])



  
  return (
    <>
 
   
   <div>
    {datas.map((e)=>(
      <div key={e.id}>
        <table border='2'cellPadding="10" cellSpacing="0">
            <thead>
            <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
            </tr>
            </thead>
        </table>
       
      </div>
    ))}
   </div>
   
    </>
  )
}


export default Fetchapi