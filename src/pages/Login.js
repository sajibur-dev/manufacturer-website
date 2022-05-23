import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center my-28">
      <div className="space-y-4">
        <h1 className="text-4xl uppercase">returning customer</h1>
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
        <p className="text-accent">
          New to toolkits ? <Link to="/register" className="hover:text-blue-800">register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
