import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn= () =>{
        auth.signInWithPopup(provider)
            .then((result) =>  {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            })
            .catch(err => alert(err.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://img.icons8.com/bubbles/300/000000/whatsapp.png" alt="whatsapp_logo" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;
