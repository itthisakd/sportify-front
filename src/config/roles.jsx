import HomePage from "../pages/home/HomePage";
import LandingPage from "../pages/login/LandingPage";
import LoginPage from "../pages/login/LoginPage";
import MatchesPage from "../pages/matches/MatchesPage";
import EditInfoPage from "../pages/editinfo/EditInfoPage";
import EditSportPage from "../pages/editinfo/EditSportPage";
import PreviewPage from "../pages/profile/PreviewPage";
import ProfilePage from "../pages/profile/ProfilePage";
import EmailPage from "../pages/register/EmailPage";
import GenderPage from "../pages/register/GenderPage";
import MobilePage from "../pages/register/MobilePage";
import NamePage from "../pages/register/NamePage";
import PasswordPage from "../pages/register/PasswordPage";
import PhotosPage from "../pages/register/PhotosPage";
import SportsPage from "../pages/register/SportsPage";
import VerifyEmailPage from "../pages/register/VerifyEmailPage";
import VerifyMobilePage from "../pages/register/VerifyMobilePage";
import WelcomePage from "../pages/register/WelcomePage";
import TutorialPage from "../pages/tutorial/TutorialPage";
import SettingsPage from "../pages/settings/SettingsPage";
import LikedByPage from "../pages/likedby/LikedByPage";
import BirthDatePage from "../pages/register/BirthDatePage";

const pages = {
  home: { page: HomePage, path: "/home" },
  landing: { page: LandingPage, path: "/landing" },
  login: { page: LoginPage, path: "/login" },
  matches: { page: MatchesPage, path: "/matches" },
  editInfo: { page: EditInfoPage, path: "/edit-info" },
  editPassion: { page: EditSportPage, path: "/edit-passion" },
  //// 
  preview: { page: PreviewPage, path: "/preview" },
  profile: { page: ProfilePage, path: "/profile" },
  email: { page: EmailPage, path: "/email" },
  gender: { page: GenderPage, path: "/gender" },
  mobile: { page: MobilePage, path: "/mobile" },
  name: { page: NamePage, path: "/name" },
  password: { page: PasswordPage, path: "/password" },
  photos: { page: PhotosPage, path: "/photos" },
  sports: { page: SportsPage, path: "/sports" },
  birthdate: { page: BirthDatePage, path: "/birthdate" },
  verifyEmail: { page: VerifyEmailPage, path: "/verifyemail" },
  verifyMobile: { page: VerifyMobilePage, path: "/verifymobile" },
  welcome: { page: WelcomePage, path: "/welcome" },
  tutorial: { page: TutorialPage, path: "/tutorial" },
  settings: { page: SettingsPage, path: "/settings" },
  likedby: { page: LikedByPage, path: "/likedby" },
};

const roles = {
  GUEST: [
    pages.login,
    pages.landing,
    pages.email,
    pages.gender,
    pages.mobile,
    pages.name,
    pages.password,
    pages.birthdate,
    pages.photos,
    pages.sports,
    pages.verifyEmail,
    pages.verifyMobile,
  ],
  USER: [
    pages.welcome,
    pages.tutorial,
    pages.matches,
    pages.home,
    pages.matches,
    pages.editInfo,
    pages.editPassion,
    pages.preview,
    pages.profile,
    pages.settings,
    pages.likedby,
  ],
  DEV: [
    pages.login,
    pages.landing,
    pages.email,
    pages.gender,
    pages.mobile,
    pages.name,
    pages.password,
    pages.photos,
    pages.birthdate,
    pages.sports,
    pages.verifyEmail,
    pages.verifyMobile,
    pages.welcome,
    pages.tutorial,
    pages.matches,
    pages.home,
    pages.matches,
    pages.editInfo,
    pages.editPassion,
    pages.preview,
    pages.profile,
    pages.settings,
    pages.likedby,
  ],
};

export default roles;
