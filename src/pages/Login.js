import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Login = () => {
    const [email,setEmail] = useState('')
  const navigate = useNavigate();
  const locaiton = useLocation()
  const from = locaiton?.state?.from?.pathname || '/'
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );

  const [token] = useToken(user);
  console.log('token',token);

  const onSubmit = (data) => {
    console.log(data);
    setEmail(data.email);
    signInWithEmailAndPassword(data.email,data.password);
    reset();
    
  };
  const  passwordReset = async () =>{
    await sendPasswordResetEmail(email);
    toast.success(`sent password reset link to ${email} `)
  }


  if(token){
    navigate(from,{replace:true});
  }
  return (
    <div className="md:flex md:justify-center md:items-center md:px-0  px-5 my-28">
      <div className="space-y-4">
        <h1 className="md:text-4xl text-2xl uppercase">returning customer</h1>
        <p>I am returning coustomer</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please provide an valid email",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-error">
                  {errors.email?.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 8,
                  message: "Please provide an 8 character password",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.password?.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.password?.message}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            value="login"
            className="btn btn-accent text-white"
          />
        </form>
        <button onClick={passwordReset} class="btn pl-0 btn-link">reset password</button>
        <p className="text-accent">
          New to toolkits ? <Link to="/register" className="text-blue-800">register</Link>
        </p>
        {
            error && <p>{error?.message}</p>
        }
      </div>
    </div>
  );
};

export default Login;
