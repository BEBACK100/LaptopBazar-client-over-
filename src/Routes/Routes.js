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
import AddProducts from "../Pages/PickUp/Dashboard/AddProducts";
import Allusers from "../Pages/PickUp/Dashboard/Allusers/Allusers";
import ManageProducts from "../Pages/PickUp/Dashboard/ManageProducts";
import MyBookingLaptop from "../Pages/PickUp/Dashboard/MyBookingLaptop";

import Welcome from "../Pages/PickUp/Dashboard/Welcome";
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
                path: '',
                element: <Welcome></Welcome>
            },
            {
                path: 'my-bookings',
                element: <MyBookingLaptop></MyBookingLaptop>
            },
            {
                path: '/dashboard/users',
                element: <AdminRout><Allusers></Allusers></AdminRout>
            },

            {
                path: '/dashboard/addproducts',
                element: <AdminRout><AddProducts></AddProducts></AdminRout>
            },
            {
                path: '/dashboard/manageproducts',
                element: <AdminRout><ManageProducts></ManageProducts></AdminRout>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRout><Payment></Payment></AdminRout>,
<<<<<<< HEAD
                loader: ({ params }) => fetch(`https://laptop-bazar-second-hand-server-assignment12.vercel.app/bookings/${params.id}`)
=======
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
>>>>>>> def0b8145465f11f67f86be4d678e1e9d2f7fb9d
            }
        ]
    }
])

export default router;