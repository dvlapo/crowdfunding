import crowdfundLogo from '../assets/logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import closeButton from '../assets/icon-close-menu.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggeleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex p-7 sm:px-40 sm:pt-12 pb-64 justify-between relative">
      <div>
        <img src={crowdfundLogo} alt="" />
      </div>
      <div className="relative" onClick={toggeleNavBar}>
        {isNavOpen ? (
          <img src={closeButton} alt="" className="sm:hidden" />
        ) : (
          <img src={hamburger} alt="" className="sm:hidden" />
        )}
      </div>

      {isNavOpen && (
        <ul className="text-black bg-white font-medium text-xl py-5 w-10/12 absolute top-24 left-9 sm:flex gap-10 sm:text-sm sm:text-white rounded-2xl z-30 shadow-custom ">
          <li className="pb-5 ml-6 mr">
            <a href>About</a>
          </li>
          <div className="h-px w-full bg-lightishGray "></div>
          <li className="py-5 ml-6">
            <a href>Discover</a>
          </li>
          <div className="h-px w-full bg-lightishGray "></div>

          <li className="pt-5 ml-6 ">
            <a href>Get Started</a>
          </li>
        </ul>
      )}
      <ul className="hidden font-medium sm:flex gap-10 sm:text-sm sm:text-white ">
        <li className="cursor-pointer">
          <a href>About</a>
        </li>

        <li className="cursor-pointer">
          <a href>Discover</a>
        </li>

        <li className="cursor-pointer">
          <a href>Get Started</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
