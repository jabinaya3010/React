import React from 'react'


const StudentCard = ({name , age , course ,isPlaced}) => {
   
   
  return (
    <>
   <h2>name : {name}</h2>
   <h2>age : {age}</h2>
    <h2>course : {course}</h2>
    <h2>Status : {isPlaced ? "Placed" : "Not Placed"}</h2>
    </>
  )
}

export default StudentCard