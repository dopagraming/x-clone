import React, { useEffect } from "react";
import TweetCard from "../TweetCard/TweetCard";
import { posts } from "../../../../data/posts";
import { useSelector } from "react-redux";

const GetPosts = () => {
  let postsArray = useSelector((state) => state.posts.posts);
  return (
    <div className="space-y-4">
      {postsArray.map((p, index) => (
        <TweetCard p={p} key={index} />
      ))}
      {posts.map((p, index) => (
        <TweetCard p={p} key={index} />
      ))}
    </div>
  );
};
export default GetPosts;
