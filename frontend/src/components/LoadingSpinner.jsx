export const LoadingSpinner = ({ loading }) => {
   return (
      <div
         className={`absolute top-0 bottom-0 left-0 right-0 bg-slate-600 z-10 flex justify-center items-center ${
            loading ? '' : 'hidden'
         } `}
      >
         <span className='loading loading-spinner loading-lg text-white'></span>
      </div>
   );
};
