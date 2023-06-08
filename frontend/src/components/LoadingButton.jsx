export const LoadingButton = ({ className }) => {
   return (
      <button className={`btn ${className}`}>
         <span className='loading loading-spinner'></span>
         loading
      </button>
   );
};
