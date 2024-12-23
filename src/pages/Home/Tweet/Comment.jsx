import React from "react";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiSaveUp2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";
const Comment = ({ comment }) => {
  return (
    <div className="p-2 flex items-start space-x-3  border-b dark:border-[#2f3336] border-gray-300">
      <img
        className="w-10 h-10 rounded-full"
        src={comment.userImg || "/images/images.jpeg"}
        alt={comment.userName}
      />
      <div className="flex-1">
        <div className="flex items-center space-x-1">
          <span className="font-bold">{comment.userName || "Palestina"}</span>
          <span className="text-gray-500">
            @{comment.user || "Palestina"} · {comment.time || "every Day"}
          </span>
        </div>
        <p className="text-gray-400 mt-1">{comment.text || "Free Palestina"}</p>
        <div className="flex justify-between items-center text-gray-500 py-2">
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <FaRegComment className="me-1 text-xl" />
            <span>{comment.replies}</span>
          </div>
          <div className="flex items-center hover:text-[#4CAF50] transition">
            <BiRepost className="me-1 text-xl" />
            <span>{comment.retweets}</span>
          </div>
          <div className="flex items-center hover:text-[#E91E63] transition">
            <CiHeart className="me-1 text-xl" />
            <span>{comment.likes}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiBookmark className="me-1 text-xl" />
            <span>{comment.views}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiSaveUp2 className="me-1 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
