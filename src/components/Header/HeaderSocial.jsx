import React from 'react'

import {BsLinkedin  } from 'react-icons/bs'
import {BsGithub  } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/shehroz-ashraf-khan/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/ShahrozAs" target='_blank' rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial