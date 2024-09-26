import Catalog from "./pages/UniversityPage";
import UserInfo from "./pages/UserInfo";
import Faculty from "./pages/Faculty";
import Auth from "./pages/Auth";
import {
    LOGIN_ROUTE,
    SIGNUP_ROUTE,
    HOME_ROUTE,
    USER_INFO_ROUTE, 
    CATALOG_ROUTE,
    FACULTY_ROUTE,
    SPECIALITY_ROUTE,
    FEEDBACK_ROUTE,
    ADMIN_ROUTE,
    USER_ROUTE,
    CABINET_ROUTE,
    SPECIALITY_ROUTY
} from "./utils/consts";
import Speciality from "./pages/Speciality";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import UniversityPage from "./pages/UniversityPage";
import PerosnalCabinet from "./pages/PersonalCabinet";
import Special from "./pages/Special";

export const authRoutes = [
    {
        path: ADMIN_ROUTE, //unused
        Component: Admin
    },
    {
        path: USER_INFO_ROUTE, //unused
        Component: UserInfo
    },
    {
        path: CATALOG_ROUTE, //unused
        Component: Catalog
    },
    {
        path: FACULTY_ROUTE + '/:id',
        Component: Faculty
    },
    {
        path: SPECIALITY_ROUTE + '/:id',
        Component: Speciality
    },
    {
        path: FEEDBACK_ROUTE,
        Component: Feedback
    },
    // {
    //     path: CATALOG_ROUTE + '/:id',
    //     Component: Faculty

    // },
    // {
    //      path: FACULTY_ROUTE + '/:id',
    //     Component: Special

    //  },
    {
        path: CABINET_ROUTE,
        Component: PerosnalCabinet

    },
    {
        path: SPECIALITY_ROUTY,
        Component: Special

    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: SIGNUP_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    }
]