import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState("");
  const [data, setData] = useState([]);

  const handleclick = (e) => {
    setStudent(e.target.value);
  };

  const handlechange = (e) => {
    e.preventDefault();

    const detail = [...data];
    detail.push(student);
    setData(detail);

    setStudent(""); // Clear input after submit
  };

  return (
    <>
      <form onSubmit={handlechange}>
        <input
          type="text"
          placeholder="Enter name"
          value={student}
          onChange={handleclick}
        />
        <input type="submit" value="Register" />
      </form>

      {data.map((e, i) => (
        <div key={i}>
          <p>{e}</p>
        </div>
      ))}
    </>
  );
};

export default Student;