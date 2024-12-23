import React from "react";
import { useTranslation } from "react-i18next";

export default function AppsAndSessions() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full h-full mt-4 p-4 gap-4">
      <h1 className="text-4xl dark:text-black text-white">
        {t("apps_and_sessions")}
      </h1>
      <p>{t("Not Implemented")}</p>
    </div>
  );
}
