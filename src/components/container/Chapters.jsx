//data
import chapters from "../../data/chapters";
//icons
import { MdOutlineMaximize } from 'react-icons/md'
import {BsFillCircleFill} from 'react-icons/bs'
//style
import '../../assets/style/chapters.scss'

export default function Chapters() {
  return (
    <div className="chapters-wrapper">
      <div className="chapters">

        <h3>enhance khowledge & vision</h3>
        <MdOutlineMaximize className="yellow" />

        <div className="chapters-container">
          {
            chapters.map((item) => {
              return (
                <div className="chapter" key={item.chapterNum}>

                  <h4>Chapter-{item.chapterNum} {item.title}</h4>
                  <p className="desc">{item.desc}</p>

                  <div className="info">
                    <div className="info-item">
                      <BsFillCircleFill  className="circle"/>
                      <span className="key">Pages:</span>
                      <span className="value">{item.pages} pages</span>
                    </div>
                    <div className="info-item">
                      <BsFillCircleFill  className="circle"/>
                      <span className="key">Length:</span>
                      <span className="value">{item.pages} Hours</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
         
        </div>

        <button className="btn">
          start a 15-days free trail
        </button>

        <p className="bottom">Short description about each chapter</p>
        <p className="bottom">
          <span>Have any qyestions? </span>Contact us
        </p>
      </div>
    </div>
  )
}
