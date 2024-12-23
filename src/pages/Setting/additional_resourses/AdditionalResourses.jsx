import React from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

export default function AdditionalRecourses() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-3 text-2xl font-bold">
        {t("additionalResources")}
      </h1>
      <p className="mx-2 text-sm text-gray-500">{t("checkOutInfo")}</p>
      <div className="flex flex-col gap-2">
        <section className="mb-2">
          <h2 className="mx-2 my-2 text-[20px] font-bold">
            {t("releaseNotes")}
          </h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/i/release_notes" target="_blank">
                {t("releaseNotes")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-2">
          <h2 className="mx-2 my-2 text-[20px] font-bold">{t("legal")}</h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://business.x.com/en/help/troubleshooting/how-x-ads-work"
                target="_blank"
              >
                {t("adsInfo")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/rules-and-policies/x-cookies"
                target="_blank"
              >
                {t("cookiePolicy")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/en/privacy" target="_blank">
                {t("privacyPolicy")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://x.com/en/tos" target="_blank">
                {t("termsOfService")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <section className="mb-4">
          <h2 className="mx-2 my-2 text-[20px] font-bold">
            {t("miscellaneous")}
          </h2>
          <ul className="list-none">
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://about.x.com/en" target="_blank">
                {t("about")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/resources/accessibility"
                target="_blank"
              >
                {t("accessibility.title")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://ads.x.com/onboarding/18ce55qax5p/welcome?ref=gl-tw-tw-twitter-advertise"
                target="_blank"
              >
                {t("advertising")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://blog.x.com/" target="_blank">
                {t("blog")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://about.x.com/en/who-we-are/brand-toolkit"
                target="_blank"
              >
                {t("brandResources")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://careers.x.com/en" target="_blank">
                {t("careers")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://developer.x.com/en" target="_blank">
                {t("developers")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="#" target="_blank">
                {t("directory")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://help.x.com/en/using-x/download-the-x-app"
                target="_blank"
              >
                {t("downloadApp")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://help.x.com/en" target="_blank">
                {t("helpCenter")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a href="https://marketing.x.com/" target="_blank">
                {t("marketing")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
            <li className="px-3 py-3 cursor-pointer hover:bg-gray-900 flex justify-between">
              <a
                href="https://business.x.com/en?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
                target="_blank"
              >
                {t("xForBusiness")}
              </a>
              <FiArrowUpRight className="text-gray-500" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
