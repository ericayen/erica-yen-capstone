import React from "react";

function InputField({
  type,
  name,
  label,
  value,
  error,
  onChange,
  placeholder,
}) {
  return (
    <label className="w-full form-control">
      <div className="label">
        <span className="font-medium label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full py-2 border input border-beige-light focus:outline-green focus:border-green h-fit ${
          error && "border-red focus:outline-red focus:border-red"
        }`}
      />
      {error && <p className="py-2 text-sm text-left text-red">{error}</p>}
    </label>
  );
}

export default InputField;
