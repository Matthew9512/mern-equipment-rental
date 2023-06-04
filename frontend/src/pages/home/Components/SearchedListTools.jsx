import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const SearchedListTools = ({ showDropdown, setShowDropdown }) => {
   const dropRef = useRef();

   // toggle drop menu vis when user clicks outside of drop menu when menu is vis
   useEffect(() => {
      if (!showDropdown) return;
      const handleOusideClick = (e) => {
         if (!dropRef.current.contains(e.target)) setShowDropdown(false);
      };

      document.addEventListener('click', handleOusideClick);

      return () => document.removeEventListener('click', handleOusideClick);
   }, [showDropdown]);

   return (
      <div
         ref={dropRef}
         className={`${
            !showDropdown ? 'hidden' : ''
         } rounded-xl max-h-96 overflow-y-scroll overflow-hidden z-50 absolute top-[70%] bg-slate-400 `}
      >
         <p className='mb-4 p-4 hover:bg-red-200'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
         <p className='item'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
         <p className='item'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
         <p className='item'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
         <p className='item'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
         <p className='item'>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi quas suscipit distinctio,
            architecto optio non iste eum voluptatum eos ab animi ratione? Iusto, ab culpa eius voluptate adipisci
            necessitatibus exercitationem aliquam minus officiis. Sit atque minus optio fuga illo? .
         </p>
      </div>
   );
};
