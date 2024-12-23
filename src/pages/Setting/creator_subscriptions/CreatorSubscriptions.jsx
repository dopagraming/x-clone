import React from "react";
import { FaRegLightbulb } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import NestedListsItem from "../NestedListsItem";

export default function CreatorSubscriptions() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">{t('creatorSubscriptions.title')}</h1>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title={t('creatorSubscriptions.manageTitle')}
          icon={<FaRegLightbulb className=" text-2xl text-gray-500" />}
          description={t('creatorSubscriptions.manageDescription')}
          onClick={() => alert(t('creatorSubscriptions.noSubscriptionsAlert'))}
        />
      </div>
    </div>
  );
}
