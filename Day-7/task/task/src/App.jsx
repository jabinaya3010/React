import React from 'react'

const App = () => {

  const course = "React JS"

  const price = 50000
  const discount = 5000

  const isLogin = true

  const profileImage = null

  const email = undefined

  const getCompanyName = () => {
    return ("Google")
  }

  const arr = ["Vijay", "Ajith", "Suriya", "SK", "Dhanush"]

  const obj = { Name: "Lokesh", Course: "React", Experience: "1 Month" }

  const students=[
    {id:101, name:"Lokesh", course:"React"},
    {id:102, name:"Aswin", course:"JavaScript"},
    {id:103, name:"Kathir", course:"Typing"}]


  const CompanyName="SLA"
  const TotalEmployees=2000
  const isHiring=true
  const CEO={
    name:"Lokesh",
    age:21,
    country:"India"
  }
  const Departments=["FullStack","JavaScript","React"]
  const Employees=[
    {name:"Lokesh", Dept:"React"},{name:"Aswin", Dept:"MERN"},{name:"Kathir", Dept:"Java"}]

  const getLocation=()=>{
    return "Kanchipuram"
  }



  return (
    <>
      <div className='bg-gray-400 p-10'>
        
        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-1</h2>
        <h1 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{course}</h1>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-2</h2>
        <div className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'><h1>{price}</h1>
        <h1>{discount}</h1></div>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-3</h2>
        <h1 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{isLogin ? "Welcome User" : "Please Login"}</h1>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-4</h2>
        <h1 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{profileImage ? "Image Found" : "Image Not Found"}</h1>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-5</h2>
        <h1 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{email ? "email" : "Email not Available"}</h1>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-6</h2>
        <h1 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{getCompanyName()}</h1>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-7</h2>
        <ul className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>
          {arr.map((e, i) => (

            <li key={i + 1}>{e}</li>

          ))}
        </ul>

        <div>
          <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-8</h2>
          <div className='flex justify-around'>
            <h3 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>Name : {obj.Name}</h3>
            <h3 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>Course : {obj.Course}</h3>
            <h3 className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>Experience : {obj.Experience}</h3>
          </div>
        </div>

        <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-9</h2>
       <div className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>{students.map((e,i)=>(
        <div key={i+1}>
        <p>{e.id}</p>
        <p>{e.name}</p>
        <p>{e.course}</p></div>
       ))}</div>

       <h2 className='bg-white text-black p-3 flex justify-center m-5'>Task-10</h2>
       <div className='bg-gradient-to-br from-gray-200 to-indigo-700 p-4 m-5'>
       <h1>{CompanyName}</h1>
       <h1>{TotalEmployees}</h1>
       <h1>{isHiring ? "You are Selected" : "You are not Selected"}</h1>
       <h1>{CEO.name}</h1><h1>{CEO.age}</h1><h1>{CEO.country}</h1>
       <h1>{Departments}</h1>
       <div>
        {Employees.map((e,i)=>(
        <div key={i+1}>
          <p>{e.name}</p>
          <p>{e.Dept}</p></div>
        ))}
        </div>
       </div>
      </div>



    </>
  )



}




export default App