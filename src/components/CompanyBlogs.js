import {
    faAngleLeft,
    faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import Blog from './Blog';


const CompanyBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [start,setStart] =  useState(0)
    useEffect(()=>{
        fetch('CompanyBlogs.json')
        .then((res) => res.json())
        .then(((data)=> {
            setBlogs(data)
        }))
    },[]);


    const showingBlog = blogs?.slice(start,start + 2);

    const dataSize = blogs?.length;

    const increasePage = () => {
        if(start + 1 < dataSize ){
            setStart((prevState) => prevState + 2)
        }
    };

    const decreasePage = () => {
        if(start  > 0 ){
            setStart((prevState) => prevState - 2)
        }
    };




    console.log(blogs);
    return (
        <div>
            <div className="flex justify-between items-center p-3 border-2 border-gray-200 my-5 mr-5">
                <h1 className="text-lg text-accent font-bold">From Our Blog</h1>
                <div>
                <button className="btn btn-primary btn-sm mr-2" onClick={decreasePage}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <button className="btn btn-primary btn-sm" onClick={increasePage}><FontAwesomeIcon icon={faAngleRight}/></button>
                </div>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-2 gap-5'>
                {
                    showingBlog.map((blog) => <Blog blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default CompanyBlogs;