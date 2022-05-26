import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProfile = () => {
    const {profileId} = useParams();
    const [] = useState({});
    useEffect(()=>{
        fetch(``)
    },[])
    console.log(profileId);
    return (
        <div>
            
        </div>
    );
};

export default UpdateProfile;