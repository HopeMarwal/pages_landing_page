import AuthorBook from "./container/AuthorBook";
import About from "./container/About";
//style
import '../assets/style/container.scss'

export default function Container() {
  return (
    <div className="container">
      <AuthorBook />
      <About />
    </div>
  )
}
