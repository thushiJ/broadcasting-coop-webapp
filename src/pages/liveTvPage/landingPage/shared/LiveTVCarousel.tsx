import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import laptop from '../../../../Assets/Images/laptop.png';

function LiveTVCaroursel() {
	return (
		<div className='my-5 h-80 '>
			<div className='absolute z-10 w-full mx-auto gradientX'>
				<img
					src={laptop}
					alt=''
					className='mx-auto '
					height={'300px'}
					width={'500px'}
				/>
			</div>

			<div className='relative flex items-center '>
				<Swiper
					slidesPerView={6}
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
							slidesPerView: 6,
						},
						1600: {
							slidesPerView: 6,
						},
					}}
					modules={[Pagination]}
					className='relative mt-20 mb-5 mySwiper'
				>
					{channels.map((channel) => (
						<div key={channel.id}>
							<SwiperSlide className=''>
								<img
									src={channel.imageSrc}
									alt=''
									height={'280px'}
									width={'242px'}
								/>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default LiveTVCaroursel;

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
