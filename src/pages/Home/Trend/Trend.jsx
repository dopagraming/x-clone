import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TweetCard from "../Feed/TweetCard/TweetCard";
import SearchInput from "../../../components/SearchInput/SearchInput";
import { posts } from "../../../data/posts";
import { useSelector } from "react-redux";
const Trend = () => {
  const [searchParams] = useSearchParams();
  const trendName = searchParams.get("tn");
  const myPosts = useSelector((state) => state.posts.posts);
  return (
    <div className="flex-1 text-white pb-3">
      <div className="text-center sticky top-0 bg-[#000000d9] border-b border-[#2f3336]">
        <SearchInput trendName={trendName} />

        <div className="flex justify-around">
          <button className="p-4 text-sm hover:bg-[#333] transition ">
            Top
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Latest
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            People
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Media
          </button>
          <button className="p-4 text-sm hover:bg-[#333] transition 	">
            Lists
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {myPosts
          .filter((p) => p.hash.includes(trendName))
          .map((p, index) => (
            <TweetCard p={p} key={index} />
          ))}
        {posts
          .filter((p) => p.hash.includes(trendName))
          .map((p, index) => (
            <TweetCard p={p} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Trend;
