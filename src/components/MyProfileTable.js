import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const MyProfileTable = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const uid = user?.uid;
  const [profile, setProfile] = useState({});
  const url = `https://frozen-coast-70492.herokuapp.com/profiles/${uid}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      });
  }, [url]);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h1 class="text-5xl font-bold">My profile : </h1>
            <div class="py-6 space-y-5">
              <div className="space-y-2">
                <h1 className="text-2xl">Personal : </h1>
                <div>
                    <h1>Name : {profile?.name}</h1>
                    <h2>Email : {profile?.email}</h2>
                    <p>Phone : {profile?.phone}</p>
                </div>
              </div>

              <div className="space-y-2">
                  <h1 className="text-2xl">Education : </h1>
                  <div>
                  <p>Education lavel : {profile?.education}</p>
                  <p>Subject : {profile?.subject}</p>
                  <p> institution : {profile?.institution}</p>
                  </div>
              </div>
              <div>
                  <address>
                     {profile?.country}, {profile?.district}, {profile?.area}
                  </address>
              </div>
            </div>
            <button class="btn btn-primary" onClick={() => navigate(`updateProfile/${profile?._id}`)}>update profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileTable;
