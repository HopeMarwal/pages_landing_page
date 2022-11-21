import AuthorBook from "./container/AuthorBook";
import About from "./container/About";
import Stores from './container/Stores';
import Promo from './container/Promo';
import BookContent from './container/BookContent'
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
    </div>
  )
}
