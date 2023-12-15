import React, { useState, useRef } from "react";
import { Field, ErrorMessage } from "formik";
import TextErorr from "./TextError";

const TextInput = ({ name, placeholder, type, textareaInput }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="relative my-8">
      <Field name={name}>
        {({ field, form }) => {
          const handleFocus = () => {
            setIsFocused(true);
          };

          const handleBlur = () => {
            form.setFieldTouched(name, true, true); // Set field as touched on blur
            setIsFocused(!!field.value);
          };

          const handleLabelClick = () => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          };

          return (
            <>
              {!textareaInput ? (
                <input
                  {...field}
                  ref={inputRef}
                  type={type == "password" ? "password" : "text"}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`cursor-pointer border-2 ${
                    isFocused ? "border-gray-600" : "border-gray-500"
                  } focus:outline-none py-3 px-4 w-full flex`}
                />
              ) : (
                <textarea
                  
                  {...field}
                  ref={inputRef}
                  type={type == "password" ? "password" : "text"}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  rows={4}
                  className={`cursor-pointer border-2 resize-none ${
                    isFocused ? "border-gray-600" : "border-gray-500"
                  } focus:outline-none py-3 px-4 w-full flex`}
                />
              )}

              <label
                onClick={handleLabelClick}
                className={`absolute cursor-pointer top-3 left-4 ${
                  isFocused || field.value
                    ? "text-gray-600 -translate-y-3/4 "
                    : ""
                } transition-all duration-300 z-50 bg-white px-4 flex`}
              >
                {placeholder}
              </label>
              {isFocused && (
                <div
                  className={`absolute top-0 left-4 h-2  bg-white pointer-events-none`}
                />
              )}
              <ErrorMessage
                name={name}
                component={TextErorr}
                className="text-red-500 mt-1"
              />
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default TextInput;
