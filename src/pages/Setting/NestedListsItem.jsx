import React from "react";
import PropTypes from "prop-types";
import { MdKeyboardArrowRight } from "react-icons/md";

const NestedListsItem = ({ title, description, icon, onClick }) => {
  return (
    <li
      className="flex justify-between items-center  p-4 cursor-pointer hover:bg-gray-900"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div className="flex flex-col gap-1">
          <span>{title}</span>
          {description && (
            <span className="text-gray-500 text-sm">{description}</span>
          )}
        </div>
      </div>
      <MdKeyboardArrowRight className=" text-3xl text-gray-500" />
    </li>
  );
};

NestedListsItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default NestedListsItem;
