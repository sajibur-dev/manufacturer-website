import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const MyProfileForm = ({ setProfile }) => {
  const [user] = useAuthState(auth);
  const uid = user?.uid;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const profile = {
      name: user?.displayName,
      email: user?.email,
      uid: user?.uid,
      phone: data?.phone,
      education: data?.educationLavel,
      subject: data?.subject,
      institution: data?.institution,
      linkedin: data?.linkedin,
      country: data?.country,
      district: data?.district,
      area: data?.area,
    };
    console.log("profiels", profile);
    fetch("http://localhost:5000/profiles", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged) {
          const url = `http://localhost:5000/profiles/${uid}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setProfile(data);
            });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-3 flex lg:flex-row flex-col justify-center items-center space-y-3 space-x-3">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name:</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">phone number</span>
            </label>
            <input
              type="text"
              placeholder="enter your phone number"
              {...register("phone", {
                required: {
                  value: true,
                  message: "phone number is required",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.phone?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.phone?.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center space-y-3 space-x-3">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">select your education level</span>
            </label>
            <select
              {...register("educationLavel", {
                required: {
                  value: true,
                  message: "education lavel is required",
                },
              })}
              class="select select-bordered"
            >
              <option disabled>select one</option>
              <option value="JSC/JDC/8pass">JSC/JDC/8 pass</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher secondary">Higher secondary</option>
              <option value="Diploma">Deploma</option>
              <option value="Bachalor/honours">Bachalor/Honours</option>
              <option value="Masters">Masters</option>
              <option value="phd">phd</option>
            </select>
            <label class="label">
              {errors.educationLavel?.type === "required" && (
                <span class="label-text-alt">
                  {errors.educationLavel?.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">enter your subject</span>
            </label>
            <input
              type="text"
              {...register("subject", {
                required: {
                  value: true,
                  message: "subject is required",
                },
                minLength: {
                  value: 5,
                  message: "please give 5 albahbet",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.subject?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.subject?.message}
                </span>
              )}
              {errors.subject?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.subject?.message}
                </span>
              )}
            </label>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">enter your institution name</span>
            </label>
            <input
              type="text"
              {...register("institution", {
                required: {
                  value: true,
                  message: "institution is required",
                },
                minLength: {
                  value: 5,
                  message: "please give 5 albahbet",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.institution?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.institution?.message}
                </span>
              )}
              {errors.institution?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors.institution?.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Your Linkedin link</span>
            </label>
            <input
              type="text"
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin link is required",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.linkedin?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.linkedin?.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center space-y-3 lg:space-x-5">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Enter your country </span>
            </label>
            <input
              type="text"
              {...register("country", {
                required: {
                  value: true,
                  message: "country is required",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.country?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.country?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Enter your District </span>
            </label>
            <input
              type="text"
              {...register("district", {
                required: {
                  value: true,
                  message: "district is required",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.district?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.district?.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Enter your Area </span>
            </label>
            <input
              type="text"
              {...register("area", {
                required: {
                  value: true,
                  message: "area is required",
                },
              })}
              class="input input-bordered w-full max-w-xs"
            />
            <label class="label">
              {errors.area?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors.area?.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <input type="submit" value="submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default MyProfileForm;
