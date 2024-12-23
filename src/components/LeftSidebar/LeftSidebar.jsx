import { MdOutlineMoreHoriz } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { LiftSideLinks } from "../../data/LiftSideLinks/index";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Menu from "../MenuItem/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";

import { toggleMode } from "../../rtk/features/mode";
import { changeLang } from "../../rtk/features/dir";
import { useTranslation } from "react-i18next";
import { auth } from "../../firebase";
const LeftSidebar = () => {
  let user = useSelector((state) => state.user.user);
  let mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const filteredMenu = LiftSideLinks.filter((item) => item.show === false);
    setMenu(filteredMenu);
  }, []);
  const { t, i18n } = useTranslation();
  const changeToEn = () => {
    i18n.changeLanguage("en");
  };
  const changeToAr = () => {
    i18n.changeLanguage("ar");
  };
  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("user");
    navigate("/signup");
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(toggleMode());
  };
  return (
    <div
      className={`sticky top-0 flex flex-col p-4 text-center xl:text-start relative text-black dark:text-white`}
    >
      <div className="xl:ps-3 cursor-pointer m-auto xl:m-0">
        <a href="/">
          <FaXTwitter className="text-3xl" />
        </a>
      </div>
      <div className="space-y-1 flex flex-col items-center xl:items-start">
        <div className="space-y-1 flex flex-col items-center lg:items-start">
          {LiftSideLinks.map(({ name, iconName: Icon }, index) => {
            if (name === "setting/account") {
              return (
                <Link
                  key={index}
                  to={name}
                  className="flex items-center space-x-3 p-2 justify-center xl:justify-normal"
                >
                  <Icon className="text-2xl" />
                  <span className="hidden xl:block text-xl font-semibold">
                    {t("Settings")}
                  </span>
                </Link>
              );
            }
            if (index >= 6) {
              return;
            } else {
              return (
                <Link
                  key={index}
                  to={name}
                  className="w-fit flex items-center space-x-3 p-2 justify-center xl:justify-normal dark:hover:bg-[#1a1a1a] hover:bg-gray-200  transition rounded-full"
                >
                  <Icon className="text-2xl" />
                  <p className="hidden xl:block text-xl font-semibold">
                    {t(name)}
                  </p>
                </Link>
              );
            }
          })}
        </div>
        <Menu listOfItems={menu} />
        <button className="hidden xl:block w-full bg-[#1d9bf0] py-3 px-5 rounded-full text-white">
          {t("Post")}
        </button>
      </div>
      <div className="flex items-center justify-between mx-auto xl:mx-0 mt-6 dark:bg-gray-900 bg-gray-200 dark:hover:bg-gray-700 hover:bg-gray-300 transition rounded-full pe-1 cursor-pointer relative">
        <Link to="/profile" className="flex items-center">
          <img
            src={
              user && `${user?.photoURL}`
                ? `${user.photoURL}`
                : "images/avatar-00.png"
            }
            alt="userImg"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full m-auto xl:me-2"
          />
          <div>
            <p className="hidden xl:block">{user?.name || "Palestinan"}</p>{" "}
            <p className="hidden xl:block text-[#71767b] text-xs">
              @{user?.username || "palestinan"}{" "}
            </p>
          </div>
        </Link>
        <div className="relative">
          <MdOutlineMoreHoriz
            className="hidden xl:block pointer ml-2"
            onClick={toggleDropdown}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between mt-3">
        <div className="flex justify-center">
          <button
            className="me-3"
            onClick={() => {
              dispatch(changeLang("ltr"));
              changeToEn();
            }}
          >
            EN
          </button>
          <button
            onClick={() => {
              dispatch(changeLang("rtl"));
              changeToAr();
            }}
          >
            AR
          </button>
        </div>
        <div className="flex justify-center">
          <button className="me-3" onClick={handleSignOut}>
            {<FaSignOutAlt />}
          </button>
          <button
            onClick={() => {
              toggleTheme();
              toggleDropdown();
            }}
          >
            {mode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
