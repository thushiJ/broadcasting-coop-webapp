import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Navigation } from 'swiper';
import HeroCard from './shared/HeroCard';
function HeroCarousel() {
	return (
		<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
			<SwiperSlide className='mb-14'>
				<HeroCard />
			</SwiperSlide>
			<SwiperSlide className='mb-14'>
				<HeroCard />
			</SwiperSlide>
			<SwiperSlide className='mb-14'>
				<HeroCard />
			</SwiperSlide>
		</Swiper>
	);
}

export default HeroCarousel;
