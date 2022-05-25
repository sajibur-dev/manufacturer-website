import React from 'react';
import notFoundImage from '../assets/images/404.png';


const NotFound = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <img src={notFoundImage} alt="" />
        </div>
    );
};

export default NotFound;