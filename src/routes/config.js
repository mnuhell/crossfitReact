import AdminLayout from '../layout/AdminLayout';
import AdminHome from '../pages/admin/AdminHome';

import {Login} from '../components/auth/Login';
import {Register} from '../components/auth/Register';
import Setting from '../pages/admin/Setting';
import { Home } from '../components/Home';
import GuestLayout from '../layout/GuestLayout';
import Error404 from '../pages/Error404';
import UserLayout from '../layout/UserLayout';
import { UserHome } from '../pages/user/UserHome';
import SuperAdminLayout from '../layout/SuperAdminLayout';
import { SuperAdminHome } from '../pages/superadmin/SuperAdminHome';
import UserReserva from '../pages/user/UserReserva';
import UserSettings from '../pages/user/UserSettings';
import { CalendarScreen } from "../components/admin/CalendarScreen";
import {UsersScreen} from "../pages/admin/UsersScreen";
import {BonosScreen} from "../pages/admin/BonosScreen";

const routes = [

    {

        path: "/user",
        component: UserLayout,
        exact: false,
        routes: [
            {
                path: "/user",
                component: UserHome,
                exact: true

            },
            {
                path: "/user/reserva",
                component: UserReserva,
                exact: true

            },
            {
                path: "/user/settings",
                component: UserSettings,
                exact: true

            },
            {
                component: Error404
            }
        ]

    },
    {
        path: "/admin",
        component: AdminLayout,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true

            },
            {
              path: "/admin/users",
              component: UsersScreen,
              exact: true
            },
            {
                path: "/admin/bonos",
                component: BonosScreen,
                exact: true
            },
            {
                path: "/admin/create-clase",
                component: CalendarScreen,
                exact: true
            },
            {
                path: "/admin/setting",
                component: Setting,
                exact: true
            },
            {
                path: "/admin/register",
                component: Register,
                exact: true
            },
            {
                component: Error404
            }
        ]

    },

    {
        path: "/superadmin",
        component: SuperAdminLayout,
        exact: false,
        routes: [
            {
                path: "/superadmin",
                component: SuperAdminHome,
                exact: true

            },
            {
                component: Error404
            }
        ]

    },

    {
        path: "/",
        component: GuestLayout,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true

            },
            {
                path: "/login",
                component: Login,
                exact: true

            },
            {
                path: "/register",
                component: Register,
                exact: true
            },
            {
                component: Error404
            }
        ]

    }
]

export default routes


