import React, { useEffect, useState } from 'react'
import homeAxios from '../assets/js/homeAxios'
import authAxios from '../assets/js/authAxios'

const home = () => {

  useEffect(() => { document.title = 'Home' }, [])
  const [user, setUser] = useState([]);
  const { logoutSubmit } = authAxios();
  homeAxios(setUser);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <div className='container text-center py-5'>
      <h1 className='fw-bold'>Dashboard</h1>
      {user.username && <h5>{user.username}</h5>}
      <button className='btn btn-danger mt-5' onClick={logoutSubmit} type='button'>Logout</button>
    </div>
  )
}

export default home