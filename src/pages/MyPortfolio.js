import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-7 w-full lg:w-4/5 border-2 border-gray-400 mx-auto rounded-lg space-y-11'>
            <div>
                <h1 className='text-3xl '>Sajibur Rahman</h1>
                <div className='text-sm font-light'>
                <h2>Sajibur.dev@gmail.com</h2>
                <p>+880 1830394432</p>
                <p>Bangladesh,Dhaka,Narayanganj,Delpara</p>
                </div>
            </div>

            <div className='lg:flex lg:items-center lg:justify-between '>
                <div className='mr-7'>
                    <h1 className='text-xl'>Education : </h1>
                </div>
                <div className='space-y-5 w-full w-4/6'>
                    <div>
                        <h1 className='text-lg'>Bachelor of Science (B.Sc) (Hons.), Statistics</h1>
                        <div className='text-sm'>
                        <p>Habibullah Bahar University College</p>
                        <p>2019 - 2023</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg'>Senior Secondary (XII), Science</h1>
                        <div className='text-sm'>
                        <p>HAZI MISIR ALI DEGREE COLLEGE</p>
                        <p>(DHAKA board)</p>
                        <p>Year of completion: 2019</p>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className='text-lg'>Secondary (X)</h1>
                        <div className='text-sm'>
                        <p>Delpara High School</p>
                        <p>(DHAKA board)</p>
                        <p>Year of completion: 2017</p>
                        </div>
                        
                    </div>
                </div>
            </div>



            <div  className='lg:flex lg:items-center lg:justify-between mt-28'>
                <div  className='mr-7'>
                    <h1 className='text-xl'>technologies or skill : </h1>
                </div>
                <div className=' lg:flex lg:justify-start lg:items-center w-full w-4/6'>
                   <div className='mr-16 space-y-2'>
                        <h1>html</h1>
                        <h1>css</h1>
                        <h1>Javascript</h1>
                        <h1>react</h1>
                        <h1>react router</h1>
                        <h1>react query</h1>
                   </div>
                   <div className='space-y-2'>
                       <h1>tailwind</h1>
                       <h1>bootstrap</h1>
                       <h1>react hook form</h1>
                       <h1>node</h1>
                       <h1>express</h1>
                       <h1>mongodb</h1>
                   </div>
                </div>
            </div>



            <div className='lg:flex lg:items-center lg:justify-between'>
                <div className='mr-7'>
                    <h1 className='text-xl'>Projects : </h1>
                </div>
                <div className='space-y-5 w-full w-4/6'>
                    <div>
                        <h1 className='text-lg'>Warehouse Managemen</h1>
                        <div className='text-sm'>
                        <p className='text-blue-600 hover:underline'><a href=" https://warehouse-management-8e3e7.web.app">https://warehouse-management-8e3e7.web.app</a></p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-lg'>Inpendent Service provider</h1>
                        
                        <div className='text-sm'>
                        <p className='text-blue-600 hover:underline'><a href="https://kingdom-of-knowledge.web.app/">https://kingdom-of-knowledge.web.app/</a></p>
                        </div>
                        
                    </div>
                    <div>
                        <h1 className='text-lg'>Product analysis</h1>
                        <div className='text-sm'>
                        <p className='text-blue-600 hover:underline'><a href=" https://marvelous-stroopwafel-23ba12.netlify.app/"> https://marvelous-stroopwafel-23ba12.netlify.app/</a></p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div>
                <address>
                    Bangladesh , Dhaka , Narayanganj , Delapara
                </address>
            </div>
        </div>
    );
};

export default MyPortfolio;