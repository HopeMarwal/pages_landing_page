//icon
import { MdOutlineMaximize } from 'react-icons/md'
//img
import openBook from '../../assets/img/open_book.png'
//style
import '../../assets/style/promo.scss';

export default function Promo() {
  return (
    <div className='promo-wrapper'>
      <div className="promo">

        <div className="promo-col">
          <h3>Get Book Copy Today!</h3>
          <MdOutlineMaximize className='yellow' />
          <p className="subtitle">
            We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.
          </p>
          <button className='btn'>order today</button>
        </div>

        <div className="promo-col">
          <img src={openBook} alt="open book" />
        </div>
        
      </div>
    </div>
  )
}
