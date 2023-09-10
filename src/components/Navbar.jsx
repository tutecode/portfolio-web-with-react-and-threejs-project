import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, linkedin } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // State to keep track of the active link
  const [toggle, setToggle] = useState(false); // State to toggle the mobile menu
  const [scrolled, setScrolled] = useState(false); // State to track if the page has been scrolled

  useEffect(() => {
    // useEffect to add a scroll event listener and update the 'scrolled' state accordingly
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 justify-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer flex items-center`}
              onClick={() => setActive(nav.title)}
            >
              {nav.id === "linkedin" ? (
                // Render the LinkedIn link with the icon
                <a href={nav.url} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
                </a>
              ) : (
                // Render other links
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile menu items */}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;