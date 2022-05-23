import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
};

export default Routers;