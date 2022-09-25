import React from 'react'
import { getToken } from '../utils/token.service';

function AuthGuard({children}) {
  const token = getToken();
  const props = children.props;
  const value= token ? (!['/register','/login'].includes(props.to) ? children : null)
   : (['/register','/login','/about','/contact-us'].includes(props.to) ? children : null)
  
  return (
    <div>
      {value}
    </div>
  )
}


export default AuthGuard;