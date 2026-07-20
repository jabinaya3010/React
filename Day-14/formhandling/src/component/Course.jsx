


 import React, { useState } from "react";

const Course = () => {
  const [technology, setTechnology] = useState("");
  const [techList, setTechList] = useState([]);

  const handleChange = (e) => {
    setTechnology(e.target.value);
  };

  const handleAdd = () => {
    if (technology.trim() === "") return;

    setTechList([...techList, technology]);
    setTechnology("");
  };

  return (
    <>

      <input
        type="text"
        placeholder="Enter Technology"
        value={technology}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {techList.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </>
  );
};



export default Course