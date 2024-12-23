import Post from "./Porst/Post";
import GetPosts from "./GetPosts/GetPosts";
import Nav from "./Nav/Nav";
const Feed = () => {
  return (
    <div className="flex-1 pb-3">
      <Nav />
      <Post />
      <GetPosts />
    </div>
  );
};
export default Feed;
