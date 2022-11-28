//style
import '../../assets/style/about.scss';
//imgs
import photo from '../../assets/img/author.jpeg'
import qrCode from '../../assets/img/qr_code.jpeg'
//icon
import { MdOutlineMaximize } from 'react-icons/md'


export default function About() {
  return (
    <div className='about-wrapper'>
      <div className="about">

        <div className="image">
          <div className="img-container">
            <img src={photo} alt="author_photo" />
          </div>
          
        </div>

        <div className="info">
          <h3>about the author</h3>
          <MdOutlineMaximize  className='yellow'/>
          <p className='desc'>
            We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.
          </p>

          {/* Rating container */}
          <div className="rating">

            <div className="rating-item">
              <p className='rating-num'>02</p>
              <p className='rating-desc'>books published</p>
            </div>

            <div className="rating-item">
              <p className='rating-num'>4.5</p>
              <p className='rating-desc'>user reviews</p>
            </div>

            <div className="rating-item">
              <p className='rating-num'>04</p>
              <p className='rating-desc'>best seller awards</p>
            </div>

          </div>

          
          <div className="contacts">
            <div className="contacts-code">
              <img src={qrCode} alt="qr-code" />
            </div>
            <div className="contacts-info">
              <p className='name'>John Abraham, Ph.d</p>
              <p>Mail: johnabraham@gmail.com</p>
              <p>Phone: (+2) 123 545 9000</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
