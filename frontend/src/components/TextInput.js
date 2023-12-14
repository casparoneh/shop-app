import React, { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative mt-10">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`border-2 ${
          isFocused ? "border-gray-600" : "border-gray-500"
        } focus:outline-none py-2 px-4 w-full flex`}
      />
      <label
        className={`absolute top-2 left-4 ${
          isFocused || inputValue ? "text-gray-600 -translate-y-3/4 " : ""
        } transition-all duration-300 z-50 bg-white px-4 flex`}
      >
        Placeholder
      </label>
      {isFocused && (
        <div
          className={`absolute top-0 left-4 h-2  bg-white pointer-events-none`}
        />
      )}
    </div>
  );
};

export default TextInput;
