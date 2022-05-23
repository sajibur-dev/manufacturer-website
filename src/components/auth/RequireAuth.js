import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = () => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();

    return (
        <>
            {
                loading ? <p>loading</p> : user ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace />
            }
        </>
    );
};

export default RequireAuth;