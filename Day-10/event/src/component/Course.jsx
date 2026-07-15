import React, { useState } from "react";

const Course = () => {
  const [course, setCourse] = useState("JavaScript");

  const updateCourse = () => {
    setCourse("React JS");
  };

  return (
    <div>
      <h2>{course}</h2>
      <button onClick={updateCourse}>Update Course</button>
    </div>
  );
};

export default Course;