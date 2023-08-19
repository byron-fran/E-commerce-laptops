import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y,Controller,EffectFade, EffectCube, EffectCoverflow,  Autoplay, EffectCards } from 'swiper/modules'
import {useState} from 'react'
import 'swiper/css/effect-cards'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Main = () => {
    const swiper = useSwiper();
    const [firstSwiper, setFirstSwiper] = useState(null);
    return (
        <>
            <div className='sliders'>
                <h1 className='texto-slider'>Próximos Lanzamientos</h1>
            <Swiper
            loop
            autoplay= {{
                delay : 2000,
                disableOnInteraction: false,
                

            }}
            modules={[Controller, Pagination, Navigation,EffectFade, Scrollbar, A11y, EffectCube, EffectCoverflow, Autoplay, EffectCards]}
             spaceBetween={10}
             slidesPerView={1}
             navigation={true}

            parallax
             pagination={{clickable : true}}
             scrollbar={{draggable : true}}
             effect='coverflow'
           
             controller={{control: firstSwiper}}

            >
             
                    
                 <SwiperSlide className='slider-box'> 
                        <img src="images/slider-1.jpg" alt="" className='imagen-slider' />
                    </SwiperSlide>
                    
                    
     
           
                    <SwiperSlide > 
                        <img src="images/slider-2.jpg" alt="" className='imagen-slider' />
                    </SwiperSlide>
                
               
                    <SwiperSlide > 
                        <img src="images/slider-3.jpg" alt="" className='imagen-slider' />
                    </SwiperSlide>
               
             
                    <SwiperSlide > 
                        <img src="images/slider-4.jpg" alt="" className='imagen-slider' />
                    </SwiperSlide>
              
                    <SwiperSlide > 
                        <img src="images/slider-5.jpg" alt="" className='imagen-slider' />
                    </SwiperSlide>
                
             
                 
            </Swiper>
          
            </div>
        
        </>
    )
};

export default Main;