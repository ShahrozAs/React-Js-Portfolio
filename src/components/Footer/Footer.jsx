import React from 'react'
import "./Footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Shehroz Ashraf khan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a rel="noreferrer" href="https://www.facebook.com/mshahroz.ashraf" target='_blank'><BsFacebook/></a>
        <a rel="noreferrer" href="https://github.com/ShahrozAs" target='_blank'><FaGithub/></a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/shehroz-ashraf-khan/" target='_blank'><FaLinkedin/></a>
        <a rel="noreferrer" href="https://www.instagram.com/mrsherry_03/" target='_blank'><BsInstagram/></a>
      </div>

      <div className="footer_copywrite">
        <small>&copy; Shehroz. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer