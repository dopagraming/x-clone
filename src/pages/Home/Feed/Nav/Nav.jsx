import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <div className="flex text-center sticky top-0 dark:bg-[#000000d9] bg-gray-200  border-b dark:border-[#2f3336] border-gray-300">
      <button className="flex-[.5] p-4 text-sm dark:hover:bg-[#333] hover:bg-gray-300 transition ">
        {t("For You")}
      </button>
      <button className="flex-[.5] p-4 text-sm dark:hover:bg-[#333] hover:bg-gray-300 transition 	">
        {t("Following")}
      </button>
    </div>
  );
};

export default Nav;
