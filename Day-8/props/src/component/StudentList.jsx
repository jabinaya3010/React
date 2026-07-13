import React from 'react'

const StudentList = ({data}) => {
    
  return (
   <>
   <div>
      {data.map((student) => (
        <div key={student.id}>
          <h3>ID: {student.id}</h3>
          <p>Name: {student.name}</p>
          <p>Course: {student.course}</p>
        </div>
      ))}
    </div>
   </>
  )
}

export default StudentList