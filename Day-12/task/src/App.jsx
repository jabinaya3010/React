import React, { useState } from "react";

const App = () => {
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "React",
  });

  const [price, setPrice] = useState({
    name: "Mobile",
    price: 20000,
  });

  const [num, setNum] = useState([10, 20, 30, 40]);

  const [hero, setHero] = useState(["Vijay", "Ajith", "Suriya"]);

  const [fruit, setFruit] = useState(["Apple", "Orange"]);

  const [emp, setEmp] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, course: "React" },
    { id: 2, course: "Node" },
  ]);

  const [electric, setElectric] = useState([
    { id: 1, name: "Laptop" },
  ]);

  const [remove, setRemove] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Karthik" },
  ]);

  const [remove1, setRemove1] = useState([
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Karthik" },
  ]);

  const handlestudent = () => {
    setStudent({ ...student, course: "MERN" });
  };

  const handleprice = () => {
    setPrice({ ...price, price: 25000 });
  };

  const handleHero = () => {
    const data = [...hero];
    data[2] = "SK";
    setHero(data);
  };

  const handlenum = () => {
    const data = [...num];
    data[2] = 100;
    setNum(data);
  };

  const handlefruit = () => {
    const fruits = [...fruit];
    fruits.push("Mango");
    setFruit(fruits);
  };

  const handleemp = () => {
    const data = emp.map((e) =>
      e.id === 1 ? { ...e, name: "Karthic" } : e
    );
    setEmp(data);
  };

  const handleCourse = () => {
    const data = courses.map((e) =>
      e.id === 1 ? { ...e, course: "MERN" } : e
    );
    setCourses(data);
  };

  const handleelectric = () => {
    setElectric([...electric, { id: 2, name: "Mobile" }]);
  };

  const handleremove = () => {
    const data = remove.map((e) => e.id== 2?remove.splice(1,0):e);
    setRemove(data);
  };

  const handleremove1 = () => {
    const data = remove1.filter((_, i) => i !== 1);
    setRemove1(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        React useState Examples
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Student */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-blue-500 mb-3">Student</h2>
          <p>Name : {student.name}</p>
          <p>Course : {student.course}</p>
          <button
            onClick={handlestudent}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Change Course
          </button>
        </div>

        {/* Price */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-green-500 mb-3">Product</h2>
          <p>{price.name}</p>
          <p>₹{price.price}</p>
          <button
            onClick={handleprice}
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Update Price
          </button>
        </div>

        {/* Hero */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-red-500 mb-3">Heroes</h2>
          {hero.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          <button
            onClick={handleHero}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Change Hero
          </button>
        </div>

        {/* Numbers */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-purple-500 mb-3">Numbers</h2>
          {num.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          <button
            onClick={handlenum}
            className="mt-3 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Change Number
          </button>
        </div>

        {/* Fruits */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-orange-500 mb-3">Fruits</h2>
          {fruit.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          <button
            onClick={handlefruit}
            className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Add Fruit
          </button>
        </div>

        {/* Employees */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-cyan-500 mb-3">Employees</h2>
          {emp.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
          <button
            onClick={handleemp}
            className="mt-3 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-700"
          >
            Update Employee
          </button>
        </div>

        {/* Courses */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-pink-500 mb-3">Courses</h2>
          {courses.map((e) => (
            <p key={e.id}>{e.course}</p>
          ))}
          <button
            onClick={handleCourse}
            className="mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Update Course
          </button>
        </div>

        {/* Electronics */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-500 mb-3">
            Electronics
          </h2>
          {electric.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
          <button
            onClick={handleelectric}
            className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            Add Product
          </button>
        </div>

        {/* Remove using Filter */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-indigo-500 mb-3">
            Remove (slice)
          </h2>
          {remove.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
          <button
            onClick={handleremove}
            className="mt-3 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Remove 
          </button>
        </div>

        {/* Remove using Index */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-teal-500 mb-3">
            Remove by filter
          </h2>
          {remove1.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
          <button
            onClick={handleremove1}
            className="mt-3 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Remove 
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;