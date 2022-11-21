import React from 'react'
//icon
import { MdOutlineMaximize } from 'react-icons/md'
import { BsFillCircleFill } from 'react-icons/bs'
//data 
import dataBooks from '../../data/books'
//style
import '../../assets/style/authorbook.scss'

export default function AuthorBook() {
  return (
    <div className='authorBook'>
      <div className="heading">
        <h3>The Author's Book</h3>
        <MdOutlineMaximize className='yellow'/>
      </div>
      <div className='book-container'>
        {
          dataBooks.map((item, index) => {
            return (
              <div className='book-item' key={index}>

                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className='info'>
                  <h4>{item.title}</h4>
                  <p className='price'>$ {item.price} USD</p>
                  <p className='desc'>{item.desc}</p>
                  <div className='type-wrapper'>
                    <BsFillCircleFill className='yellow'/>
                    <p className='type'>{item.type}</p>
                  </div>
                  <button className='btn'>order now</button>
                </div>

              </div>
            )
          })
        }
      </div>

    </div>
  )
}
