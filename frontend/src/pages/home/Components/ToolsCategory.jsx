export const ToolsCategory = ({ fetchData }) => {
   const fetchByCat = async (e) => {
      if (!e.target.classList.contains('category')) return;
      const productCat = e.target.closest('.toolCat').dataset.tip;
      console.log(productCat);

      // scroll to section that displays list of tools
      document.querySelector('#toolsList').scrollIntoView();

      await fetchData({
         method: 'GET',
         url: `/szukaj/${productCat}`,
      });
   };

   return (
      <>
         <p className='sectionTitle'>Szukaj wedlug kategori:</p>
         <article onClick={fetchByCat} className='section justify-center' id=''>
            <div className='toolCat tooltip category' data-tip='elektronarzedzia'>
               <img src='/elektronarzedzia.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='zageszczarki'>
               <img src='/zageszczarki.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='akcesoria do betonu'>
               <img src='/akcesoria-do-betonu.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='narzedzia ogrodnicze'>
               <img src='/narzedzia-ogrodnicze.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='rusztowania'>
               <img src='/rusztowania.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='nagrzewnice'>
               <img src='/nagrzewnice.png' className=' h-12 w-12 category' />
            </div>
            <div className='toolCat tooltip category' data-tip='osuszacze'>
               <img src='/osuszacze.png' className=' h-12 w-12 category' />
            </div>
         </article>
      </>
   );
};
