import React from 'react'
import StudentCard from './component/StudentCard'
import EmployeeCard from './component/EmployeeCard'
import StudentList from './component/StudentList'

const App = () => {
  const employe ={name:"Abi",email:"jabi@gmail.com",city:"trichy",experience:2}
  const students = [
  {
    id: 1,
    name: "Sudhan",
    course: "React"
  },
  {
    id: 2,
    name: "Abinaya",
    course: "Java"
  },
  {
    id: 3,
    name: "Rahul",
    course: "Python"
  },
  {
    id: 4,
    name: "Priya",
    course: "UI/UX"
  },
  {
    id: 5,
    name: "Karthik",
    course: "Full Stack"
  }
];
  return (
    <>
    <StudentCard name = "react" age={21} course="fullstack" isPlaced={true}/>
    <EmployeeCard details={employe}/>
    <StudentList data={students}/>
    </>
  )
}

export default App