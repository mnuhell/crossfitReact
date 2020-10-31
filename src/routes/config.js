import AdminLayout from '../layout/AdminLayout';
import AdminHome from '../pages/admin/AdminHome';

import {Login} from '../components/auth/Login';
import {Register} from '../components/auth/Register';
import Setting from '../pages/admin/Setting';
import { Home } from '../components/Home';
import GuestLayout from '../layout/GuestLayout';
import Error404 from '../pages/Error404';
import UserLayout from '../layout/UserLayout';
import UserClases from '../pages/user/UserClases';
import { UserHome } from '../pages/user/UserHome';
import SuperAdminLayout from '../layout/SuperAdminLayout';
import { SuperAdminHome } from '../pages/superadmin/SuperAdminHome';

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
                path: "/user/clases",
                component: UserClases,
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


