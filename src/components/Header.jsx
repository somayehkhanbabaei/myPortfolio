import './Header.css'


export default function Header() {
  return (
      <nav>
        <ul className="navbar">
          <li className='navbar-link'>
            <a href="/contact" title="contact page">Contact</a>
          </li>
          <li className='navbar-link'>
            <a href="/projects" title="workPage">Projects</a>
          </li>
         <li className='navbar-link'>
          <a href='/about' title="about me">About</a>
         </li>
          <li className='navbar-link'>
            <a href="/" className="active" title="home page"> Home</a>
          </li>
        </ul>
      </nav>
  )
}


