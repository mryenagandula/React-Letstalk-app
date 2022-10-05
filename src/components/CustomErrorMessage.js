import React from 'react'

function CustomErrorMessage({errorMessage}) {
  return (
    <div>{ errorMessage ? errorMessage : 'Required!!' }</div>
  )
}

export default CustomErrorMessage