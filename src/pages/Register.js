import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);

  const [token] = useToken(user);

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({displayName:data.name});
    reset();
  };

  if(token){
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center my-28">
      <div className="space-y-4">
        <h1 className="text-4xl uppercase">new customer</h1>
        <p>I am new coustomer</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: {
                  value: true,
                  message: "name is required",
                },
                minLength: {
                  value: 3,
                  message: "Please provide at least 3 word name",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.name?.message}
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.name?.message}
                </span>
              )}
            </label>
          </div>
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
            value="register"
            className="btn btn-accent text-white"
          />
        </form>
        <p className="text-accent">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-800">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
