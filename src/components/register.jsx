

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name:'',
        email:'',
        password:''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user',JSON.stringify(input));
        navigate("/login");

    }

  return (
    <div className='d-flex justify-content-center'>
        <form className='border border-black- w-50 p-5 form-control' onSubmit={handleSubmit}>
        <div className='text-center'><img src='../news-logo.jpg' style={{width:'70px'}}/><span>CREATE AN ACCOUNT</span></div>
        <div className='mt-3'>
            <input
            name='name'
            value={input.name}
            onChange={(e) => 
                setInput({
                    ...input, [e.target.name] : e.target.value,
                })
            }
             type='text' id='name' className='form-control'/>
            <label>Your Name</label>
        </div>
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
            <button className='btn btn-dark  text-white'>Register</button>
            <p className='text-center mt-5'>Have already an account? <Link to='/login'>Login</Link></p>
        </div>

        </form>
    
    </div>
  )
}
