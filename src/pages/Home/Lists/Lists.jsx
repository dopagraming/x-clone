import SearchInput from "../../../components/SearchInput/SearchInput";
import DiscoverNewLists from "./components/ListItem";
import YourLists from "./components/YourLists";

const Lists = () => {
  return (
    <div className="flex-1 ">
      <SearchInput />
      <DiscoverNewLists />
      <YourLists />
    </div>
  );
};

export default Lists;
