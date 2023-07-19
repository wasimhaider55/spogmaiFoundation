import React, { useState } from 'react'
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"
import Button from './Button';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  // navigations
  const navBar = [
    {
      id: 1,
      name: "Home",
      href: "home"
    },
    {
      id: 2,
      name: "About Us",
      href: "about"
    },
    {
      id: 3,
      name: "Our Causes",
      href: "portfolio"
    },
    {
      id: 4,
      name: "Gallery",
      href: "experience"
    },
    {
      id: 5,
      name: "Contact Us",
      href: "contact"
    }
  ]
  return (
    <div className='flex justify-between items-center px-4 w-full h-20 text-white bg-gradient-to-t from-gray-900 bg-black fixed z-10'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>HungerCare</h1>
      </div>
      <ul className='hidden lg:flex'>
        {
          navBar.map(({ id, name, href }) => (
            <li className=' px-4 cursor-pointer capitalize font-medium
                        hover:scale-125  duration-200 hover:text-rose-600 hover:underline' key={id}>
              <Link
                to={href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={-80}
                className="transition-all duration-400"
              >
                {name}
              </Link>
            </li>

))
        }
      </ul>
      <Button />
      {/* for mobile devices  */}
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-300 lg:hidden '>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full
                 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 '>
          {
            navBar.map(({ id, name, href }) => (
              <li className='px-4 cursor-pointer capitalize py-6 text-4xl' key={id} >
                <Link
                  to={href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="transition-all duration-400"
                  onClick={() => setNav(false)}
                >
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>

      )}

    </div>
  );
};

export default NavBar