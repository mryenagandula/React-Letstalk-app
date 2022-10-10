import React from 'react'
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import App from './App';
import About from './components/About';
import Audits from './components/Audits';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import Forbidden from './components/Forbidden';
import Home from './components/Home';
import InjectAxiosInterceptors from './components/InjectAxiosInterceptors';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';

function AppRouting() {
  return (
    <Router>
      <InjectAxiosInterceptors/>
      <Routes>
        <Route element={<App />}>
          <Route path='/' index element={<Home />} />
          <Route path='/home' index element={<Home />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/audits' exact element={<Audits />} />
          <Route path='/blogs' exact element={<Blogs />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/contact-us' exact element={<ContactUs />} />
          <Route path="/forbidden" element={<Forbidden/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<Navigate to ="/forbidden" />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouting;