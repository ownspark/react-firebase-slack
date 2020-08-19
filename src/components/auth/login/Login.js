import React from 'react';
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
    const signIn = (e) => { 
        
        

    }
    return (
        <div className="login">
            <div className="login__container">
                 <img src="https://cdn.brandfolder.io/5H442O3W/as/pnlpsg-beh8pk-2mgxnk/appIcon_desktop.png" alt="" /> 
                <h1>Sign in to HQ</h1>
                <p>whatever.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
