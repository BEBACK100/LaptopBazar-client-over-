import { createBrowserRouter } from "react-router-dom";
import Dashboardlayot from "../Layout/Dashboardlayot";
import Main from "../Layout/Main";
import AboutUs from "../Pages/About-Us/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Catagory from "../Pages/Catagory/Catagory";
import CatagoryDetails from "../Pages/Catagory/CatagoryDetails";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Dashboard from "../Pages/PickUp/Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRout from "./AdminRout/AdminRout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/catagory/:id',
                element: <PrivateRoute><CatagoryDetails></CatagoryDetails></PrivateRoute>,

            },
            {
                path: '/laptopdetails/:id',
                element: <Catagory></Catagory>,

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboardlayot></Dashboardlayot> </PrivateRoute>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

            // {
            //     path: '/dashboard/payment/:id',
            //     element: <AdminRout><Payment></Payment> </AdminRout>,
            //     loader: ({ params }) => fetch(`https://laptop-bazar-second-hand-server-assignment12-beback100.vercel.app/bookings/${params.id}`)
            // },

        ]
    }
])

export default router;