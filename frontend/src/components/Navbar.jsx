import { useEffect, useRef, useState } from 'react';
import { logoIcon, userIcon } from '../utils/icons';

export const Navbar = () => {
   const navBtn = useRef();
   const navRef = useRef();
   const [navbarVis, setNavbarVis] = useState(true);

   // toggle navbar visibility
   const toggleNavbar = (e) => {
      const click = e.target;
      if (navBtn.current.contains(click)) setNavbarVis((prev) => !prev);
      if (click.classList.contains('navbar__btn')) setNavbarVis(false);
   };

   // toggle nav menu vis when user clicks outside of nav menu when menu is vis
   useEffect(() => {
      if (!navbarVis) return;
      const handleOusideClick = (e) => {
         if (!navRef.current.contains(e.target)) setNavbarVis(false);
      };

      document.addEventListener('click', handleOusideClick);

      return () => document.removeEventListener('click', handleOusideClick);
   }, [navbarVis]);

   return (
      <nav ref={navRef} onClick={toggleNavbar} className='navbar'>
         {logoIcon}
         <input type='checkbox' id='navbar-check' />
         <div className='navbar__btn-wrapper'>
            <label ref={navBtn} htmlFor='navbar-check'>
               <span></span>
               <span></span>
               <span></span>
            </label>
         </div>
         <ul className={`navbar__items-wrapper ${navbarVis ? 'show' : 'hide'}`}>
            <li>
               <a href='/'>
                  <button className='navbar__btn'>Start</button>
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <button className='navbar__btn'>Contact</button>
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <button className='navbar__btn'>About</button>
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <button className='navbar__btn'>{userIcon}</button>
               </a>
            </li>
         </ul>
      </nav>
   );
   //    return (
   //       <nav ref={navRef} onClick={toggleNavbar} className='flex items-center justify-between h-12 p-8 w-full relative bg-teal-400 text-red'>
   //          {logoIcon}
   //          <input type='checkbox' className='hidden' id='navbar-check' />
   //          <div className=''>
   //             <label ref={navBtn} className='flex flex-col hover:cursor-pointer' htmlFor='navbar-check'>
   //                <span className='block w-8 h-4 '></span>
   //                <span className='block w-8 h-4 '></span>
   //                <span className='block w-8 h-4 '></span>
   //             </label>
   //          </div>
   //          <ul className={`flex gap-8 items-center pl-0 list-none left-0 top-12 ${navbarVis ? '' : 'hidden'}`}>
   //             <li>
   //                <a href='/'>
   //                   <button className='navbar__btn'>Start</button>
   //                </a>
   //             </li>
   //             <li>
   //                <a href='#contact'>
   //                   <button className='navbar__btn'>Contact</button>
   //                </a>
   //             </li>
   //             <li>
   //                <a href='#contact'>
   //                   <button className='navbar__btn'>About</button>
   //                </a>
   //             </li>
   //             <li>{userIcon}</li>
   //          </ul>
   //       </nav>
   //    );
};
