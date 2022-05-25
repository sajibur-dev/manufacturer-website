import {
  faArrowRightFromBracket,
  faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import brand from "../assets/icons/brand.jpg";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate =  useNavigate()
  console.log(user);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  }
  return (
    <div class="navbar bg-base-100 px-7 py-5">
      <div class="navbar-start">
        <NavLink to="/" class="btn btn-ghost normal-case md:text-xl text-2xl ">
          <img src={brand} alt="brand" />
        </NavLink>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost md:ml-10 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about us</NavLink>
            </li>
            {
              user && <li>
              <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            }
            <li>
              <NavLink to="/blogs">blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact us</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">my portfolio</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal uppercase space-x-2 p-0">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          {
              user && <li>
              <NavLink to="/dashboard">dashboard</NavLink>
            </li>
            }
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact us</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">my portfolio</NavLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end uppercase">
        
          {user ? (
              <>
              <p className="md:text-base text-xs">{user?.displayName}</p>
            <button className="btn btn-ghost text-2xl ml-2" onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
              </>
          ) : (
            <button onClick={() => navigate('/login')}>
            <FontAwesomeIcon className="btn btn-ghost" icon={faArrowRightToBracket} />
        </button>
          )}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Navbar;
