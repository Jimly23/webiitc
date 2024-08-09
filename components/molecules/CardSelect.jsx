import React from "react";

const CardSelect = ({ id, name, description, onSelect, isSelected }) => {
  return (
    <label
      htmlFor={id}
      className="max-w-xs flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
    >
      <input
        type="radio"
        className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        id={id}
        name="event"
        onChange={() => onSelect(id, name)}
        checked={isSelected} // Radio button akan dipilih jika isSelected true
        readOnly
      />
      <div>
        <span className="text-sm text-gray-500 ms-3">{name}</span>
        <div className="text-sm text-gray-500 ms-3">{description}</div>
      </div>
    </label>
  );
};

export default CardSelect;
