import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineChecklist } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../../rtk/features/postSlice";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/youtube";

const Post = () => {
  const user = useSelector((state) => state.user.user); // Access user from Redux state
  const dispatch = useDispatch(); // Redux dispatch
  const { t } = useTranslation(); // Translation hook

  const [opacity, setOpacity] = useState(false); // Control button opacity
  const [imageSrc, setImageSrc] = useState(""); // Image state
  const [url, setUrl] = useState(""); // URL state
  const [assetArea, setAssetArea] = useState(""); // To determine which asset area is active
  const [currentTime, setCurrentTime] = useState(""); // Current post time
  const [textarea, setTextarea] = useState(""); // Text area content
  const [tweet, setTweet] = useState({
    // Initial tweet state
    id: `${Math.random().toString(36).substr(2, 9)}`, // Unique ID
    userName: user?.displayName || "Unknown",
    user: user?.displayName || "Unknown",
    userImg: user?.photoURL || "images/avatar-00.png",
    postTime: "0s",
    postContent: textarea,
    postImg: imageSrc,
    postUrl: url,
    views: "0",
    retweets: 0,
    likes: 0,
    fullPostTime: "",
    hash: "",
    replies: [],
  });

  // Handle the validation of post content
  const postValidation = (e) => {
    const input = e.target.value.trim();
    const hashtags = (input.match(/#\w+/g) || []).map((tag) => tag.slice(1)); // Extract hashtags
    if (input !== "") {
      handleDate(); // Set the current time
      setTweet((prevTweet) => ({
        ...prevTweet,
        postContent: input,
        hash: hashtags,
        postUrl: url,
        fullPostTime: currentTime,
      }));
      setOpacity(true); // Enable the post button if there's content
    } else {
      setOpacity(false); // Disable the post button if content is empty
    }
  };

  // Handle image input change
  const handleChange = (e) => {
    const image = e.target.files[0]; // Get the uploaded file
    if (!image) {
      alert(`Not an image, the file is a ${typeof image}`); // Alert if not an image
    } else {
      setImageSrc(URL.createObjectURL(image)); // Create a URL for the uploaded image
      setTweet((prevTweet) => ({
        ...prevTweet,
        postImg: URL.createObjectURL(image), // Set the image URL in the tweet state
      }));
    }
  };

  // Set the current time
  const handleDate = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      month: "short",
      year: "numeric",
    };
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", options);
    setCurrentTime(formattedTime);
  };

  // Reset all input fields
  const reset = () => {
    setTextarea("");
    setImageSrc("");
    setUrl("");
    setAssetArea("");
    setOpacity(false);
    setTweet((prevTweet) => ({
      ...prevTweet,
      postImg: "",
    }));
  };

  // Handle the post action
  const handlePost = () => {
    if (opacity) {
      dispatch(addPost(tweet)); // Dispatch the post action
      reset(); // Reset form after posting
    }
  };

  return (
    <div className="mb-4 border-b dark:border-[#2f3336] border-gray-300 p-4">
      <div className="flex items-start">
        <img
          src={user?.photoURL || "images/avatar-00.png"}
          alt="userImg"
          className="w-[50px] h-[50px] rounded-full me-2"
        />
        <textarea
          className="bg-inherit outline-none focus:border-none w-full resize-none"
          type="text"
          autoFocus
          placeholder={t("What Do You Want To Talk About ?")}
          rows="4"
          value={textarea}
          onChange={(e) => {
            const value = e.target.value;
            setTextarea(value);
            postValidation(e);
          }}
        />
      </div>
      {assetArea === "image" && (
        <>
          <input
            type="file"
            accept="image/*"
            placeholder=""
            onChange={handleChange}
          />
          {imageSrc && (
            <img width={250} className="m-auto" src={imageSrc} alt="preview" />
          )}
        </>
      )}
      {assetArea === "url" && (
        <>
          <input
            type="url"
            required
            placeholder="https://example.com"
            className="outline-none w-full bg-inherit"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className="max-h-[150px]">
            {url && <ReactPlayer width="100%" height="10%" url={url} />}
          </div>
        </>
      )}
      <div className="flex justify-between mt-2 items-center">
        <div className="space-x-2 ms-[52px]">
          <button
            className="text-[#13659d] text-xl hover:bg-[#175ccd54] rounded-full p-1 transition"
            onClick={() => setAssetArea("image")}
          >
            <CiImageOn />
          </button>
          <button
            className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition"
            onClick={() => setAssetArea("url")}
          >
            <MdOutlineGifBox />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <MdOutlineChecklist />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiFaceSmile />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <CiCalendarDate />
          </button>
          <button className="text-[#13659d] font-bold text-xl hover:bg-[#175ccd54] rounded-full p-1 transition">
            <IoLocationOutline />
          </button>
        </div>
        <button
          className={`bg-[#1d9bf0] text-white px-4 py-2 rounded-full ${
            opacity ? "opacity-100" : "opacity-50"
          }`}
          disabled={!opacity}
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;
