import React from 'react'

const EmployeeCard = ({details}) => {
  return (
    <>
    <h3>Employe Details</h3>
    <p>Name : {details.name}</p>
    <p>Email : {details.email}</p>
    <p>City : {details.city}</p>
    <p>Experience : {details.experience}</p>
    
    </>
  )
}

export default EmployeeCard