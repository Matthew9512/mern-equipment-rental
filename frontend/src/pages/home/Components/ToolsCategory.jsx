export const ToolsCategory = ({ fetchData }) => {
   const fetchByCat = async (e) => {
      if (!e.target.classList.contains('toolCat')) return;
      const kategoriaProduktu = e.target.textContent;

      // scroll to section that displays list of tools
      // document.querySelector('#toolsList').scrollIntoView();

      await fetchData({
         method: 'GET',
         url: `/szukaj/${kategoriaProduktu}`,
      });
   };

   return (
      <>
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
      </>
   );
};
