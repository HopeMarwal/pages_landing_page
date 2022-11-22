import AuthorBook from "./container/AuthorBook";
import About from "./container/About";
import Stores from './container/Stores';
import Promo from './container/Promo';
import BookContent from './container/BookContent'
import Chapters from "./container/Chapters";
import Reviews from "./container/Reviews";
import Articles from "./container/Articles";
//style
import '../assets/style/container.scss'


export default function Container() {
  return (
    <div className="container">
      <AuthorBook />
      <About />
      <Stores />
      <Promo />
      <BookContent />
      <Chapters />
      <Reviews />
      <Articles />
    </div>
  )
}
