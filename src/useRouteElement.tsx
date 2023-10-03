import { Outlet, Navigate, useRoutes } from 'react-router-dom'
import { ROUTES } from './constants/routes'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import Forgot from './pages/Forgot'
import Dashboard from './pages/Dashboard'
import UserItemsManager from './pages/UserItemsManager'
import CreateWasteReport from './pages/WasteReport/pages/CreateWasteReport'
import WasteReportLayout from './pages/WasteReport/layouts/WasteReportLayout'
import AccountLayout from './layout/AccountLayout'

const isAuthenticated = true
const ProtectedRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}

const RejectedRoute = () => {
    return !isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.DASHBOARD} />
}

export default function useRouteElement() {
    const element = useRoutes([
        {
            path: ROUTES.HOME,
            element: isAuthenticated ? (
                <MainLayout>
                    <Dashboard />
                </MainLayout>
            ) : (
                <Navigate to={ROUTES.LOGIN} />
            )
        },
        {
            path: ROUTES.HOME,
            element: <ProtectedRoute />,
            children: [
                {
                    path: ROUTES.DASHBOARD,
                    element: (
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    )
                },
                {
                    path: ROUTES.USER_ITEMS_MANAGER,
                    element: (
                        <MainLayout>
                            <UserItemsManager />
                        </MainLayout>
                    )
                },
                {
                    path: ROUTES.CREATE_WASTE_REPORT,
                    element: (
                        <MainLayout>
                            <CreateWasteReport />
                        </MainLayout>
                    )
                },
                {
                    path: ROUTES.EDIT_WASTE_REPORT,
                    element: (
                        <MainLayout>
                            <WasteReportLayout />
                        </MainLayout>
                    )
                },
                {
                    path: ROUTES.ACCOUNT,
                    element: (
                        <MainLayout>
                            <AccountLayout />
                        </MainLayout>
                    )
                }
            ]
        },
        {
            path: ROUTES.HOME,
            element: <RejectedRoute />,
            children: [
                {
                    path: ROUTES.LOGIN,
                    element: <Login />
                },
                {
                    path: ROUTES.REGISTER,
                    element: <Register />
                },
                {
                    path: ROUTES.FORGOT,
                    element: <Forgot />
                }
            ]
        }
    ])
    return element
}
