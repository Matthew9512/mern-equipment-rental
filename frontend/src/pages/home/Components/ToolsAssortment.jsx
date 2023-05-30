/**
 * category list from DB
 */

export const ToolsAssortment = () => {
   return (
      <section className='px-16 bg-teal-400'>
         <p>Szukaj wedlug kategori:</p>
         <article className='flex gap-4 flex-wrap justify-center'>
            <div className='toolCat'>elektronarzedzia</div>
            <div className='toolCat'>zageszczarki</div>
            <div className='toolCat'>akcesoria do betonu</div>
            <div className='toolCat'>narzedzia ogrodnicze</div>
            <div className='toolCat'>rusztowania</div>
            <div className='toolCat'>nagrzewnice</div>
            <div className='toolCat'>osuszacze</div>
         </article>
         {/*  */}
         <article className='flex flex-col'>
            <p>Najczesciej wypozyczane:</p>
            <div className='toolCat'>elektronarzedzia</div>
            <div className='toolCat'>zageszczarki</div>
         </article>
      </section>
   );
};
