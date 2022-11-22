//rating
import { Rating } from 'react-simple-star-rating';
//icon
import { MdOutlineMaximize } from 'react-icons/md';
//data
import reviews from '../../data/reviews';
//style
import '../../assets/style/reviews.scss'



export default function Reviews() {
  return (
    <div className='reviews-wrapper'>
      <div className="reviews">

        <div className="left">
          <h3>words from our readers</h3>
          <MdOutlineMaximize className='yellow' />
          <p className="subtitle">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
          <Rating
            initialValue={4.5}
            readonly={true}
            allowFraction={true}
            size={18}
            fillColor={'#FFCA42'}
            SVGstorkeWidth={1}
            SVGstrokeColor={'#FFCA42'}
            emptyColor={'#ffffff00'}
          />
          <span className='num'>(4.8/5)</span>
          <p className="bottom">overall customer ratings</p>
        </div>

        <div className="right">
          {
            reviews.map((item) => {
              return (
                <div className='review-item' key={item.id}>

                  {/* review item heading  */}
                  <div className="heading">
                    <img src={item.img} alt={item.name} />

                    <div className="info">
                      <p className="name">{item.name}</p>
                      <Rating
                        initialValue={item.rating}
                        readonly={true}
                        allowFraction={true}
                        size={15}
                        fillColor={'#FFCA42'}
                        SVGstorkeWidth={1}
                        SVGstrokeColor={'#FFCA42'}
                        emptyColor={'#ffffff00'}
                      />
                    </div>

                  </div>
                  {/* review item body */}
                  <div className="body">
                    <p className="title">"{item.title}"</p>
                    <p className="text">{item.text}</p>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}
