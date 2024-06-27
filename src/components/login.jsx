

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email:'',
        password:''
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem('loggedin',true);
            navigate('/');
        }else{
            alert('Wrong Email or password');
        }
    };
  return (
    <div className='d-flex justify-content-center'>
    <form className='border border-black- w-50 p-5 form-control' onSubmit={handleLogin}>
    <div className='text-center'><img src='../news-logo.jpg' style={{width:'70px'}}/><span>LOGIN</span></div>
    
    <div className='mt-3'>
        <input
        name='email'
        value={input.email}
         onChange={(e) => 
            setInput({
                ...input, [e.target.email] : e.target.value,
            })
        }
         type='text' id='email' className='form-control'/>
        <label>Your Email</label>
    </div>
    <div className='mt-3'>
        <input 
        name='password'
        value={input.password}
         onChange={(e) => 
            setInput({
                ...input, [e.target.password] : e.target.value,
            })
        }
        type='text' id='password' className='form-control'/>
        <label> Password</label>
    </div>

    <div className='mt-3'>
        <button className='btn btn-dark  text-white'>Login</button>
        <p className='text-center mt-5'>Don't You have an account? <Link to='/register'>Register</Link></p>
    </div>

    </form>

</div>
  )
}
