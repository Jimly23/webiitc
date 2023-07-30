import React from "react";
import { BiGitBranch } from "react-icons/bi";

function TimelineModal({
  className,
  title,
  description,
  importantDates,
  click,
}) {
  //console.log(importantDates);
  return (
    <div className={`${className}`} onClick={click}>
      <div className="flex  flex-col items-center justify-start bg-oren border-b-8 border-slate-800 w-56 rounded-md overflow-hidden shadow-lg">
        <div className="flex p-2 text-white gap-3">
          <div className="p-2 bg-slate-800 rounded-md h-fit">
            <BiGitBranch size={35} />
          </div>
          <div className="flex flex-col">
            <p className=" font-bold text-xs uppercase">{importantDates}</p>
            <p className=" font-bold text-xs uppercase">{title}</p>
            <p className="text-white text-xs ">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimelineModal;
