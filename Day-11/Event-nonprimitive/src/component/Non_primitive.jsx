import React, { useState } from 'react'

const Non_primitive = () => {
  const [data,setData]=useState(["Vijay","Ajith","Suriya"])
  const [fruit,setFruit]=useState(["Apple","Orange","Mango"])
  const [obj,setObj]=useState({name:"Sudhan",course:"JS"})
  const [company,setCompany]=useState({company:"Google",city:"Chennai"})
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sudhan",
    },
    {
      id: 2,
      name: "Rahul",
    },
  ]);
  const [electric,setElectric]=useState([
   {
      id:1,
      name:"Mobile"
   },

   {
      id:2,
      name:"Laptop"
   }
])
  function clickdata(){
    const update=[...data]
    update[1]="Sk"
    setData(update)
  }
  function clickfruit(){
    const update=[...fruit]
    update[1]="Banana"
    setFruit(update)
  }
  function clickobj(){
    setObj({...obj,course:"java"})
  }
  function clickcompany(){
    setCompany({...company,company:"Zoho"})
  }

    function clickstudent ()  {
    const updatedStudents = students.map((student) =>
      student.id === 2
        ? { ...student, name: "Abinaya" }
        : student
    );

    setStudents(updatedStudents);
  };
  function clickelectric()
{
const updatedelectric = electric.map((electric) =>
      electric.id === 2
        ? { ...electric, name: "Tablet" }
        : electric
    );

    setElectric(updatedelectric);
}  
  return (
    <>
    return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8">
      Non-Primitive Data Types
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Heroes Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-blue-600 mb-3">Heroes</h2>

        {data.map((hero, index) => (
          <p key={index}>{hero}</p>
        ))}

        <button
          onClick={clickdata}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Change Hero
        </button>
      </div>

      {/* Fruits Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-green-600 mb-3">Fruits</h2>

        {fruit.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <button
          onClick={clickfruit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Change Fruit
        </button>
      </div>

      {/* Object Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-purple-600 mb-3">Object</h2>

        <p>Name : {obj.name}</p>
        <p>Course : {obj.course}</p>

        <button
          onClick={clickobj}
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Update Object
        </button>
      </div>

      {/* Company Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-orange-600 mb-3">Company</h2>

        <p>Company : {company.company}</p>
        <p>City : {company.city}</p>

        <button
          onClick={clickcompany}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Update Company
        </button>
      </div>

      {/* Students Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-red-600 mb-3">Students</h2>

        {students.map((student) => (
          <div key={student.id} className="mb-2 border-b pb-2">
            <p>ID : {student.id}</p>
            <p>Name : {student.name}</p>
          </div>
        ))}

        <button
          onClick={clickstudent}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Update Student
        </button>
      </div>

      {/* Electronics Card */}
      <div className="bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-bold text-indigo-600 mb-3">
          Electronics
        </h2>

        {electric.map((item) => (
          <div key={item.id} className="mb-2 border-b pb-2">
            <p>ID : {item.id}</p>
            <p>Name : {item.name}</p>
          </div>
        ))}

        <button
          onClick={clickelectric}
          className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Update Electronic
        </button>
      </div>

    </div>
  </div>
);
    </>
  )
}

export default Non_primitive