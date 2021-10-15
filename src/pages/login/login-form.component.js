import React, {useState} from "react";
import styles from './login.module.scss';
import { useAuth } from '../../hooks/useAuth';
import {withRouter} from 'react-router-dom';


export const LoginForm = (props) => {

    const [loginFormData, setFormData] = useState({
        userName: "",
        password: ""
      });

    const auth = useAuth();

    const handleSubmit = (event) => {
        auth.signin().then((val)=>{
            console.log(val);
            props.history.push('/home')
        })
        
        event.preventDefault();
    }


    return (
        <form className={styles.formsignin} onSubmit={handleSubmit}>

            <img className="mb-4" src="/logo192.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                autoFocus value={loginFormData.userName} onChange={(e) => setFormData({...loginFormData, userName: e.target.value})} />

            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                value={loginFormData.password} onChange={(e) => setFormData({...loginFormData, password: e.target.value})} />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    );
}

export default withRouter(LoginForm)