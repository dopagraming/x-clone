import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home/Home";
import Feed from "./pages/Home/Feed/Feed";
import Ads from "./pages/Home/Ads/Ads";
import Bookmarks from "./pages/Home/Bookmarks/Bookmarks";
import Business from "./pages/Home/Business/Business";
import Communities from "./pages/Home/Communities/Communities";
import Create from "./pages/Home/Create/Create";
import Explore from "./pages/Home/Explore/Explore";
import Gork from "./pages/Home/Gork/Gork";
import Jobs from "./pages/Home/Jobs/Jobs";
import Lists from "./pages/Home/Lists/Lists";
import Messages from "./pages/Home/Messages/Messages";
import Notifications from "./pages/Home/Notifications/Notifications";
import Premium from "./pages/Home/Premium/Premium";
import Profile from "./pages/Home/Profile/Profile";
import { LiftSideLinks } from "./data/LiftSideLinks/index.js";
import Setting from "./pages/Setting/Setting.jsx";
import AccountListSettings from "./pages/Setting/account/AccountSettingsList";
import Account from "./pages/Setting/account/Account";
import Password from "./pages/Setting/account/password/Password";
import DeactivateAccount from "./pages/Setting/account/deactivate-account/DeactivateAccount";
import CreatorSubscriptions from "./pages/Setting/creator_subscriptions/CreatorSubscriptions";
import SecurityAndAccountAccess from "./pages/Setting/security_and_account_access/SecurityAndAccountAccess";
import SecurityAndAccountAccessList from "./pages/Setting/security_and_account_access/SecurityAndAccountAccessList";
import AppsAndSessions from "./pages/Setting/security_and_account_access/apps_sessions/AppsAndSessions";
import ConnectedAccounts from "./pages/Setting/security_and_account_access/connected_accounts/ConnectedAccounts";
import DownloadData from "./pages/Setting/account/dawnload-data/DawnloadData";
import Security from "./pages/Setting/security_and_account_access/security/Security";
import Delegate from "./pages/Setting/security_and_account_access/delegate/Delegate";
import PrivacyAndSafety from "./pages/Setting/privacy_and_safety/PrivacyAndSafety";
import PrivacyAndSafetyList from "./pages/Setting/privacy_and_safety/PrivacyAndSafetyList";
import AccessibilityDisplayAndLanguages from "./pages/Setting/display_and_language/AccessibilityDisplayAndLanguages";
import AdditionalRecourses from "./pages/Setting/additional_resourses/AdditionalResourses";
import AccessibilityDisplayAndLanguagesList from "./pages/Setting/display_and_language/AccessibilityDisplayAndLanguagesList";
import Accessibility from "./pages/Setting/display_and_language/accessibilty/Accessibility";
import DataUsage from "./pages/Setting/display_and_language/data_usage/DataUsage";
import Display from "./pages/Setting/display_and_language/display/Display";
import Languages from "./pages/Setting/display_and_language/languages/Languages";
import AccountInformation from "./pages/Setting/account/account_information/AccountInformation";
import Grok from "./pages/Setting/privacy_and_safety/grok/Grok";
import LocationInformation from "./pages/Setting/privacy_and_safety/location_information/LocationInformation";
import DataSharingWithBusinessPartners from "./pages/Setting/privacy_and_safety/data_sharing_with_business_partners/DataSharingWithBusinessPartners";
import InferredIdentity from "./pages/Setting/privacy_and_safety/inferred_identity/InferredIdentity";
import AdsPreferences from "./pages/Setting/privacy_and_safety/ads_preferences/AdsPreferences";
import DiscoverabilityAndContacts from "./pages/Setting/privacy_and_safety/discoverability_and_contacts/DiscoverabilityAndContacts";
import Spaces from "./pages/Setting/privacy_and_safety/spaces/Spaces";
import DirectMessages from "./pages/Setting/privacy_and_safety/direct_messages/DirectMessages";
import MuteAndBlock from "./pages/Setting/privacy_and_safety/mute_and_block/MuteAndBlock";
import ContentYouSee from "./pages/Setting/privacy_and_safety/content_you_see/ContentYouSee";
import YourPosts from "./pages/Setting/privacy_and_safety/your_posts/YourPosts";
import AudienceMediaTagging from "./pages/Setting/privacy_and_safety/audience_media_tagging/AudienceMediaTagging";
import Monetization from "./pages/Setting/monetization/Monetization";
import NotificationsList from "./pages/Setting/notifications/NotificationsList.jsx";
import Filters from "./pages/Setting/notifications/filters/Filters.jsx";
import Preferences from "./pages/Setting/notifications/preferences/Preferences.jsx";
import NotificationsInSettings from "./pages/Setting/notifications/Notifications.jsx";
import KeyboardShortcutsPage from "./pages/Setting/display_and_language/KeyboardShortcuts";
import Tweet from "./pages/Home/Tweet/Tweet";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Trend from "./pages/Home/Trend/Trend";
import RequierAuth from "./RequierAuth.js";
const componentMap = {
  Feed,
  Explore,
  Notifications,
  Messages,
  Profile,
  Lists,
  Premium,
  Communities,
  Monetization,
  Business,
  Ads,
  Jobs,
  Create,
  Bookmarks,
  Gork,
};
export const router = createBrowserRouter([
  {
    index: true,
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: (
      <RequierAuth>
        <Home />
      </RequierAuth>
    ),
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: "tweet",
        element: <Tweet />,
      },
      {
        path: "trend",
        element: <Trend />,
      },
      ...LiftSideLinks.map(({ name }) => ({
        path: name.toLowerCase(),
        element: componentMap[name] ? componentMap[name]() : null,
      })),
      {
        path: "setting",
        element: <Setting />,
        children: [
          {
            path: "account",
            element: <Account />,
            children: [
              {
                index: true,
                element: <AccountListSettings />,
              },
              {
                path: "your_twitter_data",
                element: <AccountInformation />,
              },
              {
                path: "change_passwords",
                element: <Password />,
              },
              {
                path: "download_your_data",
                element: <DownloadData />,
              },
              {
                path: "deactivate_your_account",
                element: <DeactivateAccount />,
              },
            ],
          },
          {
            path: "monetization",
            element: <Monetization />,
          },
          {
            path: "manage_subscriptions",
            element: <CreatorSubscriptions />,
          },
          {
            path: "security_and_account_access",
            element: <SecurityAndAccountAccess />,
            children: [
              {
                index: true,
                element: <SecurityAndAccountAccessList />,
              },
              {
                path: "apps_and_sessions",
                element: <AppsAndSessions />,
              },
              {
                path: "connected_accounts",
                element: <ConnectedAccounts />,
              },
              {
                path: "security",
                element: <Security />,
              },
              {
                path: "delegate",
                element: <Delegate />,
              },
            ],
          },
          {
            path: "privacy_and_safety",
            element: <PrivacyAndSafety />,
            children: [
              {
                index: true,
                element: <PrivacyAndSafetyList />,
              },
              {
                path: "audience_media_tagging",
                element: <AudienceMediaTagging />,
              },
              {
                path: "your_posts",
                element: <YourPosts />,
              },
              {
                path: "content_you_see",
                element: <ContentYouSee />,
              },
              {
                path: "mute_and_block",
                element: <MuteAndBlock />,
              },
              {
                path: "direct_messages",
                element: <DirectMessages />,
              },
              {
                path: "spaces",
                element: <Spaces />,
              },
              {
                path: "discoverability-and-contacts",
                element: <DiscoverabilityAndContacts />,
              },
              {
                path: "ads_preferences",
                element: <AdsPreferences />,
              },
              {
                path: "inferred_identity",
                element: <InferredIdentity />,
              },
              {
                path: "data_sharing_with_business_partners",
                element: <DataSharingWithBusinessPartners />,
              },
              {
                path: "location_information",
                element: <LocationInformation />,
              },
              {
                path: "grok",
                element: <Grok />,
              },
            ],
          },
          {
            path: "notifications",
            element: <NotificationsInSettings />,
            children: [
              {
                index: true,
                element: <NotificationsList />,
              },
              {
                path: "filters",
                element: <Filters />,
              },
              {
                path: "preferences",
                element: <Preferences />,
              },
            ],
          },
          {
            path: "accessibility_display_and_languages",
            element: <AccessibilityDisplayAndLanguages />,
            children: [
              {
                index: true,
                element: <AccessibilityDisplayAndLanguagesList />,
              },
              {
                path: "accessibility",
                element: <Accessibility />,
              },
              {
                path: "data_usage",
                element: <DataUsage />,
              },
              {
                path: "display",
                element: <Display />,
              },
              {
                path: "languages",
                element: <Languages />,
              },
              {
                path: "keyboard_shortcuts",
                element: <KeyboardShortcutsPage />,
              },
            ],
          },
          {
            path: "additional_resources",
            element: <AdditionalRecourses />,
          },
        ],
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
