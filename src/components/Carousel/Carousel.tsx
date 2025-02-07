import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
type CarouselProps = {
  slides: string[] | undefined;
  perView: {};
};

function Carousel(props: CarouselProps) {
  const { slides, perView } = props;

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#38b416',
        '--swiper-pagination-color': '#38b416',
      }}
      className="mySwiper"
      loop={true}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={2}
      breakpoints={perView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {slides?.map((slide) => (
        <SwiperSlide>
          <img src={slide} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
