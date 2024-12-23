import React, { useState } from "react";
import { Trends } from "../../data/Trend";
import { Users } from "../../data/Users";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";

const RightSidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [displayedTrends, setDisplayedTrends] = useState(5);
  const [displayedUsers, setDisplayedUsers] = useState(5);
  const [follow, setFollow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTrends, setFilteredTrends] = useState([]);
  const showMoreOrLessTrends = () => {
    if (displayedTrends <= 5) {
      setDisplayedTrends(displayedTrends + 5);
    } else {
      setDisplayedTrends(5);
    }
  };
  const showMoreOrLessUsers = () => {
    if (displayedUsers <= 5) {
      setDisplayedUsers(displayedUsers + 5);
    } else {
      setDisplayedUsers(5);
    }
  };
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = Trends.filter((trend) =>
      trend.trendName.toLowerCase().includes(value)
    );
    setFilteredTrends(filtered);
  };
  return (
    <div className="hidden lg:block p-4 pt-0 rounded-lg shadow-lg relative">
      <SearchInput
        placeholder="Search trends..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && filteredTrends.length > 0 && (
        <ul
          className="absolute dark:bg-black bg-gray-200 border dark:border-gray-700 border-gray-300 rounded-lg shadow-lg py-4 z-10 right-20"
          style={{ width: "80%", left: "10%" }}
        >
          {filteredTrends.map((trend, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-400 px-4 py-3 dark:hover:bg-[#333] hover:bg-gray-300 transition cursor-pointer"
              onClick={() => navigate(`/trend?tn=${trend.trendName}`)}
            >
              <div>
                <p>{trend.trendName}</p>
                <p className="text-xs text-gray-500">
                  #{t("Trending in Location")}
                </p>
              </div>
              <p className="text-xs text-gray-500">
                {t(`${trend.trendNumber} Tweets`)}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="mb-6 border dark:border-[#2f3336] border-gray-300   rounded-[30px] py-4">
        <h3 className="text-lg font-semibold mb-4 px-4">
          {t("Trends for you")}
        </h3>
        <ul className="">
          {Trends.slice(0, displayedTrends).map((trend, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-400 px-4 py-3 hover:bg-[#080808] transition cursor-pointer"
              onClick={() => navigate(`/trend?tn=${trend.trendName}`)}
            >
              <div>
                <p>{trend.trendName}</p>
                <p className="text-xs text-gray-500">
                  #{t("Trending in Location")}
                </p>
              </div>
              <p className="text-xs text-gray-500">
                {t(`${trend.trendNumber} Tweets`)}
              </p>
            </li>
          ))}
        </ul>
        {displayedTrends < Trends.length && (
          <button
            className="text-blue-400 text-sm mt-4 cursor-pointer px-4"
            onClick={showMoreOrLessTrends}
          >
            {displayedTrends > 5 ? t("Show less") : t("Show more")}
          </button>
        )}
      </div>

      <div className="border dark:border-[#2f3336] border-gray-300 rounded-[30px] p-4">
        <h3 className="text-lg font-semibold mb-4">{t("Who to follow")}</h3>
        <ul className="space-y-4">
          {Users.slice(0, displayedUsers).map((user, index) => (
            <li
              key={index}
              className="flex justify-between items-center cursor-pointer"
              onClick={() => navigate(`/profile?name=${user.username}`)}
            >
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3 "
                />
                <div>
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-gray-500">@{user.username}</p>
                </div>
              </div>
              <button
                className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full"
                onClick={() => setFollow(!follow)}
              >
                {follow == true ? t("unFollow") : t("Follow")}
              </button>
            </li>
          ))}
        </ul>
        {displayedUsers < Users.length && (
          <button
            className="text-blue-400 text-sm mt-4 cursor-pointer px-4"
            onClick={showMoreOrLessUsers}
          >
            {displayedUsers > 5 ? t("Show less") : t("Show more")}
          </button>
        )}
      </div>

      <div className="text-xs text-gray-500 mt-6">
        <p>{t("Terms of Service")}</p>
        <p>{t("Privacy Policy")}</p>
        <p>{t("Cookie Policy")}</p>
      </div>
    </div>
  );
};

export default RightSidebar;
