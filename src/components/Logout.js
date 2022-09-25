import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from '../utils/token.service';

function Logout() {
  const navigate = useNavigate();
  deleteToken();
  navigate('/login');
  return (
    <div>Logging off...</div>
  )
}

export default Logout