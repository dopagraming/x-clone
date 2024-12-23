import React from "react";
import { useTranslation } from "react-i18next";
import NestedListsItem from "../NestedListsItem";
import { MdOutlineLock } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdSwapHoriz } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SecurityAndAccountAccessList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">
        {t("security_account_access.title")}
      </h1>
      <p className="mx-2 text-sm text-gray-500">
        {t("security_account_access.description")}
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title={t("security")}
          icon={<MdOutlineLock className="text-2xl text-gray-500" />}
          description={t("security_description")}
          onClick={() => navigate("security")}
        />
        <NestedListsItem
          title={t("apps_and_sessions")}
          icon={<MdContentCopy className="text-2xl text-gray-500" />}
          description={t("apps_and_sessions_description")}
          onClick={() => navigate("apps_and_sessions")}
        />
        <NestedListsItem
          title={t("connected_accounts")}
          icon={<MdSwapHoriz className="text-2xl text-gray-500" />}
          description={t("connected_accounts_description")}
          onClick={() => navigate("connected_accounts")}
        />
        <NestedListsItem
          title={t("delegate")}
          icon={<IoPeopleOutline className="text-2xl text-gray-500" />}
          description={t("delegate_description")}
          onClick={() => navigate("delegate")}
        />
      </div>
    </div>
  );
};

export default SecurityAndAccountAccessList;
