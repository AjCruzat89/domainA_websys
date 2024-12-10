import React, { useEffect, useState } from 'react'
import authAxios from '../assets/js/authAxios'

const login = () => {

    useEffect(() => { document.title = 'Login' }, [])
    const { loginSubmit, redirect } = authAxios();
    const [show, setShow] = useState(false);
    
    return (
        <form onSubmit={loginSubmit}>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-5 d-flex flex-column gap-3">
                <h1 className='text-center'>{window.location.hostname}:{window.location.port}</h1>
                    <label>Username</label>
                    <input className='form-control' type="text" name="username" placeholder='Enter username...' />
                    <label>Password</label>
                    <input className='form-control' type={show ? "text" : "password"} name="password" placeholder='Enter password...' />
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => setShow(!show)}/>
                        <label className="form-check-label">Show Password</label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Login</button>
                    <button type='button' onClick={redirect} className='btn border-primary'>USE WEBSYS ACC</button>
                    <a className='text-center' href="/register">Don't Have An Account?</a>
                </div>
            </div>
        </form>
    )
}

export default login