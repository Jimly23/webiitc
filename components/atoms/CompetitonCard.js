import Image from "next/image";
import React from "react";
import Text from "./Text";
import { HiOutlineUsers } from "react-icons/hi";
import Button from "./Button";
import { FiTrash } from "react-icons/fi";

const CompetitonCard = ({
  imgSrc,
  title,
  category,
  maxMembers,
  slug,
  setIsCompetitionDetail,
  setCompetitionName,
  isAdmin,
  onDelete,
  handleCLickButton,
}) => {
  const handleViewDetailCompetition = () => {
    window.scrollTo(0, 0);
    if (setIsCompetitionDetail != null && setCompetitionName != null) {
      setCompetitionName(slug);
      setIsCompetitionDetail(true);
    }
  };
  console.log(category, title);
  return (
    <li className="rounded-xl relative w-full overflow-hidden shadow transition-all duration-300 hover:shadow-lg">
      {isAdmin && (
        <FiTrash
          onClick={onDelete}
          className="text-red cursor-pointer bg-red/20 text-3xl p-1 rounded absolute top-2 right-2"
        />
      )}
      <img
        className="w-full"
        src={imgSrc}
        alt="Kucing"
        width={1080}
        height={1080}
      />
      <div className="px-4 py-2 flex flex-col space-y-2">
        <Text size={"smalltitle"} color={"dark"} weight={"semi"}>
          {title}
        </Text>
        {category.map((item, index) =>
          index == 0
            ? item.name
            : index == category.length - 1
            ? ` & ${item.name}`
            : `, ${item.name}`
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <HiOutlineUsers className="text-dark" />
            <Text size={"small"}>{maxMembers} MAX</Text>
          </div>
          <Button
            onClick={isAdmin ? handleCLickButton : handleViewDetailCompetition}
            size={"sm"}
          >
            {isAdmin ? "Edit" : "Detail"}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CompetitonCard;
