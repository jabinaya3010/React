

import { useState } from "react";

const Primitive = () => {
  const [number, setNumber] = useState(true);

  function clickof() {
    setNumber(!number);
  }

  return (
    <>
      {number ? (
        <div className="bg-black h-40 text-white flex items-center justify-center">
          Dark Theme
        </div>
      ) : (
        <div className="bg-white h-40 text-black border flex items-center justify-center">
          Light Theme
        </div>
      )}

      <button
        onClick={clickof}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {number ? "Light Theme" : "Dark Theme"}
      </button>
    </>
  );
};

export default Primitive;


