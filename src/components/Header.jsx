//react
import { useEffect, useState } from 'react';
//components
import Navbar from './Navbar';
//icon
import {BsFillCircleFill} from 'react-icons/bs'
import {HiOutlineMinus} from 'react-icons/hi'
//sanity
import { client, urlFor} from '../lib/client'

//style 
import '../assets/style/header.scss'

export default function Header() {

  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    client
      .fetch('*[_type == "header"]')
      .then(res => {
        setHeaderData(res[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='header'>
      <Navbar />
      <div className="header-container">
        <div className='left'>

          
          <span className='heading'> 
            <HiOutlineMinus className='yellow'/> 
            {headerData?.greeting}
          </span>

          <p className='title'>{headerData?.title}</p>
          <p className='desc'>{headerData?.desc}</p>

          <div className="btn-container">
            <button className='btn'>{headerData?.btnText}</button>
            <span className='link'>{headerData?.linkText}</span>
          </div>

          <div className="info-container">
            {/* map header data array */}
            {
              headerData?.info?.map((item, index) => {
                return (
                  <div className="info-item" key={index}>
                    
                    <div className="info-body">
                      <BsFillCircleFill className='circle' />
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
          {
            headerData && <img src={urlFor(headerData.image)} alt="the dark light book" />
          }
          
        </div>
      </div>
    </div>
  )
}
