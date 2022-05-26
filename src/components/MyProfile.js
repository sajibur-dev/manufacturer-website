import React from "react";
import MyProfileForm from "./MyProfileForm";
import MyProfileTable from "./MyProfileTable";


const MyProfile = () => {
  
  return (
    <div className="p-5">
      <MyProfileTable/>
      <MyProfileForm/>
    </div>
  );
};

export default MyProfile;
