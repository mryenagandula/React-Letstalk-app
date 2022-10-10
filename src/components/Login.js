import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { loginUser } from '../store/actions/users/users.action';


function Login({loginUser,isAuthenticated}) {
  const navigateTo= useNavigate();

  useEffect(() => {
    if(isAuthenticated){
      navigateTo('/home')
    } 
  }, [isAuthenticated,navigateTo])
  
  const initialValues= {
    email: '',
    password: ''
  }

  const onSubmit = (values,props) =>{
    loginUser(values);
    props.resetForm();
  }

  const validationSchema = yup.object({
    email : yup.string().email("Invalid email").required('Required Email !'),
    password : yup.string().required('Required Password !')
  })
  

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur:true
  })

  return (
    <div className='container-fluid mt-3'>
      <form className='form shadow mt-3 p-3' onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <div className="row mt-3">
          <label htmlFor="email" className='label col-md-2'>Email</label>
          <input
            type="text"
            className="form-control form-control-sm col-md-4"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        { formik.touched.email && formik.errors.email ? <p className='text-danger mt-1' style={{marginLeft:"16%"}}>{formik.errors.email}</p> : null}
        <div className="row mt-3">
          <label htmlFor="password" className='label col-md-2'>Password</label>
          <input
            type="password"
            className="form-control form-control-sm col-md-4"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        { formik.touched.password && formik.errors.password ? <p className='text-danger mt-1' style={{marginLeft:"16%"}}>{formik.errors.password}</p> : null}
        <div className="row mt-3">
          <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className='btn btn-primary col-md-1 m-3'>Submit</button>
          <button type='reset' onClick={()=> formik.resetForm()} className='btn btn-danger col-md-1 m-3'>Reset</button>
        </div>
      </form>
    </div>
  )
}


const mapStateToProps = ({users}) =>{
  return {
    loading: users.loading,
    error: users.error,
    isAuthenticated: users.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    loginUser: (payload) => dispatch(loginUser(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);