import { HashLink } from 'react-router-hash-link';
import './nav.css';
import { useState } from 'react';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  // toggle navbar and close hamburger menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // close navbar and hamburger menu on menu item click
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className=''>
      <div className="logo">
        <a href="/">
          <img
            src="/media/logo/ThinkFrimLogo.svg"
            className="logo-img"
            alt=""
          />
        </a>
      </div>
      <div className={isOpen ? "hamburger toggle" : "hamburger"} onClick={toggleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <HashLink to="/about" className='font-semibold' smooth onClick={closeNavbar}>About</HashLink>
        </li>
        <li>
          <HashLink to="/#service" className='font-semibold' smooth onClick={closeNavbar}>Services</HashLink>
        </li>
        <li>
        <HashLink to="/contact" className='font-semibold' smooth onClick={closeNavbar}>Contact Us</HashLink>
        </li>
        <a href="https://instagram.com/dietbyyara?igshid=MTIyMzRjYmRlZg==">
          <img src="/media/icons/Instagram.svg" alt="" />
        </a>
      </ul>
    </nav>
  )
}

export default Nav;