import React from 'react'
import "./Header.css"
import CTA from './CTA'
import Me from "../../assets/profile.png"
// import Me from "../../assets/Meremovebg-preview1.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <h5>Hello I'm</h5>
        <h1>Muhammad Shehroz</h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA/>
        
        <HeaderSocial/>
        <div className="me">
          <img src={Me} alt="me"  />
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header