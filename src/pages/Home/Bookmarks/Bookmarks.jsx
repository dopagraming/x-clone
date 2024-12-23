import SearchInput from "../../../components/SearchInput/SearchInput";
import React from "react";

const Bookmarks = () => {
  return (
    <div className="flex-1 py-3">
      <div className="px-4">
        <h1 className="text-2xl font-semibold">Bookmark</h1>
        <p className="text-sm text-gray-300 ">@dopagaming</p>
      </div>
      <SearchInput />
      <div className="px-4 mt-8 text-center">
        <h2 className="text-2xl font-bold">Save posts for later</h2>
        <p className="text-gray-400 mt-2">
          Bookmark posts to easily find them again in the future.
        </p>
      </div>
    </div>
  );
};
export default Bookmarks;
