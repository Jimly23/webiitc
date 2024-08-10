import React from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
const CardSelect = ({
  id,
  name,
  description,
  onEdit,
  onDelete,
  isActive,
  onRadioChange,
}) => (
  <div
    className={`p-4 border rounded ${isActive ? "bg-slate-200" : "bg-white"}`}
  >
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p>{description}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex w-full items-center justify-center font-bold text-white">
          <label
            htmlFor={`checkbox-${id}`}
            className="relative flex items-center"
          >
            <input
              id={`checkbox-${id}`}
              checked={isActive}
              disabled={isActive}
              onChange={onRadioChange}
              className="peer sr-only"
              type="radio"
            />
            <div className="h-5 w-10 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all duration-500 ease-in-out peer-checked:bg-green-500"></div>
            <div className="absolute left-[4px] top-[3px] h-3.5 w-3.5 rounded-full border border-black bg-slate-400 transition-all duration-300 ease-in-out peer-checked:left-[1.4rem] peer-checked:bg-yellow-400"></div>
          </label>
        </div>

        {/* <input
          type="radio"
          checked={isActive}
          disabled={isActive}
          onChange={onRadioChange}
        /> */}
        <button
          onClick={onEdit}
          className="ml-2  bg-green-100 p-2 rounded-lg hover:bg-green-200 text-green-500"
        >
          <MdOutlineEditNote />
        </button>
        <button
          onClick={onDelete}
          className="ml-2  bg-rose-100 p-2 rounded-lg hover:bg-rose-200 text-rose-500"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  </div>
);

export default CardSelect;
