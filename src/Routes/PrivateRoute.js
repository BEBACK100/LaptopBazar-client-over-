import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/AuthProvider';
import Spinner from '../Pages/Shared/Loadding/Spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation;

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;