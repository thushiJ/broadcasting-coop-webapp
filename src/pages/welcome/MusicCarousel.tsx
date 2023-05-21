import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import MusicCard from './shared/MusicCard';

function MusicCarousel() {
	const cards = [
		{
			id: 1,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://apollohou.com/wp-content/uploads/y0fmiq96uu871.jpg',
		},
		{
			id: 2,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
		},
		{
			id: 3,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://qqcdnpictest.mxplay.com/pic/484f535d77542bca63e21efb896f4cd6/en/2x3/320x480/test_pic1638541013780.webp',
		},
		{
			id: 4,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			img: 'https://qqcdnpictest.mxplay.com/pic/cda6ced62b423d4a51c8e817f31d8067/en/2x3/320x480/test_pic1583329887991.webp',
		},
		{
			id: 5,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://www.bollymoviereviewz.com/wp-content/uploads/2013/05/330px-Fantastic_Beasts2C_The_Secrets_of_Dumbledore_teaser_poster.png',
		},
		{
			id: 6,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://assets.gadgets360cdn.com/pricee/assets/product/202205/jurassic_world_dominion_poster_1652087377.jpeg',
		},
		{
			id: 7,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://img.republicworld.com/republic-prod/stories/images/15731132155dc3cd7fb3fd3.jpg',
		},
		{
			id: 8,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://m.media-amazon.com/images/I/A1CcbJfKqJL._AC_SL1500_.jpg',
		},
		{
			id: 9,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://i.pinimg.com/736x/07/12/4d/07124dcc3f708eabd0a1d5bc0f52a179.jpg',
		},
		{
			id: 10,
			title: 'Lorem Ipsum is simply',
			artisit: 'Tavlor Shift',
			img: 'https://img.republicworld.com/republic-prod/stories/images/xxhdpi/aflifh6ao5w1u1bk_1639573138.jpeg',
		},
	];

	const [cardDetails, setCardDetails] = useState(cards);
	return (
		<div>
			{' '}
			<div className='flex justify-between w-[95%]'>
				<h1 className='text-white md:text-xl text-md '>
					Music picked out for you
				</h1>
				<p className='text-sm font-bold cursor-pointer red-text place-self-end'>
					{' '}
					See all
				</p>
			</div>
			<Swiper
				slidesPerView={6}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					540: {
						slidesPerView: 2,
					},
					740: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1400: {
						slidesPerView: 6,
					},
					1600: {
						slidesPerView: 7,
					},
				}}
				modules={[Pagination]}
				className='mt-8 mb-20 mySwiper'
			>
				{cardDetails.map((card, i) => (
					<SwiperSlide key={i}>
						<MusicCard {...card} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MusicCarousel;
