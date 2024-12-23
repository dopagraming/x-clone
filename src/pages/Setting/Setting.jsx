import { MdKeyboardArrowRight } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import SettingListItem from "./SettingListItem";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarContext } from "../../SidebarContext";
import { useTranslation } from "react-i18next";

export default function Setting() {
  const { t, i18n } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(t("settings.yourAccount"));
  const navigate = useNavigate();
  const { closeRightSidebar } = useContext(SidebarContext);

  const handleNavigation = (item, path) => {
    setSelectedItem(item);
    navigate(path);
  };

  useEffect(() => {
    const pathMap = {
      "/setting": { path: "/setting/account", item: t("settings.yourAccount") },
      "/setting/account": {
        path: "/setting/account",
        item: t("settings.yourAccount"),
      },
      "/setting/monetization": {
        path: "/setting/monetization",
        item: t("settings.monetization"),
      },
      "/setting/manage_subscriptions": {
        path: "/setting/manage_subscriptions",
        item: t("settings.creatorSubscriptions"),
      },
      "/setting/security_and_account_access": {
        path: "/setting/security_and_account_access",
        item: t("settings.securityAndAccountAccess"),
      },
      "/setting/privacy_and_safety": {
        path: "/setting/privacy_and_safety",
        item: t("settings.privacyAndSafety"),
      },
      "/setting/notifications": {
        path: "/setting/notifications",
        item: t("settings.notifications"),
      },
      "/setting/accessibility_display_and_languages": {
        path: "/setting/accessibility_display_and_languages",
        item: t("settings.accessibilityDisplayAndLanguages"),
      },
      "/setting/additional_resources": {
        path: "/setting/additional_resources",
        item: t("settings.additionalResources"),
      },
    };

    const currentPath = window.location.pathname;
    if (pathMap[currentPath]) {
      setSelectedItem(pathMap[currentPath].item);
      navigate(pathMap[currentPath].path);
    }
  }, [navigate, t]);

  useEffect(() => {
    closeRightSidebar();
  }, [closeRightSidebar]);

  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <div className="grow w-full h-full flex flex-col gap-2 max-w-[800px]">
        <h1 className="mx-2 my-3 text-2xl font-bold">{t("settings.title")}</h1>
        <div className="flex flex-col gap-2">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder={t("settings.searchPlaceholder")}
              className="w-full max-w-900 mx-2 my-1 p-[6px] indent-8 rounded-full bg-black border-4 border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <IoSearch className="absolute left-6 text-gray-500 text-[20px]" />
          </div>
          <SettingListItem
            title={t("settings.yourAccount")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.yourAccount")}
            onClick={() =>
              handleNavigation(t("settings.yourAccount"), "/setting/account")
            }
          />
          <SettingListItem
            title={t("settings.monetization")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.monetization")}
            onClick={() =>
              handleNavigation(
                t("settings.monetization"),
                "/setting/monetization"
              )
            }
          />
          <SettingListItem
            title={t("settings.creatorSubscriptions")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.creatorSubscriptions")}
            onClick={() =>
              handleNavigation(
                t("settings.creatorSubscriptions"),
                "/setting/manage_subscriptions"
              )
            }
          />
          <SettingListItem
            title={t("settings.securityAndAccountAccess")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.securityAndAccountAccess")}
            onClick={() =>
              handleNavigation(
                t("settings.securityAndAccountAccess"),
                "/setting/security_and_account_access"
              )
            }
          />
          <SettingListItem
            title={t("settings.privacyAndSafety")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.privacyAndSafety")}
            onClick={() =>
              handleNavigation(
                t("settings.privacyAndSafety"),
                "/setting/privacy_and_safety"
              )
            }
          />
          <SettingListItem
            title={t("settings.notifications")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.notifications")}
            onClick={() =>
              handleNavigation(
                t("settings.notifications"),
                "/setting/notifications"
              )
            }
          />
          <SettingListItem
            title={t("settings.accessibilityDisplayAndLanguages")}
            icon={<MdKeyboardArrowRight />}
            isActive={
              selectedItem === t("settings.accessibilityDisplayAndLanguages")
            }
            onClick={() =>
              handleNavigation(
                t("settings.accessibilityDisplayAndLanguages"),
                "/setting/accessibility_display_and_languages"
              )
            }
          />
          <SettingListItem
            title={t("settings.additionalResources")}
            icon={<MdKeyboardArrowRight />}
            isActive={selectedItem === t("settings.additionalResources")}
            onClick={() =>
              handleNavigation(
                t("settings.additionalResources"),
                "/setting/additional_resources"
              )
            }
          />
          <SettingListItem
            title={t("settings.helpCenter")}
            icon={<FiArrowUpRight />}
            isActive={false}
            onClick={() =>
              window.open(
                "https://help.x.com/en",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
        </div>
      </div>
      <Outlet className="grow min-w-[600px]" />
    </div>
  );
}
