import { Outlet, useLocation } from "react-router-dom";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import { useSelector } from "react-redux";

const Home = () => {
  const mode = useSelector((state) => state.mode.mode);
  const dir = useSelector((state) => state.dir.dir);
  const location = useLocation();
  return (
    <div
      dir={dir === "ltr" ? "ltr" : "rtl"}
      className={`${mode ? "" : "dark"}`}
    >
      <div
        className={`grid grid-cols-12 min-h-screen xl:px-6 max-w-[1440px] m-auto dark:bg-black bg-gray-100 text-black dark:text-white  `}
      >
        <div className={`col-span-2 xl:col-span-2`}>
          <LeftSidebar />
        </div>
        <div
          className={`col-span-10 ${
            location.pathname.split("/")[1] === "setting" ||
            location.pathname.replace("/", "") == "Messages" ||
            location.pathname.replace("/", "") == "Premium"
              ? "xl:col-span-10"
              : "lg:col-span-6"
          } border-x dark:border-[#2f3336] border-gray-300`}
        >
          <Outlet />
        </div>
        {location.pathname.split("/").includes("setting") ||
        location.pathname.replace("/", "") == "Messages" ||
        location.pathname.replace("/", "") == "Premium" ? (
          ""
        ) : (
          <div className="hidden lg:block lg:col-span-4">
            <RightSidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
