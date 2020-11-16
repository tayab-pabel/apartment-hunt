import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import './Login.css';
import { createUser, handleFacebookSignIn, handleGoogleSignIn, initializeFirebase, signInEmailPass } from '../FirebaseSetup/FirebaseAuth';
import Navbar from '../Navbar/Navbar';
import googleLogo from '../../images/logos/google.png';
import fbLogo from '../../images/logos/facebook.png';

initializeFirebase()
const Login = () => {
//History Data To Redirect...
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } }

const [accState, setAccState] = useState(true)

// Mannage Login Resistration...... 
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 
        console.log(data)

        if(!accState){
            createUser(data.email, data.password, data.userName)
            .then(message =>{ 
                alert("Account Created Successfully")
                setAccState(true)
            })
            .catch(error => alert(error))
        }
            
        if(accState){
            signInEmailPass(data.email, data.password)
            .then(res => {
                console.log(res)
                // history.replace(from)                    
            })
            .catch(error => alert(error))   
        }
     }

//Mannage Google Sign in...
const googleLogin =() =>{
    handleGoogleSignIn()
    .then(result => {
        console.log(result)
        history.replace(from) 
    })
}

//Mannage Google Sign in...
const facebookLogin =() =>{
    handleFacebookSignIn()
    .then(result => {
        console.log(result)
        history.replace(from) 
    })
}

    return (
        <div className="login">
            <Navbar />
            <div className="container">
                <div className="col-md-6 mx-auto mt-5">
                    <div className="card p-5">
                        <div className="">
                            {accState ?
                                <>
                                    <h3 className='mb-4 pb-2'>Login</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required: true })} name='email' placeholder='Username or Email' className='form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <div className="d-flex login-alert">
                                            <div className="login-remember">
                                                <input style={{ width: '18px' }} type="checkbox" />
                                                <label className="ml-2">Remember Me</label>
                                            </div>
                                            <div>
                                                <a href="#" className="green-text">Forget Password</a>
                                            </div>
                                        </div>
                                        <button type='submit' className='btn login-form-btn btn-block mt-4'>Login</button>
                                        <p className="text-center mt-4 mb-0">Don’t have an account? 
                                        <Link className='green-text' onClick={() => setAccState(!accState)}> Create an account</Link>
                                        </p>
                                    </form>
                                </>
                                :
                                <>
                                    <h3 className='mb-4 pb-2'>Create an account</h3>
                                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                                        <input ref={register({ required:true})} name='userName' placeholder='Full Name' className='form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0' type="text" />
                                        {errors.userName && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='email' placeholder='Email' className='form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0' type="email" />
                                        {errors.email && <span className="text-danger">* Required</span>}
                                        <input ref={register({ required:true})} name='password' placeholder='Password' className='form-control mt-4 pl-0 border-top-0 border-left-0 border-right-0' type="password" />
                                        {errors.password && <span className="text-danger">* Required</span>}<br/>
                                        <button type='submit' className='btn login-form-btn btn-block my-3'>Create an account</button>
                                        <p className="text-center mt-4 mb-0">Already have an account?
                                        <Link className='green-text' onClick={() => setAccState(!accState)}> Login</Link>
                                        </p>
                                    </form>
                                </>
                            }
                            </div>
                        </div>
                        <div className="social-login text-center">
                            <p className="or mt-4">Or</p>
                            <div className="google-signIn">
                                <a onClick={googleLogin} className="btn btn-block pt-2 pb-0">
                                    <img className="icon" src={googleLogo} alt=""/>
                                    <p className="text-center pt-1 pb-0 mb-2">Continue with Google</p>
                                </a>
                            </div>
                            <div className="fb-signIn mt-2">
                                <a onClick={facebookLogin} className="btn btn-block pt-2 pb-0">
                                    <img className="icon" src={fbLogo} alt=""/>
                                    <p className="text-center pt-1 pb-0 mb-2">Continue with Facebook</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;