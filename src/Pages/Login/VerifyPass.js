import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const VerifyPass = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
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
};

export default VerifyPass;