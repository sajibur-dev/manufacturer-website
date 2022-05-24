import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token,setToken] = useState();

    // console.log(user?.uid);
    const uid = user?.uid;
    const email = user?.email;
    const name = user?.displayName;

    useEffect(()=>{
        const user = {
            uid,
            email,
            name
        }
        if(uid || email){
            fetch(`http://localhost:5000/users/${uid}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((res) => res.json())
        .then((data) => {
            const accessToken = data.token;
            localStorage.setItem('accessToken',accessToken);
            setToken(accessToken);
        });
        }
    },[email,uid]);
    return [token];
};

export default useToken;