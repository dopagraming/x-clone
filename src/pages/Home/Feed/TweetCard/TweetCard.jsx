import React, { useState } from "react";
import { FaRetweet, FaHeart, FaEye } from "react-icons/fa";
import { CiSaveUp2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Menu from "../../../../components/MenuItem/MenuItem";
import { postSetting } from "../../../../data/LiftSideLinks/index";
import ReactPlayer from "react-player";
const TweetCard = ({ p }) => {
  const {
    id,
    fullPostTime,
    likes,
    postContent,
    postImg,
    postTime,
    replies,
    retweets,
    user,
    views,
    userImg,
  } = p;
  const naviget = useNavigate();
  return (
    <div
      className="border-b dark:border-[#2f3336] border-gray-300 cursor-pointer"
      onClick={() => naviget(`/tweet?id=${id}`)}
    >
      <div className="rounded-lg shadow-lg py-2 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              src={userImg}
              alt="Profile"
              className="rounded-full w-12 h-12 mr-4"
            />
            <div>
              <h3 className="font-semibold text-lg">{user}</h3>
              <p className="text-sm text-gray-400">
                @{p.user} · {p.fullPostTime}
              </p>
            </div>
          </div>
          <Menu listOfItems={postSetting} />
        </div>
        <p className="mb-4">{p.postContent}</p>
        {postImg && (
          <div className="mt-4 px-3">
            <img
              className="rounded-lg w-full max-h-[300px] object-contain"
              src={postImg}
              alt="Tweet Media"
            />
          </div>
        )}
        {p.postUrl && (
          <div className="mt-4 px-3">
            <ReactPlayer width="100%" url={p.postUrl} />
          </div>
        )}
        <div className="flex items-center justify-between mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1d9bf0] transition">
            <FaRegComment size={20} />
            <span>{p.replies.length || "0"}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-[#4CAF50] transition">
            <FaRetweet />
            <span>{p.retweets}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-[#E91E63] transition">
            <FaHeart />
            <span>{p.likes}</span>
          </div>
          <div className="flex items-center space-x-2  hover:text-[#1d9bf0] transition">
            <CiBookmark />
            <span>{p.views}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiSaveUp2 className="me-1 text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
