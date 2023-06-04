import { Link } from 'react-router-dom';
/**
 * @todo category list from DB
 * @todo after click on cat name fetch list of tools and display on list below with new header based on cat
 */

export const ToolsAssortment = () => {
   const fetchByCat = async (e) => {
      const click = e.target.textContent;
      document.querySelector('#toolsList').scrollIntoView();

      console.log(click);
   };

   return (
      <section className='px-16' id='oferta'>
         <p className='sectionTitle'>Szukaj wedlug kategori:</p>
         <article onClick={fetchByCat} className='section' id=''>
            <div className='toolCat'>elektronarzedzia</div>
            <div className='toolCat'>zageszczarki</div>
            <div className='toolCat'>akcesoria do betonu</div>
            <div className='toolCat'>narzedzia ogrodnicze</div>
            <div className='toolCat'>rusztowania</div>
            <div className='toolCat'>nagrzewnice</div>
            <div className='toolCat'>osuszacze</div>
         </article>
         <p className='pt-8 sectionTitle' id='toolsList'>
            Najczesciej wypozyczane:
         </p>
         <article className='section'>
            <div className='card group w-[20rem] h-[26rem] bg-base-100 hover:shadow-xl'>
               <figure>
                  <img src='../../../../radio' className='object-cover group-hover:scale-110 duration-300' alt='' />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>radio</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-end mt-4'>
                     <Link to={'/wynajem/radio/1'} className='btn'>
                        wypozycz
                     </Link>
                  </div>
               </div>
            </div>
            <div className='card group w-[20rem] h-[26rem] bg-base-100 hover:shadow-xl'>
               <figure>
                  <img
                     src='../../../../wiertarka.jpg'
                     className='object-cover group-hover:scale-110 duration-300'
                     alt=''
                  />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>wiertarka</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-end mt-4'>
                     <Link to={'/wynajem/wiertarka.jpg/2'} className='btn'>
                        wypozycz
                     </Link>
                  </div>
               </div>
            </div>
            <div className='card group w-[20rem] h-[26rem] bg-base-100 hover:shadow-xl'>
               <figure>
                  <img src='../../../../wkretarka' className='object-cover group-hover:scale-110 duration-300' alt='' />
               </figure>
               <div className='card-body p-4'>
                  <h2 className='card-title'>wkretarka</h2>
                  <p>cena: 100/doba</p>
                  <p>wynajmij</p>
                  <div className='card-actions justify-end mt-4'>
                     <Link to={'/wynajem/wkretarka/3'} className='btn'>
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
