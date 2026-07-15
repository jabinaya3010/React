import React from 'react'
import EmployeDetails from '../pages/EmployeDetails'

const EmployePage = () => {

  const emp = {name:"Hemanaath", email:"hemanaath@gmail.com",department:"IT"}
  return (
    <>
    <EmployeDetails details={emp} />
    
    
    
    </>
  )
}

export default EmployePage