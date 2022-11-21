import React, { useEffect } from "react";

const InputText = ({ label, value, setValue, isValid, setIsValid , type="text"}) => {
  useEffect(() => {
    if (value) {
      setIsValid(true);
    }
  }, [value]);
  return (
    <>
      <div className="relative">
        <label className="text-white capitalize absolute -top-6 left-0">
          {label}
        </label>
        <input
        type={type}
          className={`px-6 py-2 w-full text-[#4f4f4f] bg-black border rounded ${
            isValid ? " border-[#4f4f4f]" : "border-red-500"
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputText;
