import { ChannelCard } from './shared/ChannelCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

function ChannelCoursel() {
	const channels = [
		{
			id: 1,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 2,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 3,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 4,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 5,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 6,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 7,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 8,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 9,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
		{
			id: 10,
			channelName: 'Channel Name',
			img: 'https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png',
		},
	];
	return (
		<div>
			<div className='flex justify-between w-[95%] my-[36px]'>
				<h1 className='text-white md:text-xl text-md '>Channels</h1>
				<p className='text-sm cursor-pointer text-[#F50537]'>See all</p>
			</div>

			<div>
				<Swiper
					slidesPerView={5}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						650: {
							slidesPerView: 2,
						},
						1000: {
							slidesPerView: 3,
						},
						1100: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
						1500: {
							slidesPerView: 5,
						},
						1600: {
							slidesPerView: 5,
						},
					}}
					modules={[Pagination]}
					className='mt-4 mb-5 mySwiper'
				>
					{channels.map((channel, i) => (
						<div key={i}>
							<SwiperSlide className='!w-[160px]'>
								<ChannelCard
									imageSrc={channel.img}
									channelName={channel.channelName}
								/>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default ChannelCoursel;
