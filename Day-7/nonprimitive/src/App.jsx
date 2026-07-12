import React from 'react'

const App = () => {
  const arr =[1,2,3,4,5,6]
  const array =["Abinaya","Amritha","Atchaya","Ignatius","Infant Alan","Karthick"]
  return (
    <>
    <div className='flex justify-center border-3 bg-violet-400 border-dashed '>
    <div className='bg-amber-700 p-10 w-80 text-3xl text-center flex gap-5 justify-center '>
      <ul className='bg-amber-300 '>
        {arr.map((e,i)=>(
          <li key={i+1}>{e}</li>
        ))}
      </ul>
      <ul className='bg-amber-100'>
        {array.map((e,i)=>(
          <li key={i+1}>{e}</li>
        ))}
      </ul>
    </div>
    </div>
    </>
  )
}
export const Vibe =()=>{
  const obj = {name:"Abinaya",age:21}
  return(
    <>
    <div className='flex justify-center border-3 bg-amber-200 border-dashed border-indigo-500 p-5 '>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
    </div>
    </>
  )
}

export default App