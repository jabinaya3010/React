import React, { useState } from "react";

const Theme = () => {
  const [theme, setTheme] = useState("Light Mode");

  const toggleTheme = () => {
    if (theme === "Light Mode") {
      setTheme("Dark Mode");
    } else {
      setTheme("Light Mode");
    }
  };

  return (
    <div>
      <h2>{theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;