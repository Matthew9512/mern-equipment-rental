export const ToolsDetails = ({ toolName }) => {
   return (
      <article className='w-3/5 mx-auto'>
         <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
            <img src={`../../../../${toolName}`} alt='' className='w-96 h-96 pb-8 object-cover' />
            <div className=''>
               <p>Parametry techniczne:</p>
               <p>11</p>
               <p>22</p>
               <p>33</p>
               <p>44</p>
               <p>55</p>
            </div>
         </div>
         <p>{toolName}</p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum dolorem temporibus a voluptate illum
         voluptatibus quaerat quae alias corrupti non in, harum similique eligendi et fuga aspernatur facilis doloribus
         optio, quisquam facere possimus dolores. Quidem velit illum incidunt aspernatur dolorem quod id blanditiis amet
         laboriosam beatae minima ex, modi optio?
      </article>
   );
};
