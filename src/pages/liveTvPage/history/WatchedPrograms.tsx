import { LiveRightNowCard } from '../shared/LiveRightNowCard';

const WatchedPrograms = () => {
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
			<div className='grid grid-cols-6 mt-4 gap-y-8'>
				{channels.map((channel) => (
					<LiveRightNowCard
						imageSrc={channel.imageSrc}
						live='Live'
						liveCount='30'
						title='TeleShopping'
						desc='Buying goods from the comfort of home'
						channelLogo='https://dr56wvhu2c8zo.cloudfront.net/insighttvuhd/assets/b2a1a9f0-c735-4c8e-99d2-febad143b04c.png'
						time='8:00 pm - 9:00 pm'
					/>
				))}
			</div>
		</div>
	);
};

export default WatchedPrograms;
