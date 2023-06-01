import { useEffect, useRef, useState } from 'react';
import { logoIcon, shopIcon } from '../utils/icons';

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
               <a href='#oferta'>
                  <button className='navbar__btn'>Oferta</button>
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <button className='navbar__btn'>Kontakt</button>
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <button className='navbar__btn'>O nas</button>
               </a>
            </li>
            <li>
               <label htmlFor='my-drawer-4' className='drawer-button'>
                  {shopIcon}
               </label>
               {/* <button className='navbar__btn'>{shopIcon}</button> */}
            </li>
         </ul>
      </nav>
   );
};
