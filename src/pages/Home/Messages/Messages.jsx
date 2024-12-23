import { Users } from "../../../data/Users";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Messages = () => {
  return <MessagesCS />;
};

const MessagesCS = () => {
  const [selectedUser, setSelectedUser] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const filteredUsers = Users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:grid grid-cols-12 min-h-screen lg:overflow-hidden">
      <div className="col-span-4 p-4 border-e dark:border-[#2f3336] border-gray-300">
        <h1 className="text-lg font-bold">Messages</h1>
        <input
          type="text"
          placeholder="Search Direct Messages"
          className="w-full mt-4 p-2 rounded-md dark:bg-black border-4 dark:border-[#2f3336] border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-4 overflow-auto h-[200px] lg:min-h-[100%]">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className={`flex items-center p-3 cursor-pointer ${
                  selectedUser === user.id ? "bg-gray-700" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <img
                  src={user.avatar}
                  alt="profile"
                  className="rounded-full mr-4 w-[40px]"
                />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-400">@{user.username}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No users found.</p>
          )}
        </div>
      </div>
      <div className="flex lg:col-span-8 justify-center items-center">
        {selectedUser ? (
          <div className="text-center">
            <img
              src={selectedUser.avatar}
              alt="profile"
              className="rounded-full mb-4 mx-auto w-[80px]"
            />
            <p className="text-xl font-bold">{selectedUser.name}</p>
            <p className="mt-4 text-gray-400">
              You cannot message this user because you are not verified.
            </p>
            <button
              className="text-blue-500"
              onClick={() => navigate(`/profile?name=${selectedUser.name}`)}
            >
              Learn more
            </button>
          </div>
        ) : (
          <p className="text-gray-400">
            Select a conversation to view messages
          </p>
        )}
      </div>
    </div>
  );
};

export default Messages;
