import * as AiIcons from "react-icons/ai";
import { IRoutesLink, ISideBarRoutes } from "../../../interfaces";
import Profile from "../Pages/Profile/Profile";
import Lawyers from "../Pages/Lawyers/Lawyers";
import CareGivers from "../Pages/CareGivers/CareGivers";
import ViewDetails from "../Pages/Lawyers/ViewDetails/ViewDetails";

export const adminRoutes: IRoutesLink[] = [
    {
        path: '/admin/profile',
        component: <Profile />,
    },
    {
        path: '/admin/lawyers',
        component: <Lawyers />,
    },
    {
        path: '/admin/care-givers',
        component: <CareGivers />,
    },
    {
        path: '/admin/details',
        component: <ViewDetails />,
    },
]

export const adminSideBarItems: ISideBarRoutes[] = [
    {
        path: '/admin/profile',
        icon: <AiIcons.AiFillDashboard />,
        title: 'Profile',
        isSubNav: false,
    },
    {
        path: '/admin/lawyers',
        icon: <AiIcons.AiFillDashboard />,
        title: 'Lawyers',
        isSubNav: false,
    },
    {
        path: '/admin/care-givers',
        icon: <AiIcons.AiFillDashboard />,
        title: 'CareGivers',
        isSubNav: false,
    },
]



