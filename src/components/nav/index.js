import { Sling as Hamburger } from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion";
import { HashLink } from 'react-router-hash-link';
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

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className='px-2 sm:px-4 md:px-[5rem] py-5'>
      <div className="container flex flex-wrap items-center justify-between">
        <a href="/">
          <img className="w-2/3 md:w-full py-5 mx-3" src="/media/logo/ThinkFrimLogo.svg" alt="thinkfrim.svg" />
        </a>
        <div className='flex items-center md:hidden'>
          <Hamburger
            toggled={isOpen}
            onToggle={toggleNavbar}
            duration={0.8}
            direction="right"
            color='#F9BC60'
          />
        </div>
        <div className={` relative w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} onClick={closeNavbar} id="navbar-default">
          <ul className="absolute top-0 left-0 w-full overflow-y-hidden flex flex-col items-center p-5 mt-4 RajahBg rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:static md:bg-transparent">
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0 md:text-white dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="#services">
                Service
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0  md:text-white dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/About">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth className="block py-2 pl-3 pr-4 chineseBlack font-medium rounded md:hover:bg-transparent md:text-2xl md:border-0 md:p-0  md:text-white dark:text-gray-400 md:dark:hover:text-white md:text-[20px] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Contact">
                Contact us
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;