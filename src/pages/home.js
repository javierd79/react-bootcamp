import React from 'react'
import { logout, useAuthDispatch, useAuthState } from '../context/auth'

function Home(props) {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  const handleLogout = () => {
    logout(dispatch);
    props.history.push('/login');
  };

  return (
    <div>
      <h1>Si puedes ver esto es porque ya te logueaste</h1>
      <p>Username: {userDetails.user.username}</p>
      <p>Role: {userDetails.user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home