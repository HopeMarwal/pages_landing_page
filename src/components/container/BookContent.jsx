//style
import '../../assets/style/bookcontent.scss';
//icons
import { MdOutlineMaximize } from 'react-icons/md'
//img
import img from '../../assets/img/reading_book.jpeg'

export default function BookContent() {
  return (
    <div className='content-wrapper'>
      <div className='content'>
        <h3>what will you learn?</h3>
        <MdOutlineMaximize className='yellow' />

        <div className="content-row">

          <div className="content-left">

            <div className='content-item'>
              <p className="num">01</p>
              <p className="info">Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
            </div>
            <div className='content-item'>
              <p className="num">02</p>
              <p className="info">Consume streaming data using Spark Streaming, Flink, and Storm.</p>
            </div>
            <div className='content-item'>
              <p className="num">03</p>
              <p className="info">Choose an appropriate data storage technology for your application</p>
            </div>
            <div className='content-item'>
              <p className="num">04</p>
              <p className="info">Analyze non-relational data using HBase, Cassandra, and MongoDB.</p>
            </div>

          </div>

          <div className="content-right">
            <div className="img-container">
              <img src={img} alt="reading book" />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
