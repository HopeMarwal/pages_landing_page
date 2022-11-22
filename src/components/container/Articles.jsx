//style
import '../../assets/style/articles.scss'
//icon 
import { MdOutlineMaximize } from 'react-icons/md'
//data
import articles from '../../data/articles'

export default function Articles() {
  return (
    <div className='articles-wrapper'>
      <div className="articles">
        <h3>Articles & Resources</h3>
        <MdOutlineMaximize className='yellow' />

        <div className="article-container">
          {
            articles.map((item) => {
              return (
                <div className="article-item" key={item.id} >

                  <div className="img-container">
                    <img src={item.img} alt="article" />
                  </div>

                  <div className="item-body">
                    <p className="title">{item.title}</p>
                    <p className="text">{item.text}</p>
                    <p className="link">Read more</p>
                    <p className="date">{item.date}</p>
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
