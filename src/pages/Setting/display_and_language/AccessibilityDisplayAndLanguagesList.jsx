import React from "react";
import { useTranslation } from "react-i18next";
import NestedListsItem from "../NestedListsItem";
import { FaRegEyeSlash } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { TbAccessible } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import KeyboardShortcuts from "./KeyboardShortcuts";

const AccessibilityDisplayAndLanguagesList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">{t("title")}</h1>
      <p className="mx-2 text-sm text-gray-500">{t("description")}</p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title={t("accessibility.title")}
          icon={<FaRegEyeSlash className="text-2xl text-gray-500" />}
          description={t("accessibility.description")}
          onClick={() => navigate("accessibility")}
        />
        <NestedListsItem
          title={t("display.title")}
          icon={<HiOutlinePaintBrush className="text-2xl text-gray-500" />}
          description={t("display.description")}
          onClick={() => navigate("display")}
        />
        <NestedListsItem
          title={t("languages.title")}
          icon={<IoEarthOutline className="text-2xl text-gray-500" />}
          description={t("languages.description")}
          onClick={() => navigate("languages")}
        />
        <NestedListsItem
          title={t("data_usage.title")}
          icon={<FaRegChartBar className="text-2xl text-gray-500" />}
          description={t("data_usage.description")}
          onClick={() => navigate("data_usage")}
        />
        <NestedListsItem
          title={t("keyboard_shortcuts.title")}
          icon={<TbAccessible className="text-2xl text-gray-500" />}
          description={t("keyboard_shortcuts.description")}
          onClick={() => navigate("keyboard_shortcuts")}
        />
      </div>
    </div>
  );
};

export default AccessibilityDisplayAndLanguagesList;