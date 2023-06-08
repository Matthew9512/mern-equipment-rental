import { useContext, useEffect, useRef, useState } from 'react';
import { logoIcon, shopIcon } from '../utils/icons';
import { rentalItemsContext } from '../context/rentalItemsContext';
import { Link, useLocation } from 'react-router-dom';

/**
 * @todo about us
 */

export const Navbar = () => {
   const navBtn = useRef();
   const navRef = useRef();
   const [navbarVis, setNavbarVis] = useState(true);
   const { rentalItems } = useContext(rentalItemsContext);
   const location = useLocation().pathname;

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
               <a href={location === '/' ? '#oferta' : '/'}>
                  <button className='navbar__btn'>Oferta</button>
               </a>
            </li>
            <li>
               <a href={location === '/' ? '#contact' : '/'}>
                  <button className='navbar__btn'>Kontakt</button>
               </a>
            </li>
            <li>
               <a href={location === '/' ? '#oferta' : '/'}>
                  <button className='navbar__btn'>O nas</button>
               </a>
            </li>
            <Link
               to={'/koszyk'}
               className='indicator hover:cursor-pointer'
               onClick={() => window.my_modal_1.showModal()}
            >
               {shopIcon}
               <span className='indicator-item rounded-full h-6 w-6 badge'>{rentalItems.length}</span>
            </Link>
         </ul>
      </nav>
   );
};
// ===========================
// import { useContext, useEffect, useRef, useState } from 'react';
// import { logoIcon, shopIcon } from '../utils/icons';
// import { rentalItemsContext } from '../context/rentalItemsContext';
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//    const navBtn = useRef();
//    const navRef = useRef();
//    const [navbarVis, setNavbarVis] = useState(true);
//    const { rentalItems } = useContext(rentalItemsContext);

//    // toggle navbar visibility
//    const toggleNavbar = (e) => {
//       const click = e.target;
//       if (navBtn.current.contains(click)) setNavbarVis((prev) => !prev);
//       if (click.classList.contains('navbar__btn')) setNavbarVis(false);
//    };

//    // toggle nav menu vis when user clicks outside of nav menu when menu is vis
//    useEffect(() => {
//       if (!navbarVis) return;
//       const handleOusideClick = (e) => {
//          if (!navRef.current.contains(e.target)) setNavbarVis(false);
//       };

//       document.addEventListener('click', handleOusideClick);

//       return () => document.removeEventListener('click', handleOusideClick);
//    }, [navbarVis]);

//    return (
//       <nav ref={navRef} onClick={toggleNavbar} className='navbar'>
//          {logoIcon}
//          <input type='checkbox' id='navbar-check' />
//          <div className='navbar__btn-wrapper'>
//             <label ref={navBtn} htmlFor='navbar-check'>
//                <span></span>
//                <span></span>
//                <span></span>
//             </label>
//          </div>
//          <ul className={`navbar__items-wrapper ${navbarVis ? 'show' : 'hide'}`}>
//             <li>
//                <a href='#oferta'>
//                   <button className='navbar__btn'>Oferta</button>
//                </a>
//             </li>
//             <li>
//                <a href='#contact'>
//                   <button className='navbar__btn'>Kontakt</button>
//                </a>
//             </li>
//             <li>
//                <a href='#contact'>
//                   <button className='navbar__btn'>O nas</button>
//                </a>
//             </li>
//             <li className='indicator hover:cursor-pointer' onClick={() => window.my_modal_1.showModal()}>
//                {shopIcon}
//                <span className='indicator-item rounded-full h-6 w-6 badge'>{rentalItems.length}</span>
//             </li>
//          </ul>
//       </nav>
//    );
// };
