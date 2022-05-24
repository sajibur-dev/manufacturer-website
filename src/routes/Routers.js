import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/auth/RequireAuth';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Purchease from '../pages/Purchase';
import Register from '../pages/Register';


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/' element={<RequireAuth />}>
                <Route path='purchease/:id' element={<Purchease/>}/>
                <Route path='dashboard' element={<Dashboard/>} />
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    );
};

export default Routers;