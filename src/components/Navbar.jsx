//icons
import logo from '../assets/img/logo.svg'
import fb from '../assets/img/fb.svg'
import twitter from '../assets/img/twitter.svg'
import linkedin from '../assets/img/linkedin.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
//style
import '../assets/style/navbar.scss'
//react
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen)
    if(isMenuOpen) {
      e.preventDefault();
      e.stopPropagation();
    }
    
  }

  return (
    <div className={`${isMenuOpen ? 'show' : 'hide'} navbar`}>

      <div className='menu'> 
        <span onClick={toggleMenu}>
          {isMenuOpen 
            ? <AiOutlineClose /> 
            : <AiOutlineMenu />
          }
          
        </span>
      </div>

      <div className="logo">
        <img src={logo} alt="logo" />
        <span>Pages</span>
      </div>

      <div className="navbar-container">
        <div className="navbar-wrapper">

          <div className="icons">
            <button className='icon'>
              <img src={fb} alt="facebook_icon" />
            </button>
            <button className='icon'>
              <img src={twitter} alt="twitter_icon" />
            </button>
            <button className='icon'>
              <img src={linkedin} alt="linkedin_icon" />
            </button>
          </div>

          <div className="links">
            <button className='link-item active'>Home</button>
            <button className='link-item'>About</button>
            <button className='link-item'>Pages</button>
            <button className='link-item'>Contact Us</button>
          </div>

          <div className="cart">
            <BsFillCartFill />
          </div>

          <div className="btn-container">
            <button className='btn'>Order Today</button>
          </div>

        </div>
      </div>
      
      

    
    </div>
  )
}
