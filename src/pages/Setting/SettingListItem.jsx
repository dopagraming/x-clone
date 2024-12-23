// import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

const SettingListItem = ({ title, icon, isActive = false, onClick }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 ${
        isActive
          ? "border-r-4 border-blue-500 dark:bg-[#000000d9] bg-gray-200 cursor-pointer"
          : "cursor-pointer dark:hover:bg-[#333] hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      {icon}
    </li>
  );
};

SettingListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SettingListItem;
