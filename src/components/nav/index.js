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
    <nav>
      <div className="logo">
        <img
          src="/media/logo/ThinkFrimLogo.svg"
          className="logo-img"
          alt=""
        />
      </div>
      <div className={isOpen ? "hamburger toggle" : "hamburger"} onClick={toggleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={isOpen ? "nav-links open": "nav-links"}>
        <li><a href="#" onClick={closeNavbar}>About</a></li>
        <li><a href="#packages" onClick={closeNavbar}>Services</a></li>
        <li><a href="#footer" onClick={closeNavbar}>Contact Us</a></li>
        <a href="https://instagram.com/dietbyyara?igshid=MTIyMzRjYmRlZg==">
          <img src="/media/icons/Instagram.svg" alt="" />
        </a>
      </ul>
    </nav>
    // <nav className='px-2 py-5 chineseBlackBg'>
    //   <div className="container flex flex-wrap items-center justify-between">
    //     <a href="/">
    //       <img className="w-2/3 md:w-full py-5 mx-3" src="/media/logo/ThinkFrimLogo.svg" alt="thinkfrim.svg" />
    //     </a>
    //     <div className='flex items-center md:hidden'>
    //       <Hamburger
    //         toggled={isOpen}
    //         onToggle={toggleNavbar}
    //         duration={0.8}
    //         direction="right"
    //         color='#F9BC60'
    //       />
    //     </div>
    //     <div className={` relative w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} onClick={closeNavbar} id="navbar-default">
    //       <ul className="absolute w-full  flex flex-col items-center p-5 RajahBg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:static md:bg-transparent">
    //         <li className='group Rajah transition-all duration-300 ease-in-out'>
    //           <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0 md:text-white md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 bg-left-bottom bg-gradient-to-r from-amber-700 to-amber-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" to="#service">
    //             Service
    //           </HashLink>
    //         </li>
    //         <li className='group Rajah transition-all duration-300 ease-in-out'>
    //           <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0  md:text-white md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 bg-left-bottom bg-gradient-to-r from-amber-700 to-amber-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" to="/About">
    //             About
    //           </HashLink>
    //         </li>
    //         <li className='group Rajah transition-all duration-300 ease-in-out'>
    //           <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0  md:text-white md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 bg-left-bottom bg-gradient-to-r from-amber-700 to-amber-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out" to="/Contact">
    //             Contact us
    //           </HashLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Nav;