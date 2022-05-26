import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin,setAdmin] = useState(false);
    const [adminLoading,setAdminLoading] = useState(true)
    useEffect( () =>{
        const uid = user?.uid;
        if(uid){
            fetch(`https://thawing-harbor-88814.herokuapp.com/admin/${uid}`, {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoading(false);
            })
        }
    }, [user])

    return [admin, adminLoading]
}


export default useAdmin;