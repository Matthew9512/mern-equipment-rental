import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Slider = () => {
   return (
      <Splide
         options={{
            // autoplay: true,
            interval: 3000,
            type: 'loop',
            height: '60vh',
            width: '100%',
            perPage: 1,
            arrows: false,
            pagination: true,
         }}
         aria-label='React Splide'
      >
         <SplideSlide>
            <img src='../../kangaroo.jpg' className='w-full h-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='../../cat.jpg' className='w-full h-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='../../mountain.jpg' className='w-full h-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='../../water.jpg' className='w-full h-full object-cover' />
         </SplideSlide>
      </Splide>
   );
};
