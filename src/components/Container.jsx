import AuthorBook from "./container/AuthorBook";
import About from "./container/About";
import Stores from './container/Stores';
//style
import '../assets/style/container.scss'

export default function Container() {
  return (
    <div className="container">
      <AuthorBook />
      <About />
      <Stores />
    </div>
  )
}
