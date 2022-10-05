import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { setUpInterceptors } from '../axios/letstalk_api/letstalk-axios';

function InjectAxiosInterceptors() {
  const navigate = useNavigate();
  useEffect(() => {
    setUpInterceptors(navigate);
  }, [navigate])
  
  return (
    <></>
  )
}

export default InjectAxiosInterceptors