import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { posts } from "../../../data/posts";
import { FaArrowLeft } from "react-icons/fa";
import "./Tweet.css";
import Menu from "../../../components/MenuItem/MenuItem";
import { postSetting } from "../../../data/LiftSideLinks/index";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { CiSaveUp2, CiBookmark } from "react-icons/ci";
import { FiImage, FiPaperclip, FiSmile, FiMapPin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import {
  addComment,
  removeComment,
  addLike,
  removeLike,
} from "../../../rtk/features/postSlice";

const Tweet = () => {
  const user = useSelector((state) => state.user.user);
  const [searchParams] = useSearchParams();
  const tweetId = searchParams.get("id");
  const postsArray = useSelector((state) => state.posts.posts);
  const tweetData =
    posts.find((p) => p.id === tweetId) ||
    postsArray.find((p) => p.id === tweetId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [reply, setReply] = useState("");
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(tweetData?.likes);
  const [liked, setLiked] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const { t } = useTranslation();

  if (!tweetData) {
    return <div className="text-white">Tweet not found</div>;
  }

  let replayInfo = {
    id: `${Date.now()}`,
    userName: user.displayName,
    user: user.email,
    userImg: user.photoURL,
    time: "0s",
    text: reply,
  };
  const handleSubmit = () => {
    if (reply.trim() !== "") {
      dispatch(addComment({ postId: tweetData.id, comment: replayInfo }));
      setReply("");
    }
  };
  const handlLike = () => {
    if (!liked) {
      setLike(like + 1);
      dispatch(addLike(tweetData.id));
    } else {
      setLike(like - 1);
      dispatch(removeLike(tweetData.id));
    }
    setLiked(!liked);
  };
  return (
    <div className="flex-1rounded-lg">
      <div className="p-3">
        <div className="flex items-center mb-3">
          <FaArrowLeft
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
          <p className="ms-3">{t("post")}</p>
        </div>
      </div>
      <div className="space-x-3 px-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full me-2 border dark:border-[#2f3336] border-gray-300"
              src={tweetData.userImg || ""}
              alt={tweetData.userName}
            />
            <div>
              <p className="font-bold">{tweetData.userName}</p>
              <p className="text-gray-500">
                @{tweetData.user} · {tweetData.postTime}
              </p>
            </div>
          </div>
          <div className="flex items-center relative flex-wrap">
            <button
              className="text-sm bg-white border dark:border-[#2f3336] border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 me-3 "
              onClick={() => setSubscribe(!subscribe)}
            >
              {t(subscribe ? "subscribe" : "unSubscribe")}
            </button>
            <Menu listOfItems={postSetting} />
          </div>
        </div>
        <p className="mt-2">{tweetData.postContent}</p>
      </div>
      {tweetData.postImg && (
        <div className="mt-4 px-3">
          <img
            className="rounded-lg w-full"
            src={tweetData.postImg}
            alt="Tweet Media"
          />
        </div>
      )}
      {tweetData.postUrl && (
        <div className="mt-4 px-3">
          <ReactPlayer width="100%" url={tweetData.postUrl} />
        </div>
      )}
      <div className="px-3">
        <div className="text-gray-500 py-2 border-b dark:border-[#2f3336] border-gray-300">
          <span className="me-2">{tweetData.fullPostTime}</span>
          <span>
            <span className="text-white">{tweetData.views}</span> Views
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-500 py-2 border-b dark:border-[#2f3336] border-gray-300">
          <div
            className={`flex items-center hover:text-[#1d9bf0] transition ${
              comments.length && "text-[#1d9bf0]"
            }`}
          >
            <FaRegComment className="me-1 text-xl" />
            <span>{tweetData.replies.length + comments.length}</span>
          </div>
          <div className="flex items-center hover:text-[#4CAF50] transition">
            <BiRepost className="me-1 text-xl" />
            <span>{tweetData.retweets}</span>
          </div>
          <div
            className={`flex items-center hover:text-[#E91E63] transition ${
              liked && `text-[#E91E63]`
            }`}
            onClick={handlLike}
          >
            <CiHeart className="me-1 text-xl" />
            <span>{like}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiBookmark className="me-1 text-xl" />
            <span>{tweetData.views}</span>
          </div>
          <div className="flex items-center hover:text-[#1d9bf0] transition">
            <CiSaveUp2 className="me-1 text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4 rounded-lg border-b dark:border-[#2f3336] border-gray-300">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={user.photoURL} alt="" className="rounded-full" />
          </div>
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Post your reply"
            className="flex-grow bg-transparent border-none placeholder-gray-400 focus:outline-none"
          />
          <div className="flex gap-2 text-blue-400">
            <FiImage size={20} />
            <FiPaperclip size={20} />
            <FiSmile size={20} />
            <FiMapPin size={20} />
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            disabled={reply.trim() === ""}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition ${
              reply.trim() === ""
                ? "bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <AiOutlineSend size={20} className="text-white" />
            <span className="text-white">Reply</span>
          </button>
        </div>
      </div>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
      {tweetData.replies && tweetData.replies.length > 0 && (
        <div className="space-y-2">
          {tweetData.replies.map((reply, index) => (
            <Comment comment={reply} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tweet;
