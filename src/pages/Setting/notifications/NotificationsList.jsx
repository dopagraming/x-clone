import React from "react";
import NestedListsItem from "../NestedListsItem";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotificationsList() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">{t("notifications")}</h1>
      <p className="mx-2 text-sm text-gray-500">{t("select_notifications")}</p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title={t("filters")}
          icon={
            <HiOutlineAdjustmentsHorizontal className="text-2xl text-gray-500" />
          }
          description={t("filters_description")}
          onClick={() => navigate("filters")}
        />
        <NestedListsItem
          title={t("preferences")}
          icon={<TbDeviceMobileMessage className="text-2xl text-gray-500" />}
          description={t("preferences_description")}
          onClick={() => navigate("preferences")}
        />
      </div>
    </div>
  );
}
