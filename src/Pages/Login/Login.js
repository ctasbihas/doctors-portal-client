import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    if (user) {
        console.log(user.user);
    }
    if (error) {
        errorMessage = <div className="alert alert-error shadow-lg"><div><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className='text-sm'>{error.message}</span></div></div>
    }

    return (
        <div className='flex  justify-center items-center'>
            <div className="hero  w-1/2">
                <div className="hero-content flex-col w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-center">Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Email address"
                                        className="input input-bordered"
                                        {...register("email", {
                                            pattern: {
                                                value: /[A-Za-z]{3}/,
                                                message: 'error message'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        <span class="label-text-alt ">{errors.email?.type === 'required' && "Email is required"}</span>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered"
                                        {...register("password", { required: true })}
                                    />
                                    <label class="label">
                                        <span class="label-text-alt ">{errors.password && "Password is required"}</span>
                                    </label>
                                    <label className="label my-2">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <label className="label">
                                New to Doctors Portal? <a href="#" className="text-secondary">Create new account</a>
                            </label>
                            <div className="divider">OR</div>
                            {errorMessage}
                            <button
                                onClick={() => signInWithGoogle()}
                                className={loading ? "btn btn-outline loading" : "btn btn-outline"}>
                                CONTINUE WITH GOOGLE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;