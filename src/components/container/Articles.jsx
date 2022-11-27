//style
import '../../assets/style/articles.scss'
//icon 
import { MdOutlineMaximize } from 'react-icons/md'
//sanity 
import { client, urlFor } from '../../lib/client'
//react 
import { useEffect, useState } from 'react';

export default function Articles() {

  const [articlesData, setArticlesData] = useState(null)

  useEffect(() => {
    client
      .fetch('*[_type == "articles"]')
      .then(res => {
        setArticlesData(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 
  return (
    <div className='articles-wrapper'>
      <div className="articles">
        <h3>Articles & Resources</h3>
        <MdOutlineMaximize className='yellow' />

        <div className="article-container">
          {/* map article array */}
          {
            articlesData?.map((item) => {
              return (
                <div className="article-item" key={item.id} >

                  <div className="img-container">
                    <img src={urlFor(item.image)} alt="article" />
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
