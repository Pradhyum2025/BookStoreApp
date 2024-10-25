// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FreeBookCard from "../component/FreeBookCard"
// Import Swiper styles
import 'swiper/css';

export default function ImgSlider({FreeBooks}){
  return (
    <Swiper
      spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='p-7'
      breakpoints={{
        0:{
          slidesPerView:1
        },
        678:{
          slidesPerView:2
        },
        1024:{
          slidesPerView:3
        },
      }}
    >
      {FreeBooks.map((book)=>{
        return  <SwiperSlide>
          <FreeBookCard freeBook={book}/>
        </SwiperSlide>
      })}

    </Swiper>
  );
};
