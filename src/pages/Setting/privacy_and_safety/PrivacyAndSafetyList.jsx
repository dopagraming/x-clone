
  import React from "react";
  import { useTranslation } from 'react-i18next';
  import NestedListsItem from "../NestedListsItem";
  import { AiOutlineUsergroupAdd, AiOutlineEdit, AiOutlineEnvironment, AiOutlineForm, AiOutlineBarChart } from "react-icons/ai";
  import { FaRegNewspaper, FaChartLine } from "react-icons/fa";
  import { IoVolumeMuteOutline } from "react-icons/io5";
  import { HiOutlineEnvelope } from "react-icons/hi2";
  import { FiArrowUpRight, FiUserCheck } from "react-icons/fi";
  import { MdKeyboardArrowRight, MdTimeline, MdSwapHoriz } from "react-icons/md";
  import { BiMicrophone } from "react-icons/bi";
  import { useNavigate } from "react-router-dom";

  const PrivacyAndSafetyList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
     <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">{t('privacy_and_safety')}</h1>
      <p className="mx-2 text-sm text-gray-500">{t('manage_information')}</p>
      <div className="flex flex-col gap-2">
        <section>
         <h2 className="mx-2 my-2 text-[20px] font-bold">{t('your_x_activity')}</h2>
         <NestedListsItem
          title={t('audience_media_tagging')}
          icon={<AiOutlineUsergroupAdd className="text-2xl text-gray-500" />}
          description={t('manage_information_other_people')}
          onClick={() => navigate("audience_media_tagging")}
         />
         <NestedListsItem
          title={t('your_posts')}
          icon={<AiOutlineEdit className="text-2xl text-gray-500" />}
          description={t('manage_information_associated_posts')}
          onClick={() => navigate("your_posts")}
         />
         <NestedListsItem
          title={t('content_you_see')}
          icon={<FaRegNewspaper className="text-2xl text-gray-500" />}
          description={t('decide_what_you_see')}
          onClick={() => navigate("content_you_see")}
         />
         <NestedListsItem
          title={t('mute_and_block')}
          icon={<IoVolumeMuteOutline className="text-2xl text-gray-500" />}
          description={t('manage_accounts_muted_blocked')}
          onClick={() => navigate("mute_and_block")}
         />
         <NestedListsItem
          title={t('direct_messages')}
          icon={<HiOutlineEnvelope className="text-2xl text-gray-500" />}
          description={t('manage_who_can_message')}
          onClick={() => navigate("direct_messages")}
         />
         <NestedListsItem
          title={t('spaces')}
          icon={<BiMicrophone className="text-2xl text-gray-500" />}
          description={t('manage_spaces_activity')}
          onClick={() => navigate("spaces")}
         />
         <NestedListsItem
          title={t('discoverability_and_contacts')}
          icon={<FiUserCheck className="text-2xl text-gray-500" />}
          description={t('control_discoverability_settings')}
          onClick={() => navigate("discoverability-and-contacts")}
         />
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section>
         <h2 className="mx-2 my-2 text-[20px] font-bold">{t('data_sharing_personalization')}</h2>
         <NestedListsItem
          title={t('ads_preferences')}
          icon={<AiOutlineBarChart className="text-2xl text-gray-500" />}
          description={t('manage_ads_experience')}
          onClick={() => navigate("ads_preferences")}
         />
         <NestedListsItem
          title={t('inferred_identity')}
          icon={<MdTimeline className="text-3xl text-gray-500" />}
          description={t('allow_personalize_experience')}
          onClick={() => navigate("inferred_identity")}
         />
         <NestedListsItem
          title={t('data_sharing_with_business_partners')}
          icon={<MdSwapHoriz className="text-2xl text-gray-500" />}
          description={t('allow_sharing_additional_information')}
          onClick={() => navigate("data_sharing_with_business_partners")}
         />
         <NestedListsItem
          title={t('location_information')}
          icon={<AiOutlineEnvironment className="text-2xl text-gray-500" />}
          description={t('manage_location_information')}
          onClick={() => navigate("location_information")}
         />
         <NestedListsItem
          title={t('grok')}
          icon={<AiOutlineForm className="text-3xl text-gray-500" />}
          description={t('allow_posts_interactions_training')}
          onClick={() => navigate("grok")}
         />
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-2">
         <h2 className="mx-2 my-2 text-[20px] font-bold">{t('learn_more_privacy')}</h2>
         <ul className="list-none">
          <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
            <a href="https://privacy.x.com/en" target="_blank">
             {t('privacy_center')}
            </a>
            <FiArrowUpRight className="text-gray-500" />
          </li>
          <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
            <a href="https://x.com/en/privacy" target="_blank">
             {t('privacy_policy')}
            </a>
            <FiArrowUpRight className="text-gray-500" />
          </li>
          <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
            <a href="https://help.x.com/en/forms/privacy" target="_blank">
             {t('contact_us')}
            </a>
            <FiArrowUpRight className="text-gray-500" />
          </li>
         </ul>
        </section>
      </div>
     </div>
    );
  };

  export default PrivacyAndSafetyList;
