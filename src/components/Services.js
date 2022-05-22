import { faClockRotateLeft, faPercent, faSackDollar, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 px-5 py-11 my-6 text-accent'>


            <div className='flex justify-center'>
                <div>
                    <FontAwesomeIcon  className='text-5xl mt-2 mr-3' icon={faTruck}/>
                </div>
                <div  >
                    <h1 className='text-lg uppercase'>free delavery</h1>
                    <p className='text-sm'>Free shipping on all orders</p>
                </div>
            </div>


            <div className='flex justify-center'>
                <div>
                    <FontAwesomeIcon className='text-5xl mt-2 mr-3' icon={faClockRotateLeft}/>
                </div>
                <div className='space-y-1'>
                    <h1 className='text-lg uppercase'>online support 24/7</h1>
                    <p className='text-sm'>support online 24 hours</p>
                </div>
            </div>


            <div className='flex justify-center'>
                <div className='space-y-1'>
                    <FontAwesomeIcon className='text-5xl mt-2 mr-3' icon={faSackDollar}/>
                </div>
                <div>
                    <h1 className='text-lg uppercase'>money return</h1>
                    <p className='text-sm'>Back guarantee under 7 days</p>
                </div>
            </div>


            <div className='flex justify-center'>
                <div className='space-y-1'>
                    <FontAwesomeIcon className='text-5xl mt-2 mr-3' icon={faPercent}/>
                </div>
                <div>
                    <h1 className='text-lg uppercase'>memeber discount</h1>
                    <p className='text-sm'>Onevery order over $30.00</p>
                </div>
            </div>


        </div>
    );
};

export default Services;