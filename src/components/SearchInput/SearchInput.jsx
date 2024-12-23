import { IoSearch } from "react-icons/io5";
import React from "react";
import { t } from "i18next";

const SearchInput = ({ placeholder, value, onChange, trendName }) => {
  return (
    <div className="relative flex items-center mt-2">
      <input
        type="text"
        value={trendName ? trendName : value}
        placeholder={t(placeholder)}
        className="w-full max-w-900 mx-2 my-1 p-[6px] indent-8 rounded-full dark:bg-black border-4 dark:border-[#2f3336] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
      />
      <IoSearch className="absolute left-6 text-gray-500 text-[20px]" />
    </div>
  );
};

export default SearchInput;
