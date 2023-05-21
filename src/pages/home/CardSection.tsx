import { useState } from 'react';
import Card from './shared/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

function CardSection() {
	const cards = [
		{
			id: 1,
			title: 'Podcast',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
			img: 'https://media.kingston.com/kingston/opengraph/ktc-opengraph-solutions-gaming-streaming-101.png',
		},
		{
			id: 2,
			title: 'Radio',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
			img: 'https://i.insider.com/5ffc97f3bde805001980c321?width=1136&format=jpeg',
		},
		{
			id: 3,
			title: 'Video',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
			img: 'https://dutchreview.com/wp-content/uploads/Streaming-Services-Netherlands-VODAFONE_ZIGGO_Ziggo-Go-Supplied.jpg',
		},
		{
			id: 4,
			title: 'Music',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			img: 'https://frontier.com/~/media/resources/seo/Images/twitch-streamer.ashx?la=en&hash=A0D6261CE6BBFB46C63B4363107D3D8F68E5EFC0',
		},
		{
			id: 5,
			title: 'LiveTV',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
			img: 'https://manycam.com/blog/wp-content/uploads/2019/05/improve-your-live-streaming-quality.jpg',
		},
		{
			id: 6,
			title: 'Payperview',
			info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
			img: 'https://i.insider.com/5ec6a0f25af6cc4d070469ea?width=700',
		},
	];

	const [cardDetails, setCardDetails] = useState(cards);
	return (
		<div className='relative'>
			<Swiper
				slidesPerView={3}
				spaceBetween={0}
				loop={true}
				loopFillGroupWithBlank={true}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					450: {
						slidesPerView: 2,
					},
					600: {
						slidesPerView: 3,
					},
					900: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1400: {
						slidesPerView: 6,
					},
				}}
				modules={[Pagination]}
				className='z-20 mt-8 mb-20 singlecard mySwiper'
			>
				{cardDetails.map((card: any, i: number) => (
					<SwiperSlide key={i}>
						<Card {...card} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default CardSection;
