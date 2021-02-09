import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signUpOperation, signInOperation} from '../../redux/operations/authOperations';
import {button,form,inputWrapper} from './AuthForm.module.css';

const intialState={
    email:"",
    password:""
}

const AuthForm=()=>{
    const[state,setState] = useState({...intialState});
    const location=useLocation();
    const dispatch = useDispatch();

    const onHandleChange = e=>{
        const{name,value} = e.target;
        setState(prev=>({...prev,[name]:value}))
    }

    const handleSubmit=e=>{
        e.preventDefault();
        location.pathname==='/signup'?
        dispatch(signUpOperation(state)) :
        dispatch(signInOperation(state));

    }

    return(
        <form className={form} onSubmit = {handleSubmit}>
            <div className={inputWrapper}>
                <label>Email<br/>
                    <input type="email" value={state.email} name="email" onChange={onHandleChange}/>
                </label><br/>
            </div>
            
            <div className={inputWrapper}>
                <label>Password<br/>
                    <input type="password" value={state.password} name="password" onChange={onHandleChange}/>
                </label><br/>
            </div>

            <button type="submit" className={button}>{location.pathname==="/signin"? "Sign In": "Sign Up"}</button>
        </form>
    )
};

export default AuthForm;
