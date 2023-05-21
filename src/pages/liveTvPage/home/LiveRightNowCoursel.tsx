import { LiveRightNowCard } from './shared/LiveRightNowCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function LiveRightNowCoursel() {
	const channels = [
		{
			id: 1,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 2,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 3,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 4,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 5,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 6,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 7,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 8,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 9,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
		{
			id: 10,
			channelName: 'Channel Name',
			imageSrc:
				'https://static01.nyt.com/images/2019/07/15/sports/15cricketWEB1/merlin_157953327_fcf2c9a5-91b0-45bd-a558-82c3ea87e047-superJumbo.jpg',
		},
	];

	return (
		<div>
			<div className='flex justify-between w-[95%] my-[36px] '>
				<h1 className='text-white md:text-xl text-md '>Live right now</h1>
				{/* <p className="text-sm cursor-pointer gray-text place-self-end">
          {""} See all <span className="font-extrabold white-text">10</span>
        </p> */}
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
					{channels.map((channel) => (
						<SwiperSlide className='!w-[230px]' key={channel.id}>
							<Link to='/livetv/player'>
								<LiveRightNowCard
									imageSrc={channel.imageSrc}
									live='Live'
									liveCount='30'
									title='TeleShopping'
									desc='Buying goods from the comfort of home'
									channelLogo='https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png'
									time='8:00 pm - 9:00 pm'
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default LiveRightNowCoursel;
