import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { Users } from "../../../data/Users";

const Profile = () => {
  return (
    <div className="flex-1 min-h-screen">
      <ProfileSection />
      <TabsSection />
      <FollowSuggestions />
    </div>
  );
};

const ProfileSection = () => {
  const [searchParams] = useSearchParams();
  const userName = searchParams.get("name");
  const userData = Users.find((u) => u.name === userName);

  const user = useSelector((state) => state.user.user);
  console.log(userName);
  return (
    <div className="">
      <div className="bg-[#333639] h-32"></div>
      <div className="relative -mt-16 ps-4 items-center space-x-4">
        {userName ? (
          <img
            src={
              userData.avatar || (
                <FaUserCircle className="text-8xl text-blue-500" />
              )
            }
            className="rounded-full w-[100px] h-[100px]"
            alt="User Avatar"
          />
        ) : (
          (
            <img
              src={user.photoURL}
              className="rounded-full w-[100px] h-[100px]"
              alt="User Avatar"
            />
          ) || <FaUserCircle className="text-8xl text-blue-500" />
        )}
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold mt-2">
              {userName ? userData.name : user.displayName || "Unknown"}
            </h1>
            <AiFillCheckCircle className="text-blue-500" />
            <button className="ml-4 px-2 py-1 text-sm rounded-lg border dark:border-[#2f3336] border-gray-300 dark:bg-[#000000d9] bg-gray-200 dark:hover:bg-[#333] hover:bg-gray-300">
              Edit Profile
            </button>
          </div>
          <p className="text-gray-400 mb-3">
            @{userName ? userData.username : user?.email || "Unknown"}
          </p>
          <p className="text-gray-500 text-sm">Joined November 2023</p>
        </div>
        <div className="flex">
          <div className="flex me-3">
            <span>0</span>
            <p className="ms-1 text-gray-400">Following</p>
          </div>
          <div className="flex">
            <span>0</span>
            <p className="ms-1 text-gray-400">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TabsSection = () => {
  return (
    <div className="border-b border-gray-800">
      <ul className="flex space-x-6 px-6 py-3 text-gray-400">
        <li className="hover:text-white cursor-pointer transition">Posts</li>
        <li className="hover:text-white cursor-pointer transition">Replies</li>
        <li className="hover:text-white cursor-pointer transition">
          Highlights
        </li>
        <li className="hover:text-white cursor-pointer transition">Articles</li>
        <li className="hover:text-white cursor-pointer transition">Media</li>
        <li className="hover:text-white cursor-pointer transition">Likes</li>
      </ul>
    </div>
  );
};

const FollowSuggestions = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Who to follow</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaUserCircle className="text-4xl text-gray-500" />
            <div>
              <h3 className="font-semibold">Engadget Gaming</h3>
              <p className="text-sm text-gray-400">@engadgetgaming</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm rounded-lg border dark:border-[#2f3336] border-gray-300 dark:bg-[#000000d9] bg-gray-200 dark:hover:bg-[#333] hover:bg-gray-300">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
