import React from "react";

const CardSelect = ({
  id,
  name,
  description,
  onEdit,
  onDelete,
  onActivate,
  isActive,
  onRadioChange,
}) => (
  <div
    className={`p-4 border rounded ${isActive ? "bg-green-200" : "bg-white"}`}
  >
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{description}</p>
      </div>
      <div className="flex items-center">
        <input type="radio" checked={isActive} onChange={onRadioChange} />
        <button onClick={onEdit} className="ml-2 text-blue-500">
          Edit
        </button>
        <button onClick={onDelete} className="ml-2 text-red-500">
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default CardSelect;
