import React from "react";
import NestedListsItem from "../NestedListsItem";
import { GoPerson } from "react-icons/go";
import { HiOutlineKey } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineHeartBroken } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AccountSettingsList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">{t('account.title')}</h1>
      <p className="mx-2 text-sm text-gray-500">
        {t('account.description')}
      </p>
      <div className="flex flex-col gap-2">
        <NestedListsItem
          title={t('account.accountInformation.title')}
          icon={<GoPerson className="text-2xl text-gray-500" />}
          description={t('account.accountInformation.description')}
          onClick={() => navigate("your_twitter_data")}
        />
        <NestedListsItem
          title={t('account.changePassword.title')}
          icon={<HiOutlineKey className="text-2xl text-gray-500" />}
          description={t('account.changePassword.description')}
          onClick={() => navigate("change_passwords")}
        />
        <NestedListsItem
          title={t('account.downloadData.title')}
          icon={<MdOutlineFileDownload className="text-2xl text-gray-500" />}
          description={t('account.downloadData.description')}
          onClick={() => navigate("download_your_data")}
        />
        <NestedListsItem
          title={t('account.deactivateAccount.title')}
          icon={<MdOutlineHeartBroken className="text-2xl text-gray-500" />}
          description={t('account.deactivateAccount.description')}
          onClick={() => navigate("deactivate_your_account")}
        />
      </div>
    </div>
  );
};

export default AccountSettingsList;
