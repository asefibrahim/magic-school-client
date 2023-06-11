import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && !isAdmin && !isInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;