//style
import '../assets/style/footer.scss'
//icons
import logo from '../assets/img/logo.svg'
import fb from '../assets/img/fb_outline.svg'
import twitter from '../assets/img/twitter_outline.svg'
import linkedin from '../assets/img/linkedin_outline.svg'
import instagramm from '../assets/img/instagramm_outline.svg'
import { BsThreeDots } from 'react-icons/bs'


export default function Footer() {

  const explorePages = [
    'home',
    'about',
    'articles',
    'our store',
    'contact us'
  ]

  const utilityPages = [
    'style guide',
    '404 not found',
    'password protected',
    'licenses',
    'changelog'
  ]

  const contacts = {
    address: '24A Kingston St, Los Vegas NC 28202, USA.',
    mail: 'support@pages.com',
    phone: '(+22) 123 - 4567 - 900'

  }

  return (
    <footer>
      <div className="footer-container">
        {/* social links */}
        <div className='social-links'>

          <div className='top'>
            <img src={logo} alt="logo" />
            <span>Pages</span>
          </div>

          <div className="icons">
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagramm} alt="instagramm" />
          </div>
        </div>
        {/* explore links */}
        <div className="explore">
          <h5>Explore</h5>
          <ul className='links'>
            {
              explorePages.map((item, index) => {
                return (
                  <li key={index} className='link-item'>
                    <BsThreeDots className='list' />
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* utility pages links */}
        <div className="utility">
          <h5>Utility Pages</h5>
          <ul className='links'>
            {
              utilityPages.map((item, index) => {
                return (
                  <li key={index} className='link-item'>
                    <BsThreeDots className='list' />
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* contacts  */}
        <div className="footer-contacts">
          <h5>Keep in Touch</h5>

          <div className="contact-item">
            <p className="key">Address:</p>
            <p className="value">{contacts.address}</p>
          </div>

          <div className="contact-item">
            <p className="key">Mail:</p>
            <p className="value">{contacts.mail}</p>
          </div>

          <div className="contact-item">
            <p className="key">Phone:</p>
            <p className="value">{contacts.phone}</p>
          </div>
        </div>


      </div>
    </footer>
  )
}
