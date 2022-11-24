import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/About-Us/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Catagory from "../Pages/Catagory/Catagory";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
                element: <Catagory></Catagory>
            },
            {
                path: '/',
                element: <Home></Home>
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
            },

        ]
    }
])

export default router;