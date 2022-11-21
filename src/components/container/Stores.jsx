import stores from '../../data/stores'
//style
import '../../assets/style/stores.scss'
//icon
import { MdOutlineMaximize } from 'react-icons/md'

export default function Stores() {
  return (
    <div className='stores-wrapper'>
      <div className="stores">
        <h3>trusted by the best</h3>
        <MdOutlineMaximize className='yellow' />

        <div className="stores-container">
          {
            stores.map((item, index) => {
              return (
                <div className='store' key={index}>
                  <div className="img-store">
                    <img src={item.image} alt={item.title} />
                  </div>
                  
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
