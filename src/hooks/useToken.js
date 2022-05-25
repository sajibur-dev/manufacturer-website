import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token,setToken] = useState();
    const uid = user?.user?.uid;
    const email = user?.user?.email;
    const name = user?.user?.displayName;

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
    },[email,uid,name]);
    return [token];
};

export default useToken;