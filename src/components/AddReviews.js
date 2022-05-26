import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const AddReviews = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const review = {
      name: user?.displayName,
      role: data?.role,
      description: data?.reviews,
      rating: data?.rating,
    };

    fetch('https://thawing-harbor-88814.herokuapp.com/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
    }).then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="text"
          value={user?.displayName}
          readOnly
          disabled
          class="input input-bordered w-full max-w-xs block"
        />
        <div class="form-control w-full max-w-xs">
          <input
            type="number"
            {...register("rating", {
              required: {
                value: true,
                message: "rating is required",
              },
              min: {
                value: 1,
                message: "please give (1 - 5) rating",
              },
              max: {
                value: 5,
                message: "max reating is 5",
              },
            })}
            placeholder="give raing"
            class="input input-bordered w-full max-w-xs block"
          />
            <label class="label">
              {errors.rating?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.rating?.message}
                </span>
              )}
              {errors.rating?.type === "min" && (
                <span class="label-text-alt text-error">
                  {errors.rating?.message}
                </span>
              )}
               {errors.rating?.type === "max" && (
                <span class="label-text-alt text-error">
                  {errors.rating?.message}
                </span>
              )}
            </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <select
            {...register("role", {
              required: {
                value: true,
                message: "this field is requird",
              },
            })}
            class="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              what's your role ?
            </option>
            <option>customer</option>
            <option>shop owener</option>
          </select>
          <label class="label">
              {errors.role?.type === 'required' && (
                <span class="label-text-alt">{
                    errors.role?.message
                }</span>
              )}
            
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <textarea
            {...register("reviews", {
              required: {
                value: true,
                message: "please give us review",
              },
              minLength: {
                value: 50,
                message: "please give min 50 word",
              },
            })}
            class="textarea textarea-bordered block"
            placeholder="reviews"
          ></textarea>
          <label class="label">
          {errors.reviews?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.reviews?.message}
                </span>
              )}
            {errors.reviews?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.reviews?.message}
                </span>
              )}
          </label>
        </div>

        <input type="submit" className="btn btn-primary" value="post review" />
      </form>
    </div>
  );
};

export default AddReviews;
