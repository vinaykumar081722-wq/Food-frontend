import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img className="logo" src={assets.logo}/>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora non quaerat nostrum quae reiciendis at ea perferendis cupiditate, laborum saepe dignissimos eaque? Voluptates corporis aut dignissimos laborum eaque perspiciatis ipsam?</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
        <h2> Get In Touch</h2>
        <ul>
            <li>Phone: +1 123 456 7890</li>
            <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
        </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 &copy; All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
