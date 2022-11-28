import React, { useEffect, useState } from 'react'
//React icons
import { MdOutlineMaximize } from 'react-icons/md'
import { BsFillCircleFill } from 'react-icons/bs'
//Style
import '../../assets/style/authorbook.scss'
//Sanity 
import { client, urlFor } from '../../lib/client'

export default function AuthorBook() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    client
      .fetch('*[_type == "books"]')
      .then(res => {
        setBooks(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='authorBook'>
      <div className="heading">
        <h3>The Author's Book</h3>
        <MdOutlineMaximize className='yellow'/>
      </div>
      <div className='book-container'>
        {/* map books array */}
        {
          books?.map((item, index) => {
            return (
              <div className='book-item' key={index}>

                <div className="image">
                  <img src={urlFor(item.image)} alt={item.title} />
                </div>

                <div className='info'>
                  <h4>{item.title}</h4>
                  <p className='price'>$ {item.price} USD</p>
                  <p className='desc'>{item.description}</p>
                  <div className='type-wrapper'>
                    <BsFillCircleFill className='circle'/>
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
