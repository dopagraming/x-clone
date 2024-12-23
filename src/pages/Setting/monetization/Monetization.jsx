import React from "react";
import NestedListsItem from "../NestedListsItem";
import { GoPerson } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Monetization() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <h1 className="mx-2 my-4 text-2xl font-bold">Monetization</h1>
      <p className="mx-2 text-1xl font-bold">
        Payouts are not supported in your area
      </p>
      <p className="mx-2  text-gray-500">
        Unfortunately, our payment provider does not yet support payouts in your
        country. Some monetization programs are not available.
      </p>
      <div className="flex flex-col gap-2">
        <a
          href="https://help.x.com/en/using-x/creator-dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NestedListsItem
            title="Learn more"
            icon={
              <div className="bg-indigo-600 w-[65px] rounded-lg p-3 ">
                <IoIosInformationCircleOutline className="text-3xl text-white w-full text-center" />
              </div>
            }
            description="Learn more about our Monetization programs and policies here."
            onClick={() => null}
          />
        </a>
      </div>
    </div>
  );
}
