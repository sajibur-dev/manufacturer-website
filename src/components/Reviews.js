import React from 'react';
import CompanyBlogs from './CompanyBlogs';
import CustomerReview from './CustomerReview';

const Reviews = () => {
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 gap-5 p-5'>
            <CompanyBlogs/>
            <CustomerReview/>
        </div>
    );
};

export default Reviews;