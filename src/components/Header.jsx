import React from 'react';
import Navbar from './Navbar';
//data
import header from '../data/header'
//icon
import {BsFillCircleFill} from 'react-icons/bs'
import {HiOutlineMinus} from 'react-icons/hi'

//style 
import '../assets/style/header.scss'

export default function Header() {
  return (
    <div className='header'>
      <Navbar />
      <div className="header-container">
        <div className='left'>

          
          <span className='heading'> 
            <HiOutlineMinus className='yellow'/> 
            {header.greeting}
          </span>

          <p className='title'>{header.title}</p>
          <p className='desc'>{header.desc}</p>

          <div className="btn-container">
            <button className='btn'>{header.btnText}</button>
            <span className='link'>{header.linkText}</span>
          </div>

          <div className="info-container">
            {
              header.info.map((item, index) => {
                return (
                  <div className="info-item" key={index}>
                    
                    <div className="info-body">
                      <BsFillCircleFill className='yellow' />
                      <span className='info-title'>{item.title}</span>
                      
                    </div>

                    <span className='info-text'>{item.text}</span>
                    
                  </div>
                )
              })
            }
          </div>
          

        </div>
        <div className='right'>
          <img src={header.image} alt="the dark light book" />
        </div>
      </div>
    </div>
  )
}
