import React, { useState } from "react";

const ToggleButton = () => {
  const [active, setActive] = useState("Normal");

  return (
    <div className="flex my-5 justify-center items-center bg-[#146f68] p-2 rounded-xl">
      <button
        className={`px-4 py-2 text-white font-medium rounded-md w-1/2 ${
          active === "Normal" ? "bg-[#146f67c9]" : "bg-transparent"
        }`}
        onClick={() => setActive("Normal")}
      >
        Normal
      </button>
      <button
        className={`px-4 py-2 text-white font-medium rounded-md w-1/2 ${
          active === "Pro" ? "bg-[#146f67c9]" : "bg-transparent"
        }`}
        onClick={() => setActive("Pro")}
      >
        Pro
      </button>
    </div>
  );
};

export default ToggleButton;
