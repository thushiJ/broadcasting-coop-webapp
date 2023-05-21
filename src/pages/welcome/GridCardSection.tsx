import { useState } from 'react';
import LiveTv from '../../Assets/Images/livetv.png';
import Music from '../../Assets/Images/music.png';
import PPV from '../../Assets/Images/payperview.png';
import Podcast from '../../Assets/Images/podcast.png';
import Radio from '../../Assets/Images/radio.png';
import Video from '../../Assets/Images/video.png';
import GridCard from './shared/GridCard';

function GridCardsSection() {
	const cards = [
		{
			id: 1,
			theme: 'dark',
			title: 'Video',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { Video },
		},
		{
			id: 2,
			theme: 'light',
			title: 'Radio',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { Radio },
		},
		{
			id: 3,
			theme: 'dark',
			title: 'LiveTv',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { LiveTv },
		},
		{
			id: 4,
			theme: 'light',
			title: 'Music',
			info: 'Watch movies and shows anytime anywhere personalized for you',
			img: { Music },
		},
		{
			id: 5,
			theme: 'dark',
			title: 'PayPerView',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { PPV },
		},
		{
			id: 6,
			theme: 'light',
			title: 'Podcast',
			info: 'Watch movies and shows anytime anywhere personalized for you ',
			img: { Podcast },
		},
	];

	const [cardDetails, setCardDetails] = useState(cards);
	return (
		<div className='grid mb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{cardDetails.map((card, i) => (
				<div key={i}>
					<GridCard {...card} />
				</div>
			))}
		</div>
	);
}

export default GridCardsSection;
