import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import UseAdmin from '../../Hook/UseAdmin';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRout;