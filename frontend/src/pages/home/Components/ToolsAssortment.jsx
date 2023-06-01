import { Link } from 'react-router-dom';
import { bookmarkIcon } from '../../../utils/icons';
/**
 * category list from DB
 */

export const ToolsAssortment = () => {
   const bookTool = (e) => {
      console.log(e.target);
      // const click = e.target;
      // const parent = click.closest('.card');
   };

   return (
      <section className='px-16 bg-teal-400' id='oferta'>
         <p>Szukaj wedlug kategori:</p>
         <article className='section'>
            <div className='toolCat'>elektronarzedzia</div>
            <div className='toolCat'>zageszczarki</div>
            <div className='toolCat'>akcesoria do betonu</div>
            <div className='toolCat'>narzedzia ogrodnicze</div>
            <div className='toolCat'>rusztowania</div>
            <div className='toolCat'>nagrzewnice</div>
            <div className='toolCat'>osuszacze</div>
         </article>
         {/*  */}
         <p>Najczesciej wypozyczane:</p>
         <article className='section'>
            <div to={'/wynajem/1'} className='card group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
               <figure>
                  <img src='../../../../radio' className='object-cover group-hover:scale-110 duration-300' alt='' />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>nazwa</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-between items-center'>
                     <p onClick={bookTool} className='cursor-pointer '>
                        {bookmarkIcon}
                     </p>
                     <Link to={'/wynajem/1'} className='btn btn-primary'>
                        wypozycz
                     </Link>
                  </div>
               </div>
            </div>
            <div to={'/wynajem/2'} className='card group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
               <figure>
                  <img
                     src='../../../../wiertarka.jpg'
                     className='object-cover group-hover:scale-110 duration-300'
                     alt=''
                  />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>nazwa</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-between items-center'>
                     <p onClick={bookTool} className='cursor-pointer '>
                        {bookmarkIcon}
                     </p>
                     <Link to={'/wynajem/2'} className='btn btn-primary'>
                        wypozycz
                     </Link>
                  </div>
               </div>
            </div>
            <div to={'/wynajem/3'} className='card group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
               <figure>
                  <img src='../../../../wkretarka' className='object-cover group-hover:scale-110 duration-300' alt='' />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>nazwa</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-between items-center'>
                     <p onClick={bookTool} className='cursor-pointer '>
                        {bookmarkIcon}
                     </p>
                     <Link to={'/wynajem/3'} className='btn btn-primary'>
                        wypozycz
                     </Link>
                  </div>
               </div>
            </div>
         </article>
      </section>
   );
};
{
   /* <article className='section'>
<div className='flex flex-col justify-end rounded-lg overflow-hidden group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
   <figure>
      <img
         src='../../../../radio'
         className='h-[20rem] mx-auto object-cover group-hover:scale-105 duration-300'
         alt=''
      />
   </figure>
   <div className='p-4'>
      <h2 className=''>nazwa</h2>
      <p>cena: 100/doba</p>
      <p>wynajmij</p>
      <div className='flex justify-between items-center'>
         <p onClick={bookTool} className='cursor-pointer '>
            {bookmarkIcon}
         </p>
         <Link to={'/wynajem/1'} className='btn btn-primary'>
            wypozycz
         </Link>
      </div>
   </div>
</div>
<div className='flex flex-col justify-end rounded-lg overflow-hidden group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
   <figure>
      <img
         src='../../../../wiertarka.jpg'
         className='h-[20rem] mx-auto object-cover group-hover:scale-105 duration-300'
         alt=''
      />
   </figure>
   <div className='p-4'>
      <h2 className=''>nazwa</h2>
      <p>cena: 100/doba</p>
      <p>wynajmij</p>
      <div className='flex justify-between items-center'>
         <p onClick={bookTool} className='cursor-pointer '>
            {bookmarkIcon}
         </p>
         <Link to={'/wynajem/2'} className='btn btn-primary'>
            wypozycz
         </Link>
      </div>
   </div>
</div>
<div className='flex flex-col justify-end rounded-lg overflow-hidden group w-[20rem] h-[26rem] bg-base-100 shadow-xl'>
   <figure>
      <img
         src='../../../../wkretarka'
         className='h-[20rem] mx-auto object-cover group-hover:scale-105 duration-300'
         alt=''
      />
   </figure>
   <div className='p-4'>
      <h2 className=''>nazwa</h2>
      <p>cena: 100/doba</p>
      <p>wynajmij</p>
      <div className='flex justify-between items-center'>
         <p onClick={bookTool} className='cursor-pointer '>
            {bookmarkIcon}
         </p>
         <Link to={'/wynajem/3'} className='btn btn-primary'>
            wypozycz
         </Link>
      </div>
   </div>
</div>
</article> */
}
