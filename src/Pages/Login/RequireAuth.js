import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else if (!user.emailVerified) {
        return (
            <div className='w-1/3 mx-auto mt-20'>
                <div className="card w-full bg-neutral text-neutral-content justify-items-center">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Something went wrong!!</h2>
                        <p>Your email is not verified. Check your email to verify.</p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={async () => {
                                    await sendEmailVerification();
                                    alert('Sent email');
                                }}
                                className="btn btn-primary">Accept</button>
                            <button className="btn btn-ghost">Deny</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return children;
};

export default RequireAuth;