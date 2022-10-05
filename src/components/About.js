import React from 'react'

function About() {
  return (
      <div className='container row mt-3 p-3'>
        <div className='col-md-8'>
            <h2 style={{fontSize: "24px"}}>Hi Viewers/Visitors ! </h2>

            <p>Good to see u again and Thanks for visiting our website. </p>

            <p>This website is mainly focuses on delivering the new content in the form of blogs and
            it related to informative and educational purpose.This website is currently in progress
            we are trying to complete as soon as possible.</p>

            <p>Thanks to all collaborators to helped me out to complete few of portions in this website
            and they will plan to release new portions shortly.</p>

            <p>We were always encourage new ideas and innovations.As we have less capactity to complete
            this website and If any one have intrested to work with us. </p>

            <p>Please send a mail to our mail box. Our collaborators will reach out to you shortly.</p>


            <p>Thanks,</p>
            <h2 style={{fontSize: "24px"}}>Letstalk Team.</h2>
        </div> 
        <div className='col-md-3'>
            <h1 className="letstalk-about-title">Let's Talk </h1>
            <h4>&copy;2021-2022 All Rights Reserved.</h4>
            <p>Our Collaborators</p>
            <ul>
                <li>Rajkumar</li>
                <li>Naveen Kumar</li>
                <li>Srikanth</li>
            </ul>
            <p>....</p>
            <div className="row">
                <div className="coffee-icon coffee-icon-1">
                    <div className="coffee-top"></div>
                    <div className="coffee-body"></div>
                </div>
                &nbsp;&nbsp;<p> Buy me a Coffee</p>
            </div>
        </div> 
      </div>
  )
}

export default About