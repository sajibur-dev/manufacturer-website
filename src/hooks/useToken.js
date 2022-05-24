import { useEffect, useState } from 'react';

const useToken = (email) => {
    const [token,setToken] = useState();
   console.log(email);
    useEffect(()=>{
        const user = {
            email:email,
            role:'customer'
        }
        if(email){
            fetch(`https://enigmatic-thicket-44471.herokuapp.com/users/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((res) => res.json())
        .then((data) => console.log(data));
        }
    },[email]);
    return [token];
};

export default useToken;