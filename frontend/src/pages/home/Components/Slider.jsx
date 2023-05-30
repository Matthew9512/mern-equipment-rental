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

// import { useEffect } from 'react';

// export const Slider = () => {
//    let currentItem = 0;
//    const carouselItems = document.querySelectorAll('.carousel-item');
//    const carouselItemsLength = carouselItems.length;
//    // move carousel
//    const carousel = (currentItem) => {
//       carouselItems.forEach((item, index) => {
//          item.style.transform = `translateX(${100 * (index - currentItem)}%)`;
//       });
//    };

//    const moveRight = () => {
//       console.log(`hi`);
//       if (currentItem === carouselItemsLength - 1) {
//          currentItem++;
//          currentItem = 0;
//       } else currentItem++;
//       carousel(currentItem);
//    };

//    const moveLeft = () => {
//       if (currentItem === 0) {
//          currentItem--;
//          currentItem = carouselItemsLength - 1;
//       } else currentItem--;
//       carousel(currentItem);
//    };

//    // setInterval(() => {
//    //    // moveRight();
//    // }, 1000);

//    return (
//       <>
//          <article className='carousel h-[80vh] w-full'>
//             <div id='item1' className='carousel-item w-full'>
//                <img src='../../kangaroo.jpg' className='w-full' />
//             </div>
//             <div id='item2' className='carousel-item w-full'>
//                <img src='../../cat.jpg' className='w-full' />
//             </div>
//             <div id='item3' className='carousel-item w-full'>
//                <img src='../../mountain.jpg' className='w-full' />
//             </div>
//             <div id='item4' className='carousel-item w-full'>
//                <img src='../../water.jpg' className='w-full' />
//             </div>
//          </article>
//          <div className='flex justify-center w-full py-2 gap-2'>
//             <a href='#item1' className='btn btn-xs'>
//                1
//             </a>
//             <a href='#item2' className='btn btn-xs'>
//                2
//             </a>
//             <a href='#item3' className='btn btn-xs'>
//                3
//             </a>
//             <a href='#item4' className='btn btn-xs'>
//                4
//             </a>
//          </div>
//       </>
//    );
// };
