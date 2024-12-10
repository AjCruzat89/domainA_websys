import React, { useEffect, useState } from 'react'
import authAxios from '../assets/js/authAxios'

const register = () => {

    useEffect(() => { document.title = 'Register' }, []);
    const { registerSubmit, redirect } = authAxios();
    const [show, setShow] = useState(false);

    return (
        <form onSubmit={registerSubmit}>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card p-5 d-flex flex-column gap-3">
                    <h1 className='text-center'>Register</h1>
                    <label>Username</label>
                    <input className='form-control' type="text" name="username" placeholder='Enter username...' />
                    <label>Password</label>
                    <input className='form-control' type={show ? "text" : "password"} name="password" placeholder='Enter password...' />
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={() => setShow(!show)}/>
                        <label class="form-check-label" for="exampleCheck1">Show Password</label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Register</button>
                    <a className='text-center' href="/login">Already Have An Account?</a>
                </div>
            </div>
        </form>
    )
}

export default register