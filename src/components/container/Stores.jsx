//style
import '../../assets/style/stores.scss'
//icon
import { MdOutlineMaximize } from 'react-icons/md'
//sanity
import { client, urlFor} from '../../lib/client'
//react
import { useEffect, useState } from 'react'

export default function Stores() {
  const [stores, setStores] = useState([])
  
  useEffect(() => {
    client
    .fetch('*[_type == "stores"]')
    .then(res => {
      setStores(res)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className='stores-wrapper'>
      <div className="stores">
        <h3>trusted by the best</h3>
        <MdOutlineMaximize className='yellow' />

        <div className="stores-container">
          {/* map stores array data */}
          {
            stores?.map((item, index) => {
              return (
                <div className='store' key={index}>
                  <div className="img-store">
                    <img src={urlFor(item.image)} alt={item.title} />
                  </div>
                  
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
