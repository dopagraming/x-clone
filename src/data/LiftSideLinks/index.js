import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BiSquare } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { SiSpreadshirt } from "react-icons/si";
import { PiBagSimpleFill } from "react-icons/pi";
import { RiSpaceShipLine } from "react-icons/ri";
import { MdElectricBolt } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import {
  FiUserPlus,
  FiList,
  FiVolumeX,
  FiSlash,
  FiBarChart,
  FiCode,
  FiFlag,
  FiEyeOff,
  FiHelpCircle,
} from "react-icons/fi";
export const LiftSideLinks = [
  {
    name: "Feed",
    iconName: MdHomeFilled,
    show: true
  },
  {
    name: "Explore",
    iconName: IoIosSearch,
    show: true
  },
  {
    name: "Notifications",
    iconName: RiNotification2Line,
    show: true
  },
  {
    name: "Messages",
    iconName: MdOutlineMail,
    show: true
  },
  {
    name: "Gork",
    iconName: BiSquare,
    show: true
  },
  {
    name: "Profile",
    iconName: CiUser,
    show: true
  },
  {
    name: "Lists",
    iconName: MdOutlineFeaturedPlayList,
    show: false
  },
  {
    name: "Premium",
    iconName: MdElectricBolt,
    show: false
  },
  {
    name: "Bookmarks",
    iconName: CiBookmark,
    show: false
  },
  {
    name: "Communities",
    iconName: RiGroupLine,
    show: false
  },
  {
    name: "Monetization",
    iconName: FaMoneyBillWave,
    show: false
  },
  {
    name: "Business",
    iconName: SlEnergy,
    show: false
  },
  {
    name: "Ads",
    iconName: SiSpreadshirt,
    show: false
  },
  {
    name: "Jobs",
    iconName: PiBagSimpleFill,
    show: false
  },
  {
    name: "Create",
    iconName: RiSpaceShipLine,
    show: false
  },
  {
    name: "setting/account",
    iconName: CiSettings,
    show: true
  },
];

export const postSetting = [
  {
    name: "Follow @palestine",
    iconName: FiUserPlus
  },
  {
    name: "Subscribe to @palestine",
    iconName: FiList
  },
  {
    name: "Add/remove @palestine from Lists",
    iconName: FiList
  },
  {
    name: "Mute @palestine",
    iconName: FiVolumeX
  },
  {
    name: "Mute this conversation",
    iconName: FiVolumeX
  },
  {
    name: "Block @palestine",
    iconName: FiSlash
  },
  {
    name: "View post engagements",
    iconName: FiBarChart
  },
  {
    name: "Embed post",
    iconName: FiCode
  },
  {
    name: "Report post",
    iconName: FiFlag
  },
  {
    name: "View hidden replies",
    iconName: FiEyeOff
  },
  {
    name: "Request Community Note",
    iconName: FiHelpCircle
  },
  {
    name: "remove Post",
    iconName: FiHelpCircle
  },
]

export const profileSetting = [
  {
    name: "dark",
    iconName: FiHelpCircle
  }
]