import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{user?.displayName}</td>
              <td>{user?.email}</td>
            </tr>
          </tbody>
        </table>
        <form>
          
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
