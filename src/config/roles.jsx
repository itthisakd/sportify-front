import HomePage from "../pages/home/HomePage";
import LandingPage from "../pages/login/LandingPage";
import LoginPage from "../pages/login/LoginPage";
import MatchesPage from "../pages/matches/MatchesPage";
import EditInfoPage from "../pages/editinfo/EditInfoPage";
import PreviewPage from "../pages/profile/PreviewPage";
import ProfilePage from "../pages/profile/ProfilePage";
import EmailPage from "../pages/register/EmailPage";
import GenderPage from "../pages/register/GenderPage";
import NamePage from "../pages/register/NamePage";
import PhotosPage from "../pages/register/PhotosPage";
import SportsPage from "../pages/register/SportsPage";
import WelcomePage from "../pages/register/WelcomePage";
import TutorialPage from "../pages/tutorial/TutorialPage";
import SettingsPage from "../pages/settings/SettingsPage";
import LikedByPage from "../pages/likedby/LikedByPage";
import BirthDatePage from "../pages/register/BirthDatePage";
import ChatPage from "../pages/matches/ChatPage";
import ViewProfilePage from "../pages/matches/ViewProfilePage";
import ShowGenderPage from "../pages/settings/ShowGenderPage";

const pages = {
  home: { page: HomePage, path: "/home" },
  landing: { page: LandingPage, path: "/landing" },
  login: { page: LoginPage, path: "/login" },
  matches: { page: MatchesPage, path: "/matches" },
  editInfo: { page: EditInfoPage, path: "/edit-info" },
  preview: { page: PreviewPage, path: "/preview" },
  profile: { page: ProfilePage, path: "/profile" },
  email: { page: EmailPage, path: "/email" },
  gender: { page: GenderPage, path: "/gender" },
  name: { page: NamePage, path: "/name" },
  photos: { page: PhotosPage, path: "/photos" },
  sports: { page: SportsPage, path: "/sports" },
  birthdate: { page: BirthDatePage, path: "/birthdate" },
  welcome: { page: WelcomePage, path: "/welcome" },
  tutorial: { page: TutorialPage, path: "/tutorial" },
  settings: { page: SettingsPage, path: "/settings" },
  likedby: { page: LikedByPage, path: "/likedby" },
  chat: { page: ChatPage, path: "/chat/:id" },
  viewprofile: { page: ViewProfilePage, path: "/viewprofile/:id" },
  showGender: { page: ShowGenderPage, path: "/show-gender" },
};

const roles = {
  GUEST: [
    pages.login,
    pages.landing,
    pages.email,
    pages.gender,
    pages.name,
    pages.birthdate,
    pages.photos,
    pages.sports,
  ],
  USER: [
    pages.welcome,
    pages.tutorial,
    pages.matches,
    pages.home,
    pages.matches,
    pages.editInfo,
    pages.preview,
    pages.profile,
    pages.settings,
    pages.likedby,
    pages.sports,
    pages.chat,
    pages.viewprofile,
    pages.showGender,
  ],
  DEV: [
    pages.login,
    pages.landing,
    pages.email,
    pages.gender,
    pages.name,
    pages.photos,
    pages.birthdate,
    pages.sports,
    pages.welcome,
    pages.tutorial,
    pages.matches,
    pages.home,
    pages.matches,
    pages.editInfo,
    pages.preview,
    pages.profile,
    pages.settings,
    pages.likedby,
    pages.chat,
    pages.viewprofile,
    pages.showGender,
  ],
};

export default roles;
