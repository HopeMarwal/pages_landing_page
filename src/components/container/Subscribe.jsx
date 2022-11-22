//style
import '../../assets/style/subscribe.scss'
//icon
import { MdOutlineMaximize } from 'react-icons/md'

export default function Subscribe() {
  return (
    <div className='subscribe-wrapper'>
      <div className="subscribe">
        <h3>get the best updates</h3>
        <MdOutlineMaximize className='blue' />
        <p className="text">
          Subscribe with your mail id to know the current update in book edition at your fingertip with in a minute.
        </p>
        <form>
          <input type="text" placeholder='your email ID' />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}
