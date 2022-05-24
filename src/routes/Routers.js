import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import AddReviews from "../components/AddReviews";
import AllOrders from "../components/AllOrders";
import RequireAdmin from "../components/auth/RequireAdmin";
import RequireAuth from "../components/auth/RequireAuth";
import RequireUser from "../components/auth/RequireUser";
import MakeAdmin from "../components/MakeAdmin";
import ManageProducts from "../components/ManageProducts";
import MyOrders from "../components/MyOrders";
import MyProfile from "../components/MyProfile";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Purchease from "../pages/Purchase";
import Register from "../pages/Register";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<RequireAuth />}>
        <Route path="purchease/:id" element={<Purchease />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route
            path="myOrders"
            element={ <RequireUser> <MyOrders /></RequireUser>}/>
          <Route path="addReviews" element={<RequireAdmin><AddReviews /></RequireAdmin>} />
          
          <Route path="allOrders" element={<RequireAdmin> <AllOrders /></RequireAdmin>} />
          <Route path="addProduct" element={<RequireAdmin> <AddProduct /></RequireAdmin>} />
          <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin> } />
          <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin> } />
          <Route path="myProfile" element={<MyProfile />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
