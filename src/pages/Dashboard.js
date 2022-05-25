import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-start pt-5 justify-start">
        {/* <!-- Page content here --> */}

        <Outlet />
        <label
          for="dashboard-drawer"
          class="btn btn-primary drawer-button lg:hidden"
        >
          open link
        </label>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              <li>
                <Link to="/dashboard">My orders</Link>
              </li>
              <li>
                <Link to="addReviews">Add a review</Link>
              </li>
            </>
          )}
          {admin &&
            <>
              <li>
                <Link to="/dashboard">Manage All Orders</Link>
              </li>
              <li>
                <Link to="addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Products</Link>
              </li>
            </>
          }
          <li>
            <Link to="myProfile">My profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
