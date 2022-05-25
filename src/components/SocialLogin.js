import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';


const SocialLogin = () => {
    const [signInWithGoogle,user,] =  useSignInWithGoogle(auth);
    const navigate = useNavigate();

    const [token] = useToken(user);

    console.log(user);
console.log(token);
    if(token){
        navigate('/')
    }

    return (
        <div>
            <button className='uppercase btn btn-accent' onClick={() => signInWithGoogle()}>coninue with google</button>
        </div>
    );
};

export default SocialLogin;